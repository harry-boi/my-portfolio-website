import React, { useState, useEffect, useRef } from "react";

const Header = ({ toggleDarkMode, isDarkMode }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const sideNavRef = useRef(null); // Reference to the side nav

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close nav if the click is outside the nav element
      if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
        closeNav();
      }
    };

    if (isNavOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <div className="justify-around dark:bg-gray-950 m-10 p-6 hidden md:flex">
        <div className="text-3xl flex gap-2 font-bold text-gray-700 dark:text-gray-100">
          Harryboi
        </div>
        <div>
          <ul className="flex space-x-14 font-bold text-gray-600 dark:text-gray-300">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div onClick={toggleDarkMode} className="cursor-pointer">
          {/* Toggle Dark Mode Icon */}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden p-5 flex justify-end space-x-10">
        <div onClick={toggleDarkMode} className="cursor-pointer">
          {/* Toggle Dark Mode Icon */}
        </div>
        <button onClick={toggleNav} className="dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Side Navigation */}
      <div
        ref={sideNavRef} // Attach ref to the side nav
        className={`fixed top-0 right-0 h-screen bg-gray-950 w-1/2 transform transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-5 right-5 text-gray-400 dark:text-white"
          onClick={toggleNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex items-center justify-center h-full p-5 text-white">
          <div className="flex flex-col gap-7 items-center">
            <a href="#about" className="py-2 text-lg flex gap-2">
              About
            </a>
            <a href="#projects" className="py-2 text-lg flex gap-2">
              Projects
            </a>
            <a href="#contact" className="py-2 text-lg flex gap-2">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
