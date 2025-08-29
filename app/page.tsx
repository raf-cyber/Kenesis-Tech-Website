// pages/index.tsx
import Preloader from "@/components/layout/Preloader";
import BackgroundEffects from "@/components/common/BackgroundEffects";
import CustomCursor from "@/components/common/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhoWeAre from "@/components/sections/WhoWeAre";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FAQ from "@/components/sections/FAQ";
import PortfolioPage from "@/components/sections/Portfolio";

export default function Home() {
  return (
    <>
      <Preloader />
      <BackgroundEffects />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Services />
        {/* <Solutions /> */}
        {/* <Expertise /> */}
        <PortfolioPage />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
