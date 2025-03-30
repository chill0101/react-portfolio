import { RevealOnScroll } from "../RevealOnScroll"
import { useEffect, useState } from "react"
import { useLanguage } from "../context/useLanguage"
import { config } from "../../config" // Importamos la configuración

export const Home = () => {
  const { trl } = useLanguage();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Usamos el tiempo de animación desde la configuración
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, config.animations.homeAnimationDelay);
    
    return () => clearTimeout(timer);
  }, []);

  return (
   <section 
        id="home"
        className="flex justify-center w-full items-center min-h-screen overflow-hidden py-20 relative"
   >
    <div className="absolute inset-0 pointer-events-none">
      <div 
        className={`absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl transition-all duration-2000 ease-out
                  ${isAnimated ? 'opacity-70 translate-x-5' : 'opacity-0'}`}
      ></div>
      <div 
        className={`absolute bottom-20 right-10 w-72 h-72 rounded-full bg-cyan-500/5 blur-3xl transition-all duration-2000 ease-out delay-300
                  ${isAnimated ? 'opacity-70 -translate-x-5' : 'opacity-0'}`}
      ></div>
    </div>

    <RevealOnScroll>
        <div className="flex flex-col gap-10 items-center md:flex-row md:max-w-6xl mx-auto px-4">
          <div className="flex-1 order-2 text-center md:order-1 md:text-left z-10">
              <h1 className="text-2xl md:text-8xl font-bold text-blue-600 font-mono mb-4">
                <span className="text-transparent font-mono bg-clip-text bg-gradient-to-r from-blue-500 py-2 to-teal-600">{trl.fullstack}</span>
              </h1>
              <div className="flex gap-4">
                  <a href="#projects" className="bg-indigo-700 text-white py-3 px-6 rounded-md font-medium transition relative overflow-hidden 
                                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">{trl.viewProjects}</a>
                  <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded-md font-medium transition-all duration-200 
                                                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">{trl.contactMe}</a>
              </div>
              <div className="flex gap-4 mt-8">
                  <a href={config.socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                  </a>
                  <a href={config.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                  </a>
              </div>
          </div>
          <div className="flex-shrink-0 order-1 md:order-2 mx-4 relative">
              {/*Soft bright for the image */}
              <div 
                className={`absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/20 rounded-full blur-xl transition-all duration-2000 
                          ${isAnimated ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}
              ></div>
              
              {/* Animated border */}
              <div 
                className={`absolute inset-0 border-2 border-blue-500/30 rounded-full transition-all duration-2000
                          ${isAnimated ? 'animate-pulse-slow opacity-100' : 'opacity-0'}`}
              ></div>
              
              <div className="border-4 border-blue-500/30 h-64 rounded-full shadow-[0_0_25px_rgba(59,130,246,0.3)] w-64 md:h-70 md:w-70 overflow-hidden relative xl:h-90 xl:w-90">
                  <img 
                      src={config.images.profile.default}
                      srcSet={`
                        ${config.images.profile.small} 400w,
                        ${config.images.profile.medium} 800w,
                        ${config.images.profile.default} 1200w
                      `}
                      sizes="(max-width: 768px) 400px, (max-width: 1200px) 800px, 1200px"
                      alt="Foto de Lucas" 
                      className="h-full w-full duration-1000 object-cover transition-transform"
                      loading="lazy" // Agregamos lazy loading
                      crossOrigin="anonymous"
                      style={{ 
                        transform: isAnimated ? 'scale(1.05)' : 'scale(1)',
                      }}
                  />
              </div>
          </div>
        </div>
    </RevealOnScroll>
   </section>
  )
}
