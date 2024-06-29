import mongoose from "mongoose"
import  User  from "@/model/userModel"
import { connect } from "@/dbconfig/dbconfig"
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"

connect()

export async function POST(request:NextRequest) {
    try {
     
        const reqBody = await request.json();
        const [email, password] = reqBody;
    


        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "user does not exist !" }, { status: 400 });
        }
    
        const Password = await bcryptjs.compare(password, user.password)
        if (!password) { 
            return NextResponse.json({ error: "password is incorrect !" }, { status: 400 });
        }

        const tokenData = {
            id: user._id,
            email: user.email,
            
        }
        const token= jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" })
        const response = NextResponse.json({ message: "login Successful", success: true })
        response.cookies.set("token", token, {
            httpOnly: true
        })

        return response;
        
    } catch (error:any) {
        return NextResponse.json({ error: error.message }, {status:500})
    }



}