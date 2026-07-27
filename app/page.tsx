import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import LogoMarquee from "@/components/LogoMarquee";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseMe from "@/components/WhyChooseMe";
import AdResults from "@/components/AdResults";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsCounter />
        <LogoMarquee />
        <About />
        <Services />
        <WhyChooseMe />
        <AdResults />
        <Testimonials />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
