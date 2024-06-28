import React, { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={` max-w-[1240px] mx-auto px-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
