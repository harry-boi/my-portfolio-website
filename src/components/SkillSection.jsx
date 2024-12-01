import React from "react";
import javascriptlogo from "../assets/images/javascriptlogo.png";
import reactlogo from "../assets/images/reactlogo.png";
import nodejslogo from "../assets/images/nodejslogo.png";
import soliditylogo from "../assets/images/soliditylogo.png";
import foundrylogo from "../assets/images/foundrylogo.png";
import etherjslogo from "../assets/images/etherjslogo.png";
import expressjslogo from "../assets/images/expressjs.png";

const SkillsSection = () => {
  const skills = [
    { name: "Solidity", icon: soliditylogo },
    { name: "JavaScript", icon: javascriptlogo },
    { name: "React.js", icon: reactlogo },
    { name: "Node.js", icon: nodejslogo },
    { name: "Foundry", icon: foundrylogo },
    { name: "Ethers.js", icon: etherjslogo },
    { name: "Express Js", icon: expressjslogo },
  ];

  return (
    <section className="text-gray-600 body-font bg-gray-100 dark:bg-gray-950 py-16">
      <div className="container px-5 mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Skills & Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                className="w-16 h-16 mb-4 object-contain"
                src={skill.icon}
                alt={skill.name}
              />
              <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
