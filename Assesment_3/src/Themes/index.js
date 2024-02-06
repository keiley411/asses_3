/**
 * 
 * @param { "dark" | "light" } theme 
 */
const changeColorScheme = async (theme) => {
    // document.documentElement.setAttribute("data-theme", theme);
    // localStorage.setItem("theme", theme);
    if(theme === 'light') {
        document.body.classList.remove('dark');
        document.body.classList.add(theme);
    }

    if(theme === 'dark') {
        document.body.classList.remove('light');
        document.body.classList.add(theme);
    }
}

/**
 * 
 * @returns  { Promise<"dark" | "light"> }
 */
const retriveTheme = async () => {
    let theme = localStorage.getItem("theme");
    if (!theme) {
        theme = "dark";
    }
    return theme;
}


export { changeColorScheme, retriveTheme }