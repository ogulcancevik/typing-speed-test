import {
	createContext,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import DATA from "../constant/data";
import { useKeyboard } from "../hooks/keyboard";

export type Difficulty = "easy" | "medium" | "hard";

interface TypingTestMetrics {
	wpm: number;
	accuracy: number;
	timeSeconds: number;
}

interface TypingTestContextValue {
	input: string;
	difficulty: Difficulty;
	currentText: string;
	isFinished: boolean;
	metrics: TypingTestMetrics;
	autoSpace: boolean;
	resetTest: () => void;
	updateDifficulty: (difficulty: Difficulty) => void;
	setAutoSpace: (value: boolean) => void;
	setInput: React.Dispatch<React.SetStateAction<string>>;
}

const STORAGE_KEY = "difficulty";
const DEFAULT_DIFFICULTY: Difficulty = "easy";

const TypingTestContext = createContext<TypingTestContextValue | null>(null);

const getStoredDifficulty = (): Difficulty => {
	const storedDifficulty = localStorage.getItem(STORAGE_KEY);

	return storedDifficulty === "easy" ||
		storedDifficulty === "medium" ||
		storedDifficulty === "hard"
		? storedDifficulty
		: DEFAULT_DIFFICULTY;
};

const getRandomTextIndex = (difficulty: Difficulty) =>
	Math.floor(Math.random() * DATA[difficulty].length);

export const TypingTestProvider = ({ children }: { children: ReactNode }) => {
	const [input, setInput] = useState("");
	const [difficulty, setDifficulty] = useState<Difficulty>(getStoredDifficulty);
	const [textIndex, setTextIndex] = useState(() =>
		getRandomTextIndex(getStoredDifficulty()),
	);
	const [startTime, setStartTime] = useState<number | null>(null);
	const [endTime, setEndTime] = useState<number | null>(null);
	const [autoSpace, setAutoSpace] = useState<boolean>(() => {
		const stored = localStorage.getItem("autoSpace");
		return stored === null ? false : stored === "true";
	});

	const currentText = DATA[difficulty][textIndex].text;
	const isFinished =
		input.length === currentText.length && currentText.length > 0;

	const resetTest = useCallback(
		(nextDifficulty?: Difficulty) => {
			const activeDifficulty = nextDifficulty ?? difficulty;

			setInput("");
			setStartTime(null);
			setEndTime(null);
			setTextIndex(getRandomTextIndex(activeDifficulty));
		},
		[difficulty],
	);

	const updateDifficulty = useCallback(
		(nextDifficulty: Difficulty) => {
			setDifficulty(nextDifficulty);
			resetTest(nextDifficulty);
		},
		[resetTest],
	);

	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, difficulty);
	}, [difficulty]);

	useEffect(() => {
		localStorage.setItem("autoSpace", String(autoSpace));
	}, [autoSpace]);

	useEffect(() => {
		if (input.length === 1 && startTime === null) {
			setStartTime(Date.now());
		}

		if (isFinished && endTime === null) {
			setEndTime(Date.now());
		}
	}, [endTime, input.length, isFinished, startTime]);

	useKeyboard({
		setInput,
		resetTest,
		textLength: currentText.length,
		currentText,
		autoSpace,
	});

	const metrics = useMemo(() => {
		if (!isFinished || startTime === null || endTime === null) {
			return { wpm: 0, accuracy: 0, timeSeconds: 0 };
		}

		let correctChars = 0;

		for (let i = 0; i < input.length; i++) {
			if (input[i] === currentText[i]) {
				correctChars++;
			}
		}

		const timeSeconds = (endTime - startTime) / 1000;
		const minutes = timeSeconds / 60;

		return {
			wpm: Math.round(correctChars / 5 / minutes),
			accuracy: Math.round((correctChars / currentText.length) * 100),
			timeSeconds,
		};
	}, [currentText, endTime, input, isFinished, startTime]);

	const value = useMemo(
		() => ({
			input,
			difficulty,
			currentText,
			isFinished,
			metrics,
			autoSpace,
			resetTest: () => resetTest(),
			updateDifficulty,
			setAutoSpace,
			setInput,
		}),
		[
			currentText,
			difficulty,
			input,
			isFinished,
			metrics,
			autoSpace,
			resetTest,
			updateDifficulty,
		],
	);

	return (
		<TypingTestContext.Provider value={value}>
			{children}
		</TypingTestContext.Provider>
	);
};

export const useTypingTest = () => {
	const context = useContext(TypingTestContext);

	if (!context) {
		throw new Error("useTypingTest must be used within TypingTestProvider");
	}

	return context;
};
