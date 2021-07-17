import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Submenu from "./components/Submenu/Submenu";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Hero />
			<Submenu />
		</>
	);
}

export default App;
