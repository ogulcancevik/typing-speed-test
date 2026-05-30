import Icon from "../assets/icon.png";
import { useTypingTest } from "../context/typing-test-context";
import { ThemeToggler } from "./theme-toggler";

export const Header = () => {
	const { autoSpace, setAutoSpace } = useTypingTest();

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
				<button
					type="button"
					onClick={() => setAutoSpace(!autoSpace)}
					className={`text-sm font-medium px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
						autoSpace
							? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
							: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
					}`}
				>
					Auto Space: {autoSpace ? "ON" : "OFF"}
				</button>
				<ThemeToggler />
			</div>
		</header>
	);
};
