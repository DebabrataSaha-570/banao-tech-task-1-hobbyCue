"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Container from "../Container";
import HeroLeftPart from "./HeroLeftPart";
import HeroRightPart from "./HeroRightPart";
import Image from "next/image";
import heroImage from "../../../../public/assests/hero_image.svg";
import { useTheme } from "next-themes";
const Hero = () => {
  const { theme, setTheme } = useTheme();

  return (
    <section
      className={`${
        theme === "dark" ? "bg-foreground" : "bg-[#F7F5F9]"
      }  pt-16`}
    >
      <Container>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* left  */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="col-span-1 md:col-span-1 lg:col-span-2"
          >
            <HeroLeftPart></HeroLeftPart>
          </motion.div>

          {/* right  */}

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.4,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="col-span-1"
          >
            <HeroRightPart></HeroRightPart>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }}
          className=""
        >
          <Image
            src={heroImage}
            width={697}
            // style={{ width: "100%" }}
            height={216}
            alt="hero Image"
            className="mt-7 lg:mt-[-40px] "
          ></Image>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
