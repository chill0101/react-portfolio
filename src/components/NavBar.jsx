import { useEffect } from "react"
import { LanguageToggle } from "./context/LanguageToggle";
import { useLanguage } from "./context/useLanguage";
import PropTypes from 'prop-types'; // Importamos PropTypes



export const NavBar = ({menuOpen, setMenuOpen}) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])
  
  const { trl } = useLanguage();


  return (
    <nav
      className="fixed top-0 w-full z-40 bg-[rgba(5, 0, 28, 0.93)] backdrop-blur-3xl border-gray-800 shadow-md"
    >
      <div
        className=" mx-auto px-8"
      >
        <div className='flex justify-between items-center h-16'> 
          <a href="#home" className="font-mono text-xl font-bold text-gray-100">
            
            Lucas Ruiz  {" "}
          </a>
          <div 
              className="w-5 h-8 relative cursor-pointer z-40 md:hidden text-2xl" 
              onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="font-mono text-gray-300 hover:text-white transition-colors">
                {trl.home}
              </a>
              <a href="#about" className="font-mono text-gray-300 hover:text-white transition-colors">
                {trl.about}
              </a>
              <a href="#projects" className="font-mono text-gray-300 hover:text-white transition-colors">
                {trl.projects}
              </a>
              <a href="#contact" className="font-mono text-gray-300 hover:text-white transition-colors">
                {trl.contact}                
              </a>
              <LanguageToggle />

              
          </div>

        </div>
      </div>
    </nav>
  )
}
// Define propTypes for the NavBar component => error detection
NavBar.propTypes = {
  menuOpen: PropTypes.bool.isRequired, // menuOpen must be a boolean and is required
  setMenuOpen: PropTypes.func.isRequired // setMenuOpen must be a function and is required
};