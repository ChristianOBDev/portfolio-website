import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Footer from "./components/Footer";
import Races from "./sections/Races";

function App() {
  return (
    <div className="text-black font-mono">
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Races />
      <Footer />
    </div>
  );
}

export default App;
