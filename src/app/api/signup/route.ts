import { connect } from "@/dbconfig/dbconfig";
import User from "@/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"

// Connect to the database
connect();

export async function POST(request: NextRequest) {
    try {
        console.log("i got called")


        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        console.log(reqBody);

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return new NextResponse(JSON.stringify({ error: "User already exists" }), {
                status: 400
            });
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();
        console.log(savedUser);

        return new NextResponse(JSON.stringify({
            message: "User successfully saved",
            status: "success",
            savedUser
        }), {
            status: 200
        });

    } catch (error:any) {
        return new NextResponse(JSON.stringify({ error: error.message }), {
            status: 500
        });
    }
}
