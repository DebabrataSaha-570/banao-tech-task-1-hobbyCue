import React from "react";
import { IconType } from "react-icons";
type TResource = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  icon: IconType;
  color: string;
};

const HobbySingleResource = ({ resource }: { resource: TResource }) => {
  return (
    <div className="border flex flex-col items-center md:items-start  justify-between   border-[#CED4DA] rounded-lg p-5">
      <h2 className="text-xl md:text-2xl flex items-center gap-3 font-semibold">
        {" "}
        <resource.icon style={{ color: resource.color }} /> {resource.title}
      </h2>

      <p className="text-sm md:text-lg my-5 font-light">
        {resource.description}
      </p>

      <button className="w-full  md:w-32 border border-[#8064A2] rounded-lg p-2 text-[#8064A2] text-xs md:text-sm font-semibold">
        {resource.buttonText}
      </button>
    </div>
  );
};

export default HobbySingleResource;
