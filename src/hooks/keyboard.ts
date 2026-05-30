import { useEffect } from "react";

interface UseKeyboardProps {
	setInput: React.Dispatch<React.SetStateAction<string>>;
	resetTest: () => void;
	textLength: number;
	currentText: string;
	autoSpace: boolean;
}

export const useKeyboard = ({ setInput, resetTest, textLength, currentText, autoSpace }: UseKeyboardProps) => {
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
				setInput((prev) => {
					if (prev.length >= textLength) return prev;

					if (autoSpace && event.key === " " && prev.endsWith(" ") && currentText[prev.length] !== " ") {
						return prev;
					}

					let newString = prev + event.key;

					if (
						autoSpace &&
						currentText[prev.length] === event.key &&
						currentText[prev.length + 1] === " "
					) {
						newString += " ";
					}

					return newString.length <= textLength ? newString : prev + event.key;
				});
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [resetTest, setInput, textLength, currentText, autoSpace]);
};
