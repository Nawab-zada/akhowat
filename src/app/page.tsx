import Image from "next/image";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { AboutLoanSection } from "./components/Aboutloan";
import { WhyChooseUsSection } from "./components/Chosesus";
import { PartnersCarousel } from "./components/Carousel";
import { HowToApplySection } from "./components/Apply";
import { Footer } from "./components/Footer";
import { TeamMember } from "./components/Teammember";
import StickyApplyButton from "./components/Stickybutton";
export default function Home() {
  return (
    <div className="">
      <Navbar/>
     <section id="hero">
  <Hero />
</section>
<StickyApplyButton/>
<section id="about-loan">
  <AboutLoanSection />
</section>
<section id="how-to-apply">
  <HowToApplySection />
</section>
<section id="why-choose-us">
  <WhyChooseUsSection />
</section>
<PartnersCarousel/>
<TeamMember/>
<section id="contact">
  <Footer />
</section>
       
    </div>
  );
}
