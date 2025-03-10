import Image from "next/image";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { AboutLoanSection } from "./components/Aboutloan";
import { WhyChooseUsSection } from "./components/Chosesus";
export default function Home() {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <AboutLoanSection/>
      <WhyChooseUsSection/>

    </div>
  );
}
