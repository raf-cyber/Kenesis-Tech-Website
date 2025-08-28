import Preloader from "@/components/Preloader"
import BackgroundEffects from "@/components/BackgroundEffects"
import CustomCursor from "@/components/CustomCursor"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Solutions from "@/components/Solutions"
import Expertise from "@/components/Expertise"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"

export default function Home() {
  return (
    <>
      <Preloader />
      <BackgroundEffects />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <Expertise />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
