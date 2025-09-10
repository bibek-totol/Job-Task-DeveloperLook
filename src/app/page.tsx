
import Image from "next/image";
import Navbar from "./components/Navbar";
import Propertylist from "./components/Propertylist";
import Footer from "./components/Footer";
import TabsSection from "./components/TabsSection";

export default function Home() {


  return (
    <>
    
     <Navbar/>
     <Propertylist/>
     <TabsSection/>
     <Footer/>
     
    </>
  );
}
