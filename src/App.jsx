import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillSection";
import AboutMe from "./components/AboutMe";
import ContactSection from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved user preference in localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <div className="dark:bg-gray-950">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <HeroSection />
      <section id="about">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  );
}

export default App;
