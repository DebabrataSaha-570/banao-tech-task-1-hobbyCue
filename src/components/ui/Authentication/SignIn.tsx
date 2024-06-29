"use client";
import Image from "next/image";
import React, { FormEvent, ReactNode } from "react";
import facebookImage from "../../../../public/assests/Facebook.svg";
import googleImage from "../../../../public/assests/Google.svg";
import { MdLock } from "react-icons/md";

const SignIn = () => {
  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    alert("Authentication feature coming sooooon!");
  };
  return (
    <div className="px-4 mt-5">
      <button className="flex items-center   px-4 py-2 border w-full border-[#8064A2] rounded-lg">
        <Image src={googleImage} className="w-4 " alt="google_image"></Image>
        <h4 className="text-[#08090A] font-semibold mx-auto">
          Continue with Google
        </h4>
      </button>

      <button className="flex items-center   px-4 py-2 border w-full border-[#8064A2] rounded-lg mt-4">
        <Image src={facebookImage} className="w-4 " alt="google_image"></Image>
        <h4 className="text-[#08090A] font-semibold mx-auto">
          Continue with Facebook
        </h4>
      </button>

      <div className="flex  justify-between items-center my-4 ">
        <hr className="border border-[#CED4DA] w-[30%]" />
        <p className="font-semibold text-sm">Or connect with</p>
        <hr className="border border-[#CED4DA] w-[30%]" />
      </div>

      {/* form  */}

      <form onSubmit={handleSignIn} className="">
        <input
          className="py-2 px-4 w-full rounded-lg border placeholder:text-sm focus:outline-none"
          type="email"
          placeholder="Email"
        />

        <input
          className="py-2 px-4 w-full rounded-lg border placeholder:text-sm focus:outline-none my-3"
          type="password"
          placeholder="Password"
        />

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input type="checkbox" name="" id="" className="" />
            <label htmlFor="" className="ml-2 text-xs font-normal">
              Remember Me
            </label>
          </div>

          <h6 className="text-xs flex gap-2 items-center">
            {" "}
            <span className="text-[#939CA3]">
              <MdLock />
            </span>{" "}
            Forgot Password?
          </h6>
        </div>

        <button
          type="submit"
          className="px-4 py-2 border w-full border-[#000000] text-base font-semibold rounded-lg mt-4"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default SignIn;
