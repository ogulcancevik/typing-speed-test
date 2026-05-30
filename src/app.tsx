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
		<div className="flex h-svh flex-col bg-[#f5f5f5] text-neutral-800 dark:bg-[#0f0f11] dark:text-neutral-200 transition-colors duration-300">
			<div className="container mx-auto px-6 flex-1 flex flex-col max-w-6xl relative">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-500/5 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />
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
