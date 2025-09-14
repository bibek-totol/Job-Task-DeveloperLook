
import Navbar from "./client-components/Navbar";
import Propertylist from "./server-component/Propertylist";
import Footer from "./client-components/Footer";
import TabsSection from "./client-components/TabsSection";

export default function Home() {


  return (
    <>
    <div className="min-h-screen">
     <Navbar/>
     <Propertylist/>
     <TabsSection/>
     <Footer/>
     </div>
     
    </>
  );
}
