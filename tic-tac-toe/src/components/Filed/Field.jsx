import styles from './Field.module.css';
import Square from '../Square/Square.jsx';
import { useState } from 'react';

const Field = () => {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);

	function handleClick(i) {
		if (squares[i] || calculateWinner(squares)) {
			return;
		}
		const nextSquares = squares.slice();
		if (xIsNext) {
			nextSquares[i] = 'X';
		} else {
			nextSquares[i] = 'O';
		}
		setSquares(nextSquares);
		setXIsNext(!xIsNext);
	}

	const winner = calculateWinner(squares);
	let status;
	if (winner) {
		status = 'Победитель: ' + winner;
	} else {
		status = 'Следующий ход ' + (xIsNext ? 'X' : 'O');
	}

	const startNewGame = () => {
		return (
			<button className={styles.newGame} onClick={() => setSquares(Array(9).fill(null))}> Начать заново</button>
		);
	};
	return (
		<>
			<div className={styles.status}>{status}</div>
			{startNewGame()}
			<div className={styles.field}>
				{
					squares.map((square, i) => (
						<Square key={i} value={square} onSquareClick={() => handleClick(i)} />
					))
				}
			</div>
		</>
	);
};

const calculateWinner = (squares) => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
};

export default Field;
