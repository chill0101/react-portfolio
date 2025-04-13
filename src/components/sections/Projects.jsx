import { RevealOnScroll } from "../RevealOnScroll"
import { useState } from "react";
import { useLanguage } from "../context/useLanguage";
import { config } from "../../config"; // Importamos la configuración

export const Projects = () => {
  const { trl } = useLanguage();
  
  // Projects props con imágenes desde la configuración
  const projects = [
    {
      title: "Calendar App",
      description: trl.calendarDesc,
      image: config.images.projects.calendar.default,
      thumbnail: config.images.projects.calendar.thumbnail,
      technologies: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      link: "https://backend-mern-react.onrender.com",      
      github: "https://github.com/chill0101/react-men-calendar"    
    },
    {
      title: "Google Sheets RailCar",
      description: trl.railcarDesc, 
      image: config.images.projects.railcar.default,
      thumbnail: config.images.projects.railcar.thumbnail,
      technologies: ["HTML", "TailwindCSS", "JavaScript", "Google Apps Script"],
      link: "https://script.google.com/a/macros/davinci.edu.ar/s/AKfycbyLmX8IHZjYxVwqpeDHyRnaC4YSRE4r4n3N3hwz0ijzKDKnVvaQp1T5PNEeXYBXXoEYzw/exec",
      github: "https://github.com/chill0101/sheets-railcar-apps-script"
    },
    {
      title: "Notes App",
      description: trl.notesDesc, 
      image: config.images.projects.notes.default,
      thumbnail: config.images.projects.notes.thumbnail,
      technologies: ["React", "MaterialUI", "Firebase", "JavaScript"],
      link: "https://reactjs-simple-notes.netlify.app/",
      github: "https://github.com/chill0101/notes-reactJs-app"
    },
    {
      title: "IPPT.com.ar - Landing Page",
      description: trl.ipptWeb,
      image: config.images.projects.ippt.default,
      thumbnail: config.images.projects.ippt.thumbnail,
      technologies: ["Wordpress", "Elementor"],
      link: "https://ippt.com.ar/",
      github: "#"
    },
    {
      title: "Yogalab.cl - Landing Page",
      description: trl.yogalabWeb,
      image: config.images.projects.yogalab.default,
      thumbnail: config.images.projects.yogalab.thumbnail,
      technologies: ["Wordpress", "Flatsome"],
      link: "https://yogalab.cl/",
      github: "#"
    }
  ];
  
  // Array for animation control
  const [animating, setAnimating] = useState({});
  
  // Mouse event handler
  const handleMouseEnter = (index) => {
    // Check if animation is already running for this index
    if (!animating[index]) {
      setAnimating({...animating, [index]: true});
      
      // Reseting
      setTimeout(() => {
        setAnimating({...animating, [index]: false});
      }, 1500); // Duration of the animation
    }
  };
  
  return (
    <section id="projects" className="py-24">
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto px-6">
          <h2 className="bg-clip-text bg-gradient-to-r text-5xl text-center text-transparent font-bold from-blue-500 mb-10 to-cyan-400">
            {trl.projectsTitle}
          </h2>
          
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-black/30 border border-white/10 rounded-xl backdrop-blur-sm duration-300 group hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(59,130,246,0.2)] hover:transform overflow-hidden transition-all"
                onMouseEnter={() => handleMouseEnter(index)}
              >
                {/* Simple shine container */}
                <div className="h-70 overflow-hidden relative">
                  
                  <a 
                    href={project.link}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-full" 
                    aria-label={`${trl.viewProject}: ${project.title}`}
                  >
                    {/* Shine effect overlay*/}
                    <div 
                      className="absolute inset-0 z-10 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)] 
                                transition-transform duration-1000 ease-in-out"
                      style={{ 
                        transform: animating[index] 
                          ? 'translateX(100%) skewX(-25deg)' 
                          : 'translateX(-100%) skewX(-25deg)', 
                        width: '150%' 
                      }}
                    />
                    
                    {/* Imagen con lazy loading y srcset */}
                    <img 
                      src={project.thumbnail} // Versión de menor tamaño como fallback
                      srcSet={`
                        ${project.thumbnail} 600w,
                        ${project.image} 1200w
                      `}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      alt={project.title}
                      loading="lazy" // Habilita el lazy loading
                      crossOrigin="anonymous"
                      className="h-full w-full duration-700 group-hover:scale-110 object-center object-cover transition-transform"

                    />
                    
                    {/* Visual open link indicator */}
                    <div className="absolute left-3 bottom-3 bg-black/70 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                        />
                      </svg>
                    </div>
                  </a>
                </div>
                
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="bg-blue-500/10 rounded-full text-blue-400 text-xs px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))} 
                  </div>
                  
                  <div className="flex gap-4 mt-4">
                    <a 
                      href={project.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-indigo-700 rounded-md text-sm text-white font-medium hover:bg-indigo-500 px-4 py-2 transition-colors"
                    >
                      {trl.viewProject}
                    </a>
                    {project.github !== "#" && (
                      <a 
                        href={project.github}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex border border-white/20 rounded-md text-sm text-white/80 font-medium gap-2 hover:bg-white/10 items-center px-4 py-2 transition-colors"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        {trl.repository}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}