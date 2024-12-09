import React from "react";
import profile from "../assets/images/profile.png";
const HeroSection = () => {
  return (
    <section className="text-gray-600 dark:bg-gray-950 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-gray-100">
            Hello, I am Harry 👋.
            <br className="hidden lg:inline-block" /> A passionate
            <span className="dark:text-orange-400"> Web3 Developer</span>
          </h1>
          <p className="mb-8 leading-relaxed dark:text-gray-400">
            With over 3 years of experience in software development, I
            specialize in crafting decentralized applications and innovative
            Web3 solutions. I thrive on continuous learning, collaboration, and
            pushing the boundaries of technology.
          </p>

          <div className="flex space-y-3 space-x-0 flex-col md:flex-row md:space-y-0 md:space-x-3 justify-center">
            <a
              href="/resume.pdf"
              download="resume.pdf"
              className="text-white bg-indigo-500 border-0 py-3 px-8 rounded-lg text-lg font-semibold shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-indigo-600 focus:outline-none focus:ring-4 focus:ring-indigo-400"
            >
              Resume
            </a>
            <button className="text-gray-700 bg-gray-100 border-0 py-3 px-8 rounded-lg text-lg font-semibold shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300">
              Hire me On Contra
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={profile}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
