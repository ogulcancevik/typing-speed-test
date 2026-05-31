import { useEffect } from "react";

interface UseKeyboardProps {
	setInput: React.Dispatch<React.SetStateAction<string>>;
	resetTest: () => void;
	textLength: number;
	currentText: string;
	autoSpace: boolean;
}

export const useKeyboard = ({
	setInput,
	resetTest,
	textLength,
	currentText,
	autoSpace,
}: UseKeyboardProps) => {
	useEffect(() => {
		const handleCharacterInput = (key: string) => {
			setInput((prev) => {
				if (prev.length >= textLength) return prev;

				// Prevent double spaces when autoSpace is active
				const isDoubleSpace =
					autoSpace &&
					key === " " &&
					prev.endsWith(" ") &&
					currentText[prev.length] !== " ";

				if (isDoubleSpace) return prev;

				let newString = prev + key;

				// Auto-insert space after completing a word correctly
				const isWordCompleted =
					autoSpace &&
					currentText[prev.length] === key &&
					currentText[prev.length + 1] === " ";

				if (isWordCompleted) {
					newString += " ";
				}

				return newString.length <= textLength ? newString : prev + key;
			});
		};

		const handleKeyDown = (event: KeyboardEvent) => {
			// Ignore system shortcuts
			if (event.metaKey || event.ctrlKey || event.altKey) return;

			// Handle utility keys
			switch (event.key) {
				case "Escape":
					return setInput("");
				case "Tab":
					event.preventDefault();
					return resetTest();
			}

			// Allow native inputs to handle typing natively (fixes mobile composition desync)
			const isInputTarget =
				event.target instanceof HTMLInputElement ||
				event.target instanceof HTMLTextAreaElement;

			if (isInputTarget) return;

			// Handle Backspace
			if (event.key === "Backspace") {
				event.preventDefault();
				return setInput((prev) => prev.slice(0, -1));
			}

			// Handle character typing
			if (event.key.length === 1) {
				event.preventDefault();
				handleCharacterInput(event.key);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [resetTest, setInput, textLength, currentText, autoSpace]);
};
