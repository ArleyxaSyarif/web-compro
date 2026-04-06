import Image from "next/image";
import HeroSection from "./components/Hero/HeroSection";
import ValueSection from "./components/Value/ValueSection";
import ServiceSection from "./components/Service/ServiceSection";
import WhyChooseSection from "./components/WhyChoose/WhyChooseSection";
import ProcessSection from "./components/Process/ProcesSection";
import PartnerSection from "./components/Partner/PartnerSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      <PartnerSection />
      <ValueSection />
      <ServiceSection />
      <WhyChooseSection />
      <ProcessSection />
    </div>
  );
}
