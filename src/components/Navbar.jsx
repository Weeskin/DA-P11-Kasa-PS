import { NavLink } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="navbar">
			<nav>
				<NavLink
					className={({ isActive }) => `link ${isActive ? "active" : ""}`}
					to="/"
				>
					Accueil
				</NavLink>
				<NavLink
					className={({ isActive }) => `link ${isActive ? "active" : ""}`}
					to="/about"
				>
					À propos
				</NavLink>
			</nav>
		</div>
	);
}
