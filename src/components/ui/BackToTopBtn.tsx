"use client";
import React, { useState, useEffect } from "react";

//import Link
import { animateScroll as scroll } from "react-scroll";

//import icon
import { IoIosArrowUp } from "react-icons/io";

const BackToTopBtn = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 600 ? setShow(true) : setShow(false);
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    show && (
      <button
        onClick={() => scrollToTop()}
        className=" w-[35px] h-[35px] bg-[#8064A2] hover:bg-tertiary text-white rounded-full fixed right-[20px] bottom-[20px] cursor-pointer flex justify-center items-center transition-all"
      >
        {" "}
        <IoIosArrowUp className="w-[18px] h-[18px]" />
      </button>
    )
  );
};

export default BackToTopBtn;
