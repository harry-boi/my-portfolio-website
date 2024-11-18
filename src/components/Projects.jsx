import React, { useRef } from "react";

const Projects = () => {
  const scrollRef = useRef(null);

  const projects = [
    {
      title: "Staking DAPP",
      description: "Project description for Staking DAPP.",
    },
    {
      title: "Token Faucet",
      description: "Project description for Token Faucet.",
    },
    {
      title: "Blogging Platform",
      description: "Project description for Blogging Platform.",
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
                  src="https://via.placeholder.com/400"
                  alt={`Project ${index + 1}`}
                  className="h-40 rounded-lg mb-4 object-cover object-center w-full"
                />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="leading-relaxed text-base mb-4">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="text-indigo-500 inline-flex items-center mt-3"
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
