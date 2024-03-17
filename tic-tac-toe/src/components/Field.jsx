import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FieldLayout } from '../Layouts/FieldLayout/FieldLayout';
import { WIN_PATTERNS } from '../constants';
import { finishGame, move, playerMove, setDraw } from '../redux/actions';
import { selectGlobalState } from '../redux/selectors';
export function Field() {
	const { field, currentPlayer, endgame } = useSelector(selectGlobalState);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!field.some((element) => element === '')) {
			dispatch(setDraw());
		}
		WIN_PATTERNS.forEach((wins) => {
			if (wins.every((winPosition) => field[winPosition] === 'X')) {
				dispatch(playerMove('X'));
				dispatch(finishGame());
			}
			if (wins.every((winPosition) => field[winPosition] === 'O')) {
				dispatch(playerMove('O'));
				dispatch(finishGame());
			}
		});
	}, [currentPlayer, field]);

	function click(i) {
		XsAndOs('X', 'O', i);
		XsAndOs('O', 'X', i);
	}

	function XsAndOs(value, newValue, index) {
		if (!endgame) {
			if (currentPlayer === value && field[index] !== 'O' && field[index] !== 'X') {
				dispatch(move(index, value));
				dispatch(playerMove(newValue));
			}
		}
	}

	return <FieldLayout field={field} click={click} />;
}
