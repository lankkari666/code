export const actions = {
	SET_FIELD: 'SET_FIELD',
	STATE_RESET: 'STATE_RESET',
	SET_CURRENT_PLAYER: 'SET_CURRENT_PLAYER'
};

export const setField = (payload) => {
	return {
		type: actions.SET_FIELD,
		payload
	};
};

export const stateReset = (payload) => {
	return {
		type: actions.STATE_RESET,
		payload
	};
};

export const setCurrentPlayer = (payload) => {
	return {
		type: actions.SET_CURRENT_PLAYER,
		payload
	};
};
