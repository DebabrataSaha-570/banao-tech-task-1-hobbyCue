import React from "react";

import heroImage from "../../../../public/assests/hero_image.svg";
import Image from "next/image";

const HeroLeftPart = () => {
  return (
    <div className="flex flex-col justify-between ">
      <h2 className="italic text-2xl md:text-4xl font-semibold">
        Explore your <span className="text-[#0096C8]">hobby</span> or{" "}
        <span className="text-[#8064A2]">passion</span>{" "}
      </h2>

      <p className="font-light text-sm  md:text-base py-7">
        Sign-in to interact with a community of fellow hobbyists and an
        eco-system of experts, teachers, suppliers, classes, workshops, and
        places to practice, participate or perform. Your hobby may be about
        visual or performing arts, sports, games, gardening, model making,
        cooking, indoor or outdoor activities…
      </p>
      {/* <br /> */}
      <p className="font-light text-sm md:text-base pt-3 ">
        If you are an expert or a seller, you can Add your Listing and promote
        yourself, your students, products, services or events. Hop on your
        hobbyhorse and enjoy the ride.
      </p>

      {/* <div>
        <Image
          src={heroImage}
          //   width={697}
          style={{ width: "100%" }}
          height={216}
          alt="hero Image"
        ></Image>
      </div> */}
    </div>
  );
};

export default HeroLeftPart;
