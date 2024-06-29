import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import AddYourOwn from "@/components/ui/AddYourOwn/AddYourOwn";
import HobbyResources from "@/components/ui/HobbyResources/HobbyResources";

export default function Home() {
  return (
    <main>
      {/* <Navbar></Navbar> */}
      <HobbyResources></HobbyResources>
      <AddYourOwn></AddYourOwn>
      {/* <Footer></Footer> */}
    </main>
  );
}
