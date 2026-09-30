import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Projects from "./components/Projects";
import Materials from "./components/Materials";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileContactBar from "./components/MobileContactBar";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Services />

        <WhyChooseUs />

        <Projects />

        <Materials />

        <Process />

        <CTA />

        <Contact />
      </main>

      <Footer />

      <MobileContactBar />
    </div>
  );
}