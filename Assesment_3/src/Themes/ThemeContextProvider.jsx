import React, { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext";
import { changeColorScheme } from ".";

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  useEffect(() => {
    changeColorScheme(theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
