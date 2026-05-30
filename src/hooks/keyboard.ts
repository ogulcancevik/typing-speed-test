import { useEffect } from "react";

interface UseKeyboardProps {
	setInput: React.Dispatch<React.SetStateAction<string>>;
	resetTest: () => void;
	textLength: number;
}

export const useKeyboard = ({ setInput, resetTest, textLength }: UseKeyboardProps) => {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.metaKey || event.ctrlKey || event.altKey) {
				return;
			}

			if (event.key === "Backspace") {
				event.preventDefault();
				setInput((prev) => prev.slice(0, -1));
				return;
			}

			if (event.key === "Escape") {
				setInput("");
				return;
			}

			if (event.key === "Tab") {
				event.preventDefault();
				resetTest();
				return;
			}

			if (event.key.length === 1) {
				event.preventDefault();
				setInput((prev) => (prev.length < textLength ? prev + event.key : prev));
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [resetTest, setInput, textLength]);
};
