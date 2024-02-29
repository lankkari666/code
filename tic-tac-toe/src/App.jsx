import styles from './App.module.css'
import Field from './components/Filed/Field.jsx'

const App = () => {
	return (
		<>
			<div className={styles.app}>
				<h1 className={styles.tittle}> X / O</h1>
				<Field>
				</Field>
			</div>
		</>
	);
};

export default App;
