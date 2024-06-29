"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
  });
  const onSignup = async (event: any) => {
    try {
      event.preventDefault();
      console.log("signup attempted");
      const res = await axios.post("/api/signup", user);
      console.log(res.data);
      console.log("i am after post axios");
      // Await the response before redirecting
      router.push("/login");
    } catch (error: any) {
      console.error("signup failed", error.message);
      toast.error(error.message);
    }
  };

  return (
    <section className="h-screen w-screen flex justify-center items-center ">
      <div className=" rounded-md bg-white  w-fit min-w-fit max-w-fit">
        <div className="shrink-0  flex flex-col justify-center items-center ">
          <h1 className="text-black p-3 font-semibold">Sign Up</h1>
          <form className="flex flex-col p-5" onSubmit={onSignup} method="POST">
            <label htmlFor="username">Username</label>
            <input
              className="border-black border-solid border-2 rounded-md p-2 text-[#000000]"
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              required
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
            />
            <label htmlFor="email">Email</label>
            <input
              className="border-black border-solid border-2 rounded-md p-2  text-[#000000]"
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <label htmlFor="password">password</label>
            <input
              className="border-black border-solid border-2 rounded-md p-2  text-[#000000]"
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <button type="submit" className="p-2 m-5 bg-blue-700 rounded-md">
              Submit
            </button>
            <p className="p-2 text-[#000000]">
              Already have an Account
              <Link className="p-2 cursor-pointer text-[#3464ff]" href="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
