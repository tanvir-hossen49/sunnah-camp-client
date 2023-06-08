import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = document.body;
    isDarkMode
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  }, [isDarkMode]);

  return (
    <button
      className={`bg-${isDarkMode ? "white" : "black"} text-${
        isDarkMode ? "black" : "white"
      }`}
      onClick={toggleMode}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
