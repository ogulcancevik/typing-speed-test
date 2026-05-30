import Icon from "../assets/icon.png";
import { useTypingTest } from "../context/typing-test-context";
import { ThemeToggler } from "./theme-toggler";

export const Header = () => {
	const { autoSpace, setAutoSpace } = useTypingTest();

	return (
		<header className="z-10 flex flex-wrap items-center justify-between gap-4 py-8 sm:flex-nowrap sm:py-10">
			<div className="flex min-w-0 items-center justify-center gap-2.5 sm:gap-3">
				<img src={Icon} alt="Icon" className="size-6 shrink-0 sm:size-7" />
				<div className="flex min-w-0 flex-col">
					<span className="truncate font-extrabold text-xl tracking-tight text-neutral-800 sm:text-2xl dark:text-neutral-100">
						typingspeed
					</span>
				</div>
			</div>
			<div className="ml-auto flex items-center gap-2 sm:gap-4">
				<button
					type="button"
					onClick={() => setAutoSpace(!autoSpace)}
					className={`cursor-pointer rounded-md px-2.5 py-1.5 text-xs font-medium sm:px-3 sm:text-sm ${
						autoSpace
							? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
							: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
					}`}
				>
					<span className="sm:inline">
						Auto Space: {autoSpace ? "ON" : "OFF"}
					</span>
				</button>
				<ThemeToggler />
			</div>
		</header>
	);
};
