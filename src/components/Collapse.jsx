import ArrowBackUp from "../assets/collapse/arrow-back_up.png";
import ArrowBackDown from "../assets/collapse/arrow-back_down.png";
import { useState } from "react";
import PropTypes from "prop-types";

export default function Collapse({ id, title, description }) {
	//state
	const [isOpen, setIsOpen] = useState(false);

	const toggleCollapse = () => {
		setIsOpen(!isOpen);
	};

	let contentElement;

	//comportement
	if (typeof description === "string") {
		contentElement = <p>{description}</p>;
	} else if (Array.isArray(description)) {
		contentElement = description.map((item, index) => (
			<p key={index}>{item}</p>
		));
	}

	//affichage
	return (
		<section
			className="collapse"
			key={id}
		>
			<div
				className="collapse-header"
				onClick={toggleCollapse}
			>
				<h2>{title}</h2>
				<img
					src={isOpen ? ArrowBackDown : ArrowBackUp}
					alt="Arrow"
					className="arrow-back"
				/>
			</div>
			<div className={`collapse-body ${isOpen ? "collapse-body--open" : ""}`}>
				{contentElement}
			</div>
		</section>
	);
}

Collapse.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.string)
	]).isRequired
};
