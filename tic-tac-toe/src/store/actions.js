export const MAKE_MOVE = 'MAKE_MOVE';
export const START_NEW_GAME = 'START_NEW_GAME';

export function makeMove(index, value) {
	return { type: MAKE_MOVE, index, value };
}

export function startNewGame() {
	return { type: START_NEW_GAME };
}
