import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "./translations";
import PropTypes from "prop-types";

// Context provider - only one instance in the app
// This component will provide the language context to its children
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "es";
  });
  
  // toggleLanguage function to switch between languages
  // This function will update the language state and localStorage
  const toggleLanguage = () => {
    const newLang = language === "es" ? "en" : "es";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
  };
  
  // Get the translations for the current language
  // This will be used to access the translations in the components
  const trl = translations[language];
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, trl }}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};