import { useState, useRef, useEffect } from "react";
import { useLanguage } from "./useLanguage"; 

export const LanguageToggle = () => {
  const { language, setLanguage} = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    setIsOpen(false);
  };
  
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-1 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-md border border-white/20 hover:bg-white/10"
        aria-label="Cambiar idioma"
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
        {language === 'es' ? 'ES' : 'EN'}
        <svg 
          className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 w-full mt-1 origin-top-right rounded-md bg-[#1a1a1a] border border-white/10 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => handleLanguageChange('es')}
              className={`flex w-full items-center justify-center px-4 py-2 text-sm ${language === 'es' ? 'bg-blue-500/20 text-blue-400' : 'text-gray-300 hover:bg-white/5'}`}
              role="menuitem"
            >
              <span className="text-center">ES</span>
            </button>
            <button
              onClick={() => handleLanguageChange('en')}
              className={`flex w-full items-center justify-center px-4 py-2 text-sm ${language === 'en' ? 'bg-blue-500/20 text-blue-400' : 'text-gray-300 hover:bg-white/5'}`}
              role="menuitem"
            >
              <span className="text-center">EN</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};