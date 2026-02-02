import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navigation />
      <main>
        <Hero />
        <div id="work">
          <Projects />
        </div>
        <Skills />
        <div id="experience">
          <Experience />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
