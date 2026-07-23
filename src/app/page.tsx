// "use client";

// import { useState } from "react";
// import UnderDevelopmentModal from "@/components/home/UnderDevelopmentModal";
import HeroSection from "@/components/home/HeroSection";
import OurClient from "@/components/home/OurClient";
import BestSelling from "@/components/home/(BestSellingFiles)/BestSelling";
import NavHead from "@/components/home/(Navbar)/NavHead";
// import OurService from "@/components/home/OurService";
import ChooseUs from "@/components/home/ChooseUs";
import HowToOrder from "@/components/home/HowToOrder";
import Footer from "@/components/home/Footer";
import PrintImmegration from "@/components/home/PrintImmegration";
import OurService from "@/components/home/(OurService)/OurService";
import ComboFile from "@/components/home/(ComboFiles)/ComboFile";
import GraphicResourcesButton from "@/components/home/GraphicResourcesButton";
import PromoBanner from "@/components/home/PromoBanner";
import GraphicResource from "@/components/home/GraphicResource";

export default function HomePage() {
  // const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <main className=" flex flex-col relative">
      {/* Modal Logic */}
      {/* {isModalOpen && (
        <UnderDevelopmentModal onClose={() => setIsModalOpen(false)} />
      )} */}
      <GraphicResourcesButton />
      <NavHead />
      <PrintImmegration />
      <HeroSection />
      <OurClient />
      <BestSelling />
      <ComboFile />
      <OurService />
      <PromoBanner />
      {/* <GraphicResource /> */}
      <ChooseUs />
      <HowToOrder />
      <Footer />
    </main>
  );
}
