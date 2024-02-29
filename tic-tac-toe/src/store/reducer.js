import { createEmptyField } from '../utils/createEmptyField.js';

const initialState = {
	field: createEmptyField(),
	xIsNext: true
};
export const reducer = (state = initialState, { type, payload }) => {
	switch (action.type) {
		case 'MAKE_MOVE':
			const newBoard = state.board.slice();
			newBoard[action.index] = state.xIsNext ? 'X' : 'O';
			return {
				board: newBoard,
				xIsNext: !state.xIsNext
			};
		default:
			return state;
	}
};
