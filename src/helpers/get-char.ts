export function getCharStates(text: string, input: string) {
	return text.split("").map((char, i) => {
		if (i >= input.length) return "pending";

		return input[i] === char ? "correct" : "incorrect";
	});
}
