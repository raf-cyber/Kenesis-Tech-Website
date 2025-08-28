// pages/index.tsx
import Preloader from "@/components/Preloader";
import BackgroundEffects from "@/components/BackgroundEffects";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Expertise from "@/components/Expertise";
import WhoWeAre from "@/components/WhoWeAre";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

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
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
