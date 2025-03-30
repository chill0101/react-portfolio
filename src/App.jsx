import './index.css'

import { LoadingScreen } from './components/LoadingScreen'
import { useState, useEffect } from 'react';
import { NavBar } from './components/NavBar';
import { MobileMenu } from './components/MobileMenu';
import { Home, About, Projects, Contact, TechStack } from './components/sections/';

import { Footer } from './components/Footer';

import { LanguageProvider } from './components/context/LanguageProvider';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [bgPosition, setBgPosition] = useState("bg-[position:50%_100%]");
  
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        setBgPosition("bg-[position:50%_0%] transition-[background-position] duration-[2000ms] ease-out");
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);
  
  return (
    <LanguageProvider>
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div 
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} 
                  bg-gradient-to-b from-[#0B1120] via-[#164E63] to-[#083344] text-gray-100 
                  ${bgPosition}
                  bg-[size:100%_200%]`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <TechStack />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
    </LanguageProvider> 
  )
}

export default App
