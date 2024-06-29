import React from "react";
import Container from "../Container";
import HeroLeftPart from "./HeroLeftPart";
import HeroRightPart from "./HeroRightPart";
import Image from "next/image";
import heroImage from "../../../../public/assests/hero_image.svg";
const Hero = () => {
  return (
    <section className="bg-[#F7F5F9] pt-16">
      <Container>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* left  */}
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <HeroLeftPart></HeroLeftPart>
          </div>

          {/* right  */}

          <div className="col-span-1">
            <HeroRightPart></HeroRightPart>
          </div>
        </div>
        <div className="">
          <Image
            src={heroImage}
            width={697}
            // style={{ width: "100%" }}
            height={216}
            alt="hero Image"
            className="mt-7 lg:mt-[-40px] "
          ></Image>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
