import { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/SkillSection";
import AboutMe from "./components/AboutMe";
import ContactSection from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check for saved user preference in localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-center">
          <div className="loader mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
              <rect
                fill="#1D020C"
                stroke="#1D020C"
                strokeWidth="15"
                width="30"
                height="30"
                x="25"
                y="85"
              >
                <animate
                  attributeName="opacity"
                  calcMode="spline"
                  dur="2"
                  values="1;0;1;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.4"
                ></animate>
              </rect>
              <rect
                fill="#1D020C"
                stroke="#1D020C"
                strokeWidth="15"
                width="30"
                height="30"
                x="85"
                y="85"
              >
                <animate
                  attributeName="opacity"
                  calcMode="spline"
                  dur="2"
                  values="1;0;1;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.2"
                ></animate>
              </rect>
              <rect
                fill="#1D020C"
                stroke="#1D020C"
                strokeWidth="15"
                width="30"
                height="30"
                x="145"
                y="85"
              >
                <animate
                  attributeName="opacity"
                  calcMode="spline"
                  dur="2"
                  values="1;0;1;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="0"
                ></animate>
              </rect>
            </svg>
          </div>{" "}
          {/* Add CSS for loader */}
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Loading portfolio
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="dark:bg-gray-950">
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <HeroSection />
      <section id="skills">
        <SkillsSection />
      </section>
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
