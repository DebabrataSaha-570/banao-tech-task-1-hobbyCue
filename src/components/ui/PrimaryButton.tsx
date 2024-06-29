import React, { ReactNode } from "react";

type TButtonProps = {
  children: ReactNode;
  className?: string;
};

const PrimaryButton = ({ children, className }: TButtonProps) => {
  return (
    <div
      className={` ${className} w-full  md:w-28 border border-[#8064A2] rounded-lg p-2 text-[#8064A2] hover:bg-[#8064A2] transition-all duration-300 hover:text-white text-xs md:text-sm font-semibold text-center cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default PrimaryButton;
