"use client";
import React, { useState } from "react";
import Container from "../ui/Container";

import logo from "../../../public/assests/hobby_cue_logo.svg";
import Image from "next/image";
import {
  FaBell,
  FaBookmark,
  FaCompass,
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu, GiSevenPointedStar } from "react-icons/gi";
import PrimaryButton from "../ui/PrimaryButton";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleClick = () => {
    setNavOpen(!navOpen);
  };
  return (
    <nav className="py-2 shadow sticky top-0 bg-white">
      <Container className="flex  items-center justify-between">
        <div className="flex items-center">
          <Image
            src={logo}
            className="w-[176px] h-[42px] md:w-[290px] md:h-[60px]"
            alt="logo"
          ></Image>
          {/* <Image src={logo}  width={293} height={60} alt="logo"></Image> */}

          <form className="hidden md:hidden lg:flex mx-5">
            <input
              className="border w-[250px] border-gray-300 focus:outline-none bg-[#EBEDF0] rounded-l-lg px-3 py-2 placeholder:text-sm "
              type="text"
              placeholder="Search here.."
            />
            <button className=" px-3 py-2 text-white font-semibold bg-[#8064A2] rounded-r-lg text-sm ">
              <FaSearch />
            </button>
          </form>
        </div>

        <div className="hidden lg:flex items-center gap-5">
          <p className="flex items-center gap-1 text-sm font-medium">
            <span className="text-[#8064A2]">
              <FaCompass className="text-base" />
            </span>
            Explore
            <span className="">
              <MdKeyboardArrowDown className="text-lg" />
            </span>
          </p>
          <p className="flex items-center gap-1 text-sm font-medium">
            <span className="text-[#8064A2]">
              <GiSevenPointedStar className="text-base" />
            </span>
            Hobbies
            <span className="">
              <MdKeyboardArrowDown className="text-lg" />
            </span>
          </p>

          <p className="text-base">
            <span>
              <FaBookmark className="text-[#8064A2]" />
            </span>
          </p>
          <p className="text-lg">
            <span>
              <FaBell className="text-[#8064A2]" />
            </span>
          </p>
          <p className="text-lg">
            <span>
              <FaShoppingCart className="text-[#8064A2]" />
            </span>
          </p>
          <PrimaryButton>Sign In</PrimaryButton>
        </div>

        {/* mobile  */}

        <div className="flex items-center gap-3 lg:hidden ">
          <p className="text-xl cursor-pointer">
            <span>
              <FaSearch className="text-[#8064A2]" />
            </span>
          </p>
          <p className="text-xl cursor-pointer">
            <span>
              <FaBell className="text-[#8064A2]" />
            </span>
          </p>
          <p className="text-xl cursor-pointer">
            {!navOpen ? (
              <span onClick={handleClick}>
                <GiHamburgerMenu className="text-[#8064A2]" />
              </span>
            ) : (
              <span onClick={handleClick}>
                <RxCross2 className="text-[#8064A2]" />
              </span>
            )}
          </p>
        </div>

        {/* mobile navbar  */}

        <div
          className={`${
            !navOpen
              ? "hidden"
              : "absolute top-[60px] md:top-[65px] left-0 transition-all duration-500 h-screen w-full flex flex-col justify-center items-center bg-gray-200 lg:hidden p-5 space-y-4"
          }`}
        >
          <p className="flex items-center justify-center gap-2 text-base font-medium  w-full hover:bg-gray-300 py-2 rounded-lg cursor-pointer">
            <span className="text-[#8064A2]">
              <FaCompass className="text-base" />
            </span>
            Explore
            <span className="">
              <MdKeyboardArrowDown className="text-lg" />
            </span>
          </p>
          <p className="flex items-center justify-center gap-2 text-base font-medium w-full hover:bg-gray-300 py-2 rounded-lg cursor-pointer">
            <span className="text-[#8064A2]">
              <GiSevenPointedStar className="text-base" />
            </span>
            Hobbies
            <span className="">
              <MdKeyboardArrowDown className="text-lg" />
            </span>
          </p>

          <p className="text-base flex justify-center items-center font-medium gap-2 w-full hover:bg-gray-300 py-2 rounded-lg cursor-pointer">
            <span>
              <FaBookmark className="text-[#8064A2]" />
            </span>
            Book Marks
          </p>
          <p className="text-base flex justify-center items-center gap-2 w-full hover:bg-gray-300 py-2 rounded-lg cursor-pointer">
            <span>
              <FaBell className="text-[#8064A2] text-lg" />
            </span>
            Notifications
          </p>
          <p className="text-lg flex justify-center items-center gap-2 w-full hover:bg-gray-300 py-2 rounded-lg cursor-pointer">
            <span>
              <FaShoppingCart className="text-[#8064A2]" />
            </span>
            My Cart
          </p>

          <button className="py-2 w-full rounded-lg text-white bg-[#8064A2]">
            Sign In
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
