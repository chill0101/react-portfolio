import { RevealOnScroll } from "../RevealOnScroll";
import { useState } from "react";
import { useLanguage } from "../context/useLanguage"; // Hook to access the language context

export const TechStack = () => {
  const [hovering, setHovering] = useState(false);
  const { trl } = useLanguage(); // Get the translation object from the context
  
  const technologies = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
    },
    /*{
      name: "Express",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },*/
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    /*{
      name: "JAVA",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    }*/
  ];

  return (
    <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="bg-clip-text bg-gradient-to-r text-4xl text-center text-transparent font-bold from-blue-500 mb-10 to-cyan-400">
            {trl.techStackTitle} 
        </h2>
        <div 
          className="grid grid-cols-5 gap-6 md:gap-8 md:grid-cols-5 group"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center cursor-default"
            >
              <div className="bg-transparent p-4 rounded-xl transition-all duration-500">
                <img 
                  src={tech.icon} 
                  alt={tech.name}
                  className={`w-12 h-12 object-contain transition-all duration-500
                              ${hovering ? 'saturate-100 opacity-100' : 'filter saturate-0 opacity-70'}`}
                />
              </div>
              <span className={`text-xs transition-colors ${hovering ? 'text-white' : 'text-gray-400'}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
};