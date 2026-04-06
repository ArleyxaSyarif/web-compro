import Image from "next/image";
import HeroSection from "./components/Hero/HeroSection";
import ValueSection from "./components/Value/ValueSection";
import ServiceSection from "./components/Service/ServiceSection";
import WhyChooseSection from "./components/WhyChoose/WhyChooseSection";
import ProcessSection from "./components/Process/ProcesSection";
import KontakSection from "./components/Kontak/KontakSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ValueSection />
      <ServiceSection />
      <WhyChooseSection />
      <ProcessSection />
      <KontakSection />
    </div>
  );
}
