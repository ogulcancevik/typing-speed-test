export const Footer = () => (
	<footer className="py-8 text-center text-sm font-medium text-neutral-400 dark:text-neutral-500 flex items-center justify-center gap-6 z-10">
		<span className="flex items-center gap-2">
			<kbd className="bg-neutral-200 dark:bg-neutral-800 px-2 py-1 rounded text-xs font-sans">
				tab
			</kbd>{" "}
			next
		</span>
		<span className="flex items-center gap-2">
			<kbd className="bg-neutral-200 dark:bg-neutral-800 px-2 py-1 rounded text-xs font-sans">
				esc
			</kbd>{" "}
			restart
		</span>
	</footer>
);
