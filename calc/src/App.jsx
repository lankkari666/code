import styles from './App.module.css';
import { useState } from 'react';


const App = () => {

	const getStyleName = btn => {
		const className = {
			'=': 'equals',
			'-': 'opt',
			'+': 'opt',
			'C': 'clean'
		};
		return className[btn];
	};

	const NUMS = [
		'C', '+', '-', 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '='
	];

	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	const handleButtonClick = (value) => {
		console.log(value);
		if (value === 'C') {
			setOperand1('');
			setOperand2('');
			setOperator('');
			setIsResult(false);
		} else if (value === '+' || value === '-') {
			setOperator(value);
			setIsResult(false);
		} else if (value === '=') {
			if (operand2 !== '') {
				if (operator === '+') {
					setOperand1(String(Number(operand1) + Number(operand2)));
				} else if (operator === '-') {
					setOperand1(String(Number(operand1) - Number(operand2)));
				}
				setOperator('');
				setOperand2('');
				setIsResult(true);
			}
		} else {
			if (isResult) {
				setOperand1(value);
				setIsResult(false);
			} else if (operator === '') {
				setOperand1(operand1 + value);
			} else {
				setOperand2(operand2 + value);
			}
		}
	};
	return (
		<>
			<h1 className={styles.tittle}> calc </h1>
			<div className={styles.calculator}>
				<div className={`${styles.display} ${isResult ? styles.result : ''}`}>
					{operand1} {operator} {operand2}
				</div>
				<div className={styles.buttons}>
					{NUMS.map((btn, i) => (
						<button key={i} onClick={() => handleButtonClick(btn)}
										className={
											`
									${styles.button}
									${styles[getStyleName(btn)]}
									`
										}>
							{btn}
						</button>
					))}
				</div>
			</div>
		</>
	);
};
export default App;
