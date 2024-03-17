import { DRAW, ENDGAME, MOVE, PLAYER_MOVE, RESET } from './constants/constants';

export const move = (index, value) => {
	return {
		type: MOVE,
		payload: { index, value },
	};
};
export const playerMove = (value) => {
	return {
		type: PLAYER_MOVE,
		payload: value,
	};
};
export const setDraw = () => {
	return {
		type: DRAW,
	};
};
export const finishGame = () => {
	return {
		type: ENDGAME,
	};
};
export const reset = () => {
	return {
		type: RESET,
	};
};
