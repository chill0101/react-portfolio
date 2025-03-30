import { useEffect } from "react";
import { LanguageToggle } from "./context/LanguageToggle";
import { useLanguage } from "./context/useLanguage";
import PropTypes from "prop-types";

export const MobileMenu = ({menuOpen, setMenuOpen}) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const { trl } = useLanguage();
  
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-[rgba(10, 10, 10, 0.6)] backdrop-blur-md z-40 
                    flex flex-col items-center justify-center 
                    transition-all duration-300 ease-in-out
                    ${
                      menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none" 
                    }`
                   }
    >
        <button 
            onClick={() => setMenuOpen(false)} 
            className={"absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"}
            aria-label="Close Menu"
        >
            &times;
        </button>            
        <a href="#home" 
           className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-5"}
            `}
           onClick={() => setMenuOpen(false)}
        >
            {trl.home}
        </a>
        <a href="#about" 
           className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                      ${menuOpen 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 -translate-y-5"}
           `}
           onClick={() => setMenuOpen(false)}
        >
            {trl.about}
        </a>
        <a href="#projects" 
           className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-5"}
          `} 
           onClick={() => setMenuOpen(false)}
        >
            {trl.projects}
        </a>
        <a href="#contact" 
           className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
            ${menuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-5"}
            `}
           onClick={() => setMenuOpen(false)}
        >
            {trl.contact}
        </a>

        {/* LanguageToggle adjust for mobile */}
        <div 
          className={`mt-8 transform transition-transform duration-300 scale-125
            ${menuOpen 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 -translate-y-5"}
          `}
        >
          <LanguageToggle />
        </div>
    </div>
  );
};


MobileMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};