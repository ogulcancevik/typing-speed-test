import type { Difficulty } from "../context/typing-test-context";

interface LevelProps {
	onClick: (newDifficulty: Difficulty) => void;
	difficulty: Difficulty;
}

export const Level = ({ onClick, difficulty }: LevelProps) => {
	return (
		<div className="flex gap-2 mb-12 bg-neutral-200/50 dark:bg-neutral-800/50 p-1.5 rounded-xl">
			{(["easy", "medium", "hard"] as const).map((level) => (
				<button
					type="button"
					key={level}
					tabIndex={-1}
					onClick={() => onClick(level)}
					className={`cursor-pointer px-5 py-2 rounded-lg text-sm font-semibold capitalize transition-all ${
						difficulty === level
							? "bg-white dark:bg-neutral-700 shadow-sm text-neutral-900 dark:text-neutral-100"
							: "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
					}`}
				>
					{level}
				</button>
			))}
		</div>
	);
};
