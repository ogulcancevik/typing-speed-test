import { Header } from "@/components/header";
import { Footer } from "./components/footer";
import { Level } from "./components/level";
import { Result } from "./components/result";
import { TypeArea } from "./components/type-area";
import {
	TypingTestProvider,
	useTypingTest,
} from "./context/typing-test-context";

export default function App() {
	return (
		<TypingTestProvider>
			<AppContent />
		</TypingTestProvider>
	);
}

const AppContent = () => {
	const {
		currentText,
		difficulty,
		input,
		isFinished,
		metrics,
		updateDifficulty,
	} = useTypingTest();

	return (
		<div className="flex min-h-screen flex-col bg-[#f5f5f5] text-neutral-800 dark:bg-[#0f0f11] dark:text-neutral-200">
			<div className="container mx-auto px-6 flex-1 flex flex-col max-w-6xl relative z-10">
				<Header />
				<main className="flex-1 flex flex-col items-center justify-center w-full max-w-5xl mx-auto z-10">
					<Level onClick={updateDifficulty} difficulty={difficulty} />

					{isFinished ? (
						<Result
							wpm={metrics.wpm}
							accuracy={metrics.accuracy}
							timeSeconds={metrics.timeSeconds}
						/>
					) : (
						<TypeArea text={currentText} input={input} />
					)}
				</main>

				{!isFinished && <Footer />}
			</div>
		</div>
	);
};
