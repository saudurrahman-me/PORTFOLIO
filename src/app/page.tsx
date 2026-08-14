import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechnologyStrip from "@/components/TechnologyStrip";
import About from "@/components/About";
import Stats from "@/components/Stats";
import WhatIBuild from "@/components/WhatIBuild";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-primary flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TechnologyStrip />
        <About />
        <Stats />
        <WhatIBuild />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <CurrentlyExploring />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
