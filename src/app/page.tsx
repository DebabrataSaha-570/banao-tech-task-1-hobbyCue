import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import AddYourOwn from "@/components/ui/AddYourOwn/AddYourOwn";
import HobbyResources from "@/components/ui/HobbyResources/HobbyResources";
import Testimonials from "@/components/ui/Testimonials/Testimonials";
import YourHobby from "@/components/ui/YourHobby/YourHobby";

export default function Home() {
  return (
    <main>
      {/* <Navbar></Navbar> */}
      <HobbyResources></HobbyResources>
      <AddYourOwn></AddYourOwn>
      <Testimonials></Testimonials>
      <YourHobby></YourHobby>
      <Footer></Footer>
    </main>
  );
}
