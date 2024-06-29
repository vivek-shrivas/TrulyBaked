"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import useRouter from "next/navigation";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async function () {};

  return (
    <section className="h-screen w-screen flex justify-center items-center ">
      <div className=" rounded-md bg-white  w-fit min-w-fit max-w-fit">
        <div className="shrink-0  flex flex-col justify-center items-center ">
          <h1 className="text-black p-3 font-semibold">Login</h1>
          <form className="flex flex-col p-5">
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
            <button
              onClick={onLogin}
              className="p-2 m-5 bg-blue-700 rounded-md"
            >
              Submit
            </button>
            <p className="p-2 text-[#000000]">
              Dont have an Account
              <Link
                href="/signup"
                className="p-2 cursor-pointer text-[#3464ff]"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
