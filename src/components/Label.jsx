import PropTypes from "prop-types";
import "../../sass/layout/_labelTags.scss";

export default function Label({ title, location }) {
	return (
		<div className="label-container">
			<h1 className="apartment-title">{title}</h1>
			<p className="apartment-location">{location}</p>
		</div>
	);
}

Label.propTypes = {
	title: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired
};

Label.defaultProps = {
	title: "",
	location: ""
};
