import React from "react";
import Container from "../Container";
import HeroLeftPart from "./HeroLeftPart";
import HeroRightPart from "./HeroRightPart";

const Hero = () => {
  return (
    <section className="bg-[#F7F5F9] pt-16">
      <Container className="grid grid-cols-1  md:grid-cols-3 gap-8">
        {/* left  */}
        <div className="col-span-2">
          <HeroLeftPart></HeroLeftPart>
        </div>

        {/* right  */}

        <div className="col-span-1">
          <HeroRightPart></HeroRightPart>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
