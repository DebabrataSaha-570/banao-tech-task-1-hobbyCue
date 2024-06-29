import React from "react";
import Container from "../Container";
import hobbyImage from "../../../../public/assests/your_hobby_img.svg";
import Image from "next/image";

const YourHobby = () => {
  return (
    <section className="bg-[#F7FDFF] pt-14 pb-5">
      <Container>
        <div>
          <h2 className="italic text-lg md:text-4xl font-normal">
            {" "}
            Your <span className="text-[#8064A2]">Hobby</span>, Your{" "}
            <span className="text-[#0096C8]">Community ...</span>{" "}
          </h2>

          <button className="text-sm md:text-lg bg-[#8064A2] font-semibold text-white px-4 py-2 rounded-lg mt-5">
            Get Started
          </button>
        </div>

        <div className="mt-14">
          <Image
            src={hobbyImage}
            style={{ width: "100%", height: "25%" }}
            alt="hobby_image"
          ></Image>
        </div>
      </Container>
    </section>
  );
};

export default YourHobby;
