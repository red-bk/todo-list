import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    isDarkMode &&  setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`px-4 py-2 rounded-full w-fit m-5 ${
        darkMode ? "bg-yellow-400" : "bg-gray-800"
      } ${
        darkMode ? "text-gray-900" : "text-white"
      } transition-colors duration-200`}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeSwitcher;
