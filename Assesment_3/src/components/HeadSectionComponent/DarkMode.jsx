import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { changeColorScheme, retriveTheme } from "../../Themes";
import './dark-mode.css';
import SunIcon from "../../icons/SunIcon";
import MoonIcon from "../../icons/MoonIcon";
import ThemeContext from "../../Themes/ThemeContext";

const DarkMode = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  // const [state, setState] = useState(true);
  // const handleClick = () => {
  //   // selects the theme to be changed to
  //   const theme = !state ? "dark" : "light";
  //   changeColorScheme(theme).then(() => {
  //     setState(theme === "dark");
  //   });
  // };

  // useEffect(() => {
  //   retriveTheme().then((theme) => {
  //     setState(state === "dark");
  //   });
  // }, []);

  return (
    <>
      <button className="dark-mode" onClick={toggleTheme}>
        {theme === "dark" ? (
          <SunIcon width={20} height={20} color={"white"} />
        ) : (
          <MoonIcon width={20} height={20} color={"white"}/>
        )}
      </button>
    </>
  );
};

export default DarkMode;
