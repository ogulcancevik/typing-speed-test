export const Result = ({
	wpm,
	accuracy,
	timeSeconds,
}: {
	wpm: number;
	accuracy: number;
	timeSeconds: number;
}) => {
	return (
		<div className="flex flex-col items-center gap-10 animate-in fade-in zoom-in duration-500 mt-8">
			<div className="flex gap-16 text-center">
				<div className="flex flex-col items-center">
					<span className="text-7xl font-black text-blue-500 tracking-tighter">
						{wpm}
					</span>
					<span className="text-sm font-bold text-neutral-400 uppercase tracking-widest mt-3">
						WPM
					</span>
				</div>
				<div className="flex flex-col items-center">
					<span className="text-7xl font-black text-neutral-700 dark:text-neutral-200 tracking-tighter">
						{accuracy}%
					</span>
					<span className="text-sm font-bold text-neutral-400 uppercase tracking-widest mt-3">
						Accuracy
					</span>
				</div>
				<div className="flex flex-col items-center">
					<span className="text-7xl font-black text-neutral-700 dark:text-neutral-200 tracking-tighter">
						{timeSeconds.toFixed(1)}s
					</span>
					<span className="text-sm font-bold text-neutral-400 uppercase tracking-widest mt-3">
						Time
					</span>
				</div>
			</div>

			<div className="mt-12 text-neutral-500 flex items-center gap-3">
				<kbd className="bg-neutral-200 dark:bg-neutral-800 px-4 py-2 rounded-lg text-sm font-bold font-sans text-neutral-700 dark:text-neutral-300 shadow-sm border border-neutral-300/50 dark:border-neutral-700/50">
					tab
				</kbd>
				<span className="font-medium">to restart test</span>
			</div>
		</div>
	);
};
