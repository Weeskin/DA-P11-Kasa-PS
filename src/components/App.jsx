import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Apartment from "../pages/Apartment";
import About from "../pages/About";

function App() {
	return (
		<div className="app">
			<Header />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/apartments/:id"
					element={<Apartment />}
				/>
				<Route
					path="/*"
					element={<Error />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
