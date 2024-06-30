"use client";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import AddYourOwn from "@/components/ui/AddYourOwn/AddYourOwn";
import BackToTopBtn from "@/components/ui/BackToTopBtn";
import Hero from "@/components/ui/Hero/Hero";
import HobbyResources from "@/components/ui/HobbyResources/HobbyResources";
import Testimonials from "@/components/ui/Testimonials/Testimonials";
import YourHobby from "@/components/ui/YourHobby/YourHobby";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <HobbyResources></HobbyResources>
      <AddYourOwn></AddYourOwn>
      <Testimonials></Testimonials>
      <YourHobby></YourHobby>
      <Footer></Footer>
      <BackToTopBtn></BackToTopBtn>
    </main>
  );
}
