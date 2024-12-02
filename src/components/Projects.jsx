import React, { useRef } from "react";
import codetoken from "../assets/images/project_screenshots/codetoken.png";
import crowdfunding from "../assets/images/project_screenshots/crowdfunding.png";
import stakingdapp from "../assets/images/project_screenshots/stakingdapp.png";
import portfoliotracker from "../assets/images/project_screenshots/portfoliotracker.png";

const Projects = () => {
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "Staking DAPP",
      github: "https://github.com/harry-boi/staking-dapp.git",
      image: stakingdapp,
      description:
        "A decentralized application where users can stake tokens and earn rewards based on an annual percentage rate (APR). Built with Solidity, React, and Tailwind CSS.",
      url: "https://staking-dapp-frontend-nine.vercel.app",
    },
    {
      title: "Token Faucet",
      github: "https://github.com/harry-boi/faucet-for-erc20-token.git",
      image: codetoken,
      description:
        "A dApp for dispensing testnet tokens to users, featuring wallet connection and token claim functionality. Developed using React and ethers.js.",
      url: "https://codetoken-faucet.vercel.app/",
    },
    {
      title: "Crowdy",
      github: "https://github.com/harry-boi/crowdfunding-dapp.git",
      image: crowdfunding,
      description:
        "A decentralized crowdfunding platform that allows users to create and fund campaigns transparently. Built with Solidity, Express.js, and React.",
      url: "https://crowdfunding-dapp-khaki.vercel.app/",
    },
    {
      title: "Defi Portfolio Tracker",
      github: "https://github.com/harry-boi/defi-portfolio-tracker.git",
      image: portfoliotracker,
      description:
        "A portfolio tracker that allows users to view their Ethereum wallet balance in Ether and USD, track 30-day profit/loss, and monitor ERC tokens held in the wallet. Built with React, Vite, and Tailwind CSS.",
      url: "https://defi-portfolio-tracker-f28uils3g-alpha-nums-projects.vercel.app/",
    },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    } else if (direction === "right") {
      current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    }
  };

  const handleSwipe = (e) => {
    const startX = e.touches[0].clientX;

    const handleTouchMove = (moveEvent) => {
      const endX = moveEvent.touches[0].clientX;
      if (endX - startX > 50) {
        scroll("left");
        document.removeEventListener("touchmove", handleTouchMove);
      } else if (startX - endX > 50) {
        scroll("right");
        document.removeEventListener("touchmove", handleTouchMove);
      }
    };

    document.addEventListener("touchmove", handleTouchMove);
  };

  return (
    <section className="text-gray-600 body-font py-16">
      <div className="container px-5 mx-auto">
        <h2 className="text-4xl font-bold dark:text-gray-200 text-center text-gray-900 mb-12">
          My Projects 🚀
        </h2>
        <div className="relative">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-900 bg-gray-300 rounded-full p-2 z-10"
            onClick={() => scroll("left")}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
          </button>

          {/* Scrollable Projects */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 py-4 scroll-smooth snap-x snap-mandatory"
            onTouchStart={handleSwipe}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="h-full w-full sm:w-80 flex-shrink-0 bg-white p-8 rounded-lg shadow-lg snap-center"
              >
                <img
                  src={project.image}
                  alt={`Project ${index + 1}`}
                  className="h-40 rounded-lg mb-4 object-cover object-center w-full"
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="leading-relaxed text-base mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between p-2">
                  <a
                    href={project.github}
                    className="text-indigo-500 inline-flex items-center mt-3"
                    target="_blank"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                  <a
                    href={project.url}
                    target="_blank"
                    className="text-gray-900 font-bold inline-flex items-center mt-3"
                  >
                    Live site
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-900 bg-gray-300 rounded-full p-2 z-10"
            onClick={() => scroll("right")}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
