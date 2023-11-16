import styles from './App.module.css';

const btnValues = [
	['C', '+-', '%', '/'],
	[7, 8, 9, 'x'],
	[4, 5, 6, '-'],
	[1, 2, 3, '+'],
	[0, '.', '='],
];

const getStyleName = btn => {
	const className = {
		'=': 'equals',
		'x': 'opt',
		'-': 'opt',
		'+': 'opt',
		'/': 'opt',
	}
	return className[btn]
}

const App = () => {

	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.screen}>
					0123456789
				</div>
				<div className={styles.btnBox}>
					{btnValues.flat().map((btn, i) => (
						<button className={`${styles.btn} ${styles[getStyleName(btn)]}`} value={btn} key={i}>{btn}</button>
					))}
				</div>
			</div>
		</>
	);
};

export default App;
