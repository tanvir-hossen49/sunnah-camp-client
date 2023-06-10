import { Moon } from "lucide-react";
import { SunMoon } from "lucide-react";
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
    <button onClick={toggleMode}>{isDarkMode ? <SunMoon /> : <Moon />}</button>
  );
};

export default ThemeToggle;
