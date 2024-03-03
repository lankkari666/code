import { createEmptyField } from '../utils/createEmptyField.js';
import { winPattern } from '../utils/winPattern.js';
import { MAKE_MOVE, START_NEW_GAME } from './actions';

const initialState = {
	xIsNext: true,
	field: createEmptyField
};
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case MAKE_MOVE:
			// Check 'state.field' instead of 'state.squares'
			if (state.field[action.index] || winPattern(state.field)) {
				return state;
			}
			// Copy 'state.field' instead of 'state.squares'
			const squares = state.field.slice();
			squares[action.index] = state.xIsNext ? 'X' : 'O';
			return {
				field: squares, // Here also
				xIsNext: !state.xIsNext
			};
		case START_NEW_GAME:
			return initialState;
		default:
			return state;
	}
};
