import Image from "next/image";
import HeroSection from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { AboutLoanSection } from "./components/Aboutloan";

import { PartnersCarousel } from "./components/Carousel";
import { HowToApplySection } from "./components/Apply";
import { Footer } from "./components/Footer";
import { TeamMember } from "./components/Teammember";
import StickyApplyButton from "./components/Stickybutton";
import LoanTable from "./components/Table";
import { Urdu } from "./components/Urdu";
import Qasm from "./components/Qasm";
export default function Home() {
  return (
    <div className="">
      <Navbar/>
     <section id="hero">
      
  <HeroSection />
</section>
<Urdu/>
<LoanTable/>
<StickyApplyButton/>
<section id="about-loan">
  <AboutLoanSection />
</section>
<section id="how-to-apply">
  <HowToApplySection />
</section>

<section id="why-choose-us">
<Qasm/>
</section>
<PartnersCarousel/>
<TeamMember/>
<section id="contact">
  <Footer />
</section>
       
    </div>
  );
}
