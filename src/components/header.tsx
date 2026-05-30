import Icon from "../assets/icon.png";
import { ThemeToggler } from "./theme-toggler";

export const Header = () => {
	return (
		<header className="flex items-center justify-between py-10 z-10">
			<div className="flex items-center justify-center gap-3">
				<img src={Icon} alt="Icon" className="size-7" />
				<div className="flex flex-col">
					<span className="font-extrabold text-2xl tracking-tight text-neutral-800 dark:text-neutral-100">
						typingspeed
					</span>
				</div>
			</div>
			<div className="flex items-center gap-4">
				<ThemeToggler />
			</div>
		</header>
	);
};
