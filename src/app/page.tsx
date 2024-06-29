import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import AddYourOwn from "@/components/ui/AddYourOwn/AddYourOwn";
import BackToTopBtn from "@/components/ui/BackToTopBtn";
import Hero from "@/components/ui/Hero/Hero";
import HobbyResources from "@/components/ui/HobbyResources/HobbyResources";
import Testimonials from "@/components/ui/Testimonials/Testimonials";
import YourHobby from "@/components/ui/YourHobby/YourHobby";

export default function Home() {
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
