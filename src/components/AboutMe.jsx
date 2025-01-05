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
            Known to many as Harryboi 😎, I'm a passionate Web3 Developer with a
            strong foundation in traditional web development. Over the past 3+
            years, I've honed my skills in software development, crafting
            scalable SaaS applications, and solving complex challenges in the
            Web2 ecosystem. This experience has equipped me with a deep
            understanding of building reliable and user-focused solutions.
          </p>
          <p className="mb-8 leading-relaxed text-lg dark:text-gray-400 text-gray-700">
            My journey into blockchain and decentralized technologies is fueled
            by a love for innovation and curiosity about the future of the
            internet. This has led me on a path to a thrilling journey in WEB3.
            Currently, I'm focused on writing efficient smart contracts,
            designing seamless dApps, and looking to collaborate with
            forward-thinking teams to provide cutting-edge solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
