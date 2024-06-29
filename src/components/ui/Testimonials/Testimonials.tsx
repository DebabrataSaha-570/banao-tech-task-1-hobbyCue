import React from "react";
import Container from "../Container";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import Image from "next/image";

import audioImage from "../../../../public/assests/audio_track.svg";
import personImage from "../../../../public/assests/testimonial_person.svg";

const Testimonials = () => {
  return (
    <section className="py-10 mb-5">
      <Container>
        <div className="bg-[#F7F5F9] p-10 rounded-lg space-y-9">
          <h3 className="flex items-center text-2xl font-semibold gap-4">
            <span className="p-3 bg-[#8064A2] rounded-full text-white">
              <BiSolidQuoteAltLeft />
            </span>{" "}
            Testimonials{" "}
          </h3>

          <p className="text-[#6D747A] text-lg font-light">
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </p>

          <div className="flex flex-col md:flex-row  justify-between items-center gap-5">
            {/* audio */}
            <Image
              src={audioImage}
              //   width={766}
              //   height={100}
              //   style={{ width: "68%", height: "20%" }}
              //   style={{ width: "100%", height: "20%" }}
              alt="audio_image"
              className="w-full md:w-[62%] h-[25%] md:h-[20%] order-2 md:order-1 object-cover"
            ></Image>

            <div className="flex  items-center gap-3 order-1 md:order-2">
              {/* person */}
              <Image
                src={personImage}
                // width={100}
                // height={100}
                alt="person_image"
                className="w-[60px] md:w-[90px] h-[60px] md:h-[90px] object-cover"
              ></Image>

              <div>
                <h4 className="text-lg text-[#8064A2] font-semibold">
                  Subha Nagarajan
                </h4>
                <h5 className="text-sm font-normal text-[#0096C8]">
                  Classical Dancer
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
