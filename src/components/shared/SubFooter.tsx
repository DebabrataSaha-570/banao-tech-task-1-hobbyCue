import { useTheme } from "next-themes";
import React from "react";

const SubFooter = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`text-center py-7 ${
        theme === "dark" ? "bg-gray-700" : "bg-[#F7F5F9]"
      }  `}
    >
      <h3 className="text-sm font-medium">© Purple Cues Private Limited</h3>
    </div>
  );
};

export default SubFooter;
