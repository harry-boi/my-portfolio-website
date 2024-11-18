import React from "react";

const AboutMe = () => {
  return (
    <section className="text-gray-600 dark:bg-gray-950 body-font bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col items-center text-center px-5">
        {/* Centered Content */}
        <div className="w-full max-w-3xl">
          <h2 className="text-4xl dark:text-orange-400 font-bold text-gray-900 mb-4">
            A Little Introduction! 👋
          </h2>
          <p className="mb-6 leading-relaxed dark:text-gray-400 text-lg text-gray-700">
            Known to many as Harryboi 😎, -- I'm a passionate Web3 Developer
            with over 3 years of experience in software development. My journey
            in blockchain and decentralized technologies is fueled by a love for
            innovation, learning, and building solutions that empower users
            worldwide.
          </p>
          <p className="mb-8 leading-relaxed text-lg dark:text-gray-400 text-gray-700">
            Whether it's crafting smart contracts, designing seamless dApps, or
            collaborating with forward-thinking teams, I'm dedicated to making
            an impact in the evolving world of Web3.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
