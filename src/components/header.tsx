import Icon from "../assets/icon.png";
import { ThemeToggler } from "./theme-toggler";

export const Header = () => {
	return (
		<header className="flex items-center justify-between px-4 h-16 border-gray-200">
			<div className="flex items-center justify-center gap-2">
				<img src={Icon} alt="Icon" className="size-7" />
				<div className="flex flex-col">
					<span className="font-bold text-2xl leading-7 tracking-tight">
						Typing Speed Test
					</span>
					<span className="text-xs text-gray-700 dark:text-gray-400 ml-1">
						Type as fast as you can in 60 seconds
					</span>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<ThemeToggler />
			</div>
		</header>
	);
};
