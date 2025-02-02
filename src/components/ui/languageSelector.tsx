import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage); // Change language
    localStorage.setItem("language", selectedLanguage);
  };

  useEffect(() => {
    // Load the saved language from localStorage, default to 'hu'
    const savedLanguage = localStorage.getItem("language") || "hu";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);
  return (
    <select
      className="form-select border-0 form-select-sm"
      name="language"
      id="language"
      onChange={changeLanguage}
      value={i18n.language}
    >
      <option value="hu">HU</option>
      <option value="en">EN</option>
    </select>
  );
};

export default LanguageSelector;
