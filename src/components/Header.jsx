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

          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-700 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zm5.303 2.197a.75.75 0 011.06 0l1.59 1.59a.75.75 0 01-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM18.364 19.09a.75.75 0 011.06 0l1.59 1.59a.75.75 0 01-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06zM12 18.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zM5.636 19.09a.75.75 0 010 1.06l-1.59 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm2.926-8.136a.75.75 0 010-1.06L6.59 1.216a.75.75 0 111.06 1.06L4.276 4.864a.75.75 0 01-1.06 0zM12 5.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
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
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden p-5 flex justify-end space-x-10">
        <div onClick={toggleDarkMode} className="cursor-pointer">
          {/* Toggle Dark Mode Icon */}
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-gray-700 dark:text-gray-100"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zm5.303 2.197a.75.75 0 011.06 0l1.59 1.59a.75.75 0 01-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM18.364 19.09a.75.75 0 011.06 0l1.59 1.59a.75.75 0 01-1.06 1.06l-1.59-1.59a.75.75 0 010-1.06zM12 18.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V19.5a.75.75 0 01.75-.75zM5.636 19.09a.75.75 0 010 1.06l-1.59 1.59a.75.75 0 11-1.06-1.06l1.59-1.59a.75.75 0 011.06 0zM2.25 12a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm2.926-8.136a.75.75 0 010-1.06L6.59 1.216a.75.75 0 111.06 1.06L4.276 4.864a.75.75 0 01-1.06 0zM12 5.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
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
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
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
        ref={sideNavRef}
        className={`fixed top-0 right-0 h-screen bg-gray-950 w-1/2 transform transition-transform duration-300 z-50 ${
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
