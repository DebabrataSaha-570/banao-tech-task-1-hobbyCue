import React from "react";
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
import { GiSevenPointedStar } from "react-icons/gi";
import PrimaryButton from "../ui/PrimaryButton";

const Navbar = () => {
  return (
    <nav className="py-2 shadow sticky top-0 bg-white">
      <Container className="flex  items-center justify-between">
        <div className="flex items-center">
          <Image src={logo} width={293} height={60} alt="logo"></Image>

          <form className="flex mx-5">
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

        <div className="flex items-center gap-5">
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
      </Container>
    </nav>
  );
};

export default Navbar;
