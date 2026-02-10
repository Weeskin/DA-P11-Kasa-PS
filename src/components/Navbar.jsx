import { NavLink } from "react-router-dom";

export default function Navbar() {
	const getNavLinkClass = ({ isActive }) => `link ${isActive ? "active" : ""}`;

	return (
		<div className="navbar">
			<nav>
				<NavLink className={getNavLinkClass} to="/">
					Accueil
				</NavLink>
				<NavLink className={getNavLinkClass} to="/about">
					À propos
				</NavLink>
			</nav>
		</div>
	);
}
