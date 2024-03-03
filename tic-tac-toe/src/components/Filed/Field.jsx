import { useEffect, useState } from 'react';
import { makeMove, startNewGame as startNewGameAction } from '../../store/actions.js';
import { store } from '../../store/store.js';
import { winPattern } from '../../utils/winPattern.js';
import Square from '../Square/Square.jsx';
import styles from './Field.module.css';


const Field = () => {
	const [state, setState] = useState(store.getState());
	// useEffect(() => {
	// 	const unsubscribe = store.subscribe(() => {
	// 		setState(store.getState());
	// 	});
	// 	return () => unsubscribe();
	// }, []);
	useEffect(() => {
		const handleStoreChange = () => {
			const currentState = store.getState();
			if (state !== currentState) {
				setState(currentState);
			}
		};

		// Subscribe to the store
		const unsubscribe = store.subscribe(handleStoreChange);

		// Unsubscribe when the component unmounts
		return () => unsubscribe();
	}, [state]);

	const { field, xIsNext } = state;

	function handleClick(i) {
		store.dispatch(makeMove(i, xIsNext));
	}

	const winner = winPattern(field);
	let status;
	if (winner) {
		status = 'Победитель: ' + winner;
	} else {
		status = 'Следующий ход ' + (xIsNext ? 'X' : 'O');
	}

	const startNewGame = () => {
		store.dispatch(startNewGameAction());
	};

	return (
		<>
			<div className={styles.status}>{status}</div>
			<button className={styles.newGame} onClick={startNewGame}> Начать заново</button>
			<div className={styles.field}>
				{
					field.map((square, i) => (
						<Square key={i} value={square} onSquareClick={() => handleClick(i)} />
					))
				}
			</div>
		</>
	);
};


export default Field;
