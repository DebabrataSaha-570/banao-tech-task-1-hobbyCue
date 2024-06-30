import React from "react";
import Container from "../ui/Container";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaGooglePlusG,
  FaInstagram,
  FaPinterest,
  FaTelegramPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import SubFooter from "./SubFooter";

const Footer = () => {
  return (
    <>
      <footer className="py-14">
        <Container>
          <div className="flex flex-col md:flex-row justify-between flex-wrap">
            {/* <div className="grid grid-cols-1 md:grid-cols-4"> */}
            <div className="text-sm md:text-base">
              <h2 className=" font-bold mb-3">Hobbycue</h2>

              <Link className="block font-light mb-2" href="/">
                About Us
              </Link>
              <Link className="block  font-light mb-2" href="/">
                Our Services
              </Link>
              <Link className="block  font-light mb-2" href="/">
                Work with us
              </Link>
              <Link className="block  font-light mb-2" href="/">
                FAQ
              </Link>
              <Link className="block  font-light mb-2" href="/">
                Contact Us
              </Link>
            </div>
            <div className="text-sm md:text-base">
              <h2 className=" font-bold mb-3">How Do I</h2>

              <Link className="block font-light mb-2" href="/">
                Sign Up
              </Link>
              <Link className="block  font-light mb-2" href="/">
                Add a listing
              </Link>
              <Link className="block  font-light mb-2" href="/">
                Claim Listing
              </Link>
              <Link className="block  font-light mb-2" href="/">
                Post a Query
              </Link>
              <Link className="block  font-light mb-2" href="/">
                Add a Blog Post
              </Link>
              <Link className="block  font-light mb-2" href="/">
                Other Queries
              </Link>
            </div>
            <div className="text-sm md:text-base">
              <h2 className=" font-bold mb-3">Quick Links</h2>

              <Link className="block  font-light mb-2" href="/">
                Listing
              </Link>
              <Link className="block  font-light mb-2" href="/">
                Blog Posts
              </Link>
              <Link className="block  font-light mb-2" href="/">
                Shop / Store
              </Link>
              <Link className="block  font-light mb-2" href="/">
                Community
              </Link>
            </div>
            <div className=" md:w-[30%] text-sm md:text-base">
              <h2 className=" font-bold mb-3 ">Social Media</h2>

              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-[#6D747A]  bg-[#EBEDF0] p-2 rounded-full cursor-pointer">
                  <FaFacebookF />
                </span>
                <span className="text-[#6D747A]  bg-[#EBEDF0] p-2 rounded-full cursor-pointer">
                  <FaTwitter />
                </span>
                <span className="text-[#6D747A]  bg-[#EBEDF0] p-2 rounded-full cursor-pointer">
                  <FaInstagram className="text-base" />
                </span>
                <span className="text-[#6D747A]  bg-[#EBEDF0] p-2 rounded-full cursor-pointer">
                  <FaPinterest />
                </span>
                <span className="text-[#6D747A]  bg-[#EBEDF0] p-2 rounded-full cursor-pointer">
                  <FaGooglePlusG />
                </span>
                <span className="text-[#6D747A]  bg-[#EBEDF0] p-2 rounded-full cursor-pointer">
                  <FaYoutube />
                </span>
                <span className="text-[#6D747A]  bg-[#EBEDF0] p-2 rounded-full cursor-pointer">
                  <FaTelegramPlane />
                </span>
                <span className="text-[#6D747A]  bg-[#EBEDF0] p-2 rounded-full cursor-pointer">
                  <FaEnvelope />
                </span>
              </div>

              <div className="mt-7 md:mt-12">
                <h2 className="text-sm md:text-base font-bold mb-3 ">
                  Invite Friends
                </h2>

                <div className="flex ">
                  <input
                    className="border w-full border-[#8064A2] rounded-l-lg px-4 py-2 placeholder:text-sm "
                    type="text"
                    placeholder="Email ID"
                  />
                  <button className=" px-4 py-2 text-white font-semibold bg-[#8064A2] rounded-r-lg text-sm ">
                    Invite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <SubFooter></SubFooter>
    </>
  );
};

export default Footer;
