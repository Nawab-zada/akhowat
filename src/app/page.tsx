import Image from "next/image";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { AboutLoanSection } from "./components/Aboutloan";
import { WhyChooseUsSection } from "./components/Chosesus";
import { PartnersCarousel } from "./components/Carousel";
import { HowToApplySection } from "./components/Apply";
import { Footer } from "./components/Footer";
export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <AboutLoanSection/>
      <WhyChooseUsSection/>
      <PartnersCarousel/>
      <HowToApplySection/>
      <Footer/>

    </div>
  );
}
