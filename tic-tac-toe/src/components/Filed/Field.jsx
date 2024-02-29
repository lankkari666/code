import Square from '../Square/Square.jsx';
import styles from './Field.module.css';
import { winPattern } from '../../utils/winPattern.js';


const Field = () => {
	// const [squares, setSquares] = useState(createEmptyField);
	// const [xIsNext, setXIsNext] = useState(true);

	function handleClick(i) {
		if (squares[i] || winPattern(squares)) {
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

	const winner = winPattern(squares);
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


export default Field;
