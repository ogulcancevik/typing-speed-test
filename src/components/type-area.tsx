import { useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { getCharStates } from "@/helpers/get-char";

export const TypeArea = ({ text, input }: { text: string; input: string }) => {
	const states = getCharStates(text, input);
	const id = useId();
	const containerRef = useRef<HTMLDivElement>(null);
	const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
	const [caretStyle, setCaretStyle] = useState({ left: 0, top: 0, height: 0 });
	const chars = useMemo(() => text.split(""), [text]);
	const activeIndex = Math.min(input.length, chars.length);

	const cn = (state: "pending" | "correct" | "incorrect" | "untyped") => {
		switch (state) {
			case "correct":
				return "text-neutral-800 dark:text-neutral-200";
			case "incorrect":
				return "text-red-500 bg-red-500/10";
			default:
				return "text-neutral-400 dark:text-neutral-600";
		}
	};

	useLayoutEffect(() => {
		const container = containerRef.current;
		const isFinished = activeIndex === chars.length;
		const activeChar = isFinished ? charRefs.current[chars.length - 1] : charRefs.current[activeIndex];

		if (!container || !activeChar) {
			return;
		}

		const containerRect = container.getBoundingClientRect();
		const charRect = activeChar.getBoundingClientRect();

		setCaretStyle({
			left: charRect.left - containerRect.left + (isFinished ? charRect.width : -2),
			top: charRect.top - containerRect.top + (charRect.height - 36) / 2,
			height: 36,
		});
	}, [activeIndex, chars.length]);

	return (
		<div
			ref={containerRef}
			className="relative mx-auto select-none whitespace-pre-wrap text-[32px] leading-relaxed tracking-wide"
		>
			<div
				className="pointer-events-none absolute w-0.5 rounded-full bg-blue-500 transition-all duration-150 ease-out animate-pulse"
				style={{
					left: `${caretStyle.left}px`,
					top: `${caretStyle.top}px`,
					height: `${caretStyle.height}px`,
				}}
			/>

			{chars.map((char, i) => (
				<span
					key={`${id}-${i}`}
					ref={(element) => {
						charRefs.current[i] = element;
					}}
					className={cn(states[i])}
				>
					{char}
				</span>
			))}
		</div>
	);
};
