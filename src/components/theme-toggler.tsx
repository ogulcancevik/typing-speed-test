import { useState } from "react";
import MoonIcon from "../assets/moon.svg?react";
import SunIcon from "../assets/sun.svg?react";

export const ThemeToggler = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	function toggleTheme() {
		document.documentElement.dataset.theme = isDarkMode ? "light" : "dark";
		setIsDarkMode((prev) => !prev);
	}

	return (
		<button
			type="button"
			className="border-0 text-yellow-500 dark:text-purple-500 cursor-pointer hover:scale-110 transition-transform"
			onClick={toggleTheme}
		>
			{isDarkMode ? <MoonIcon /> : <SunIcon />}
		</button>
	);
};
