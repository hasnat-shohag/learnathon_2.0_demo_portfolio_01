import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
	
function App() {
	return (
		<div className={styles.App}>
			<Navbar />
			<Hero />
			<About/>
		</div>
	);
}

export default App;
