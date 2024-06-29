import React from "react";
import Container from "../ui/Container";

import logo from "../../../public/assests/hobby_cue_logo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="py-2 shadow sticky top-0 bg-white">
      <Container>
        <Image src={logo} width={293} height={60} alt="logo"></Image>
      </Container>
    </nav>
  );
};

export default Navbar;
