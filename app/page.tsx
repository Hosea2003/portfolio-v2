import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
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
        <div id="experience">
          <Experience />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
