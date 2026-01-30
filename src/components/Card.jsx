import { Link } from "react-router-dom";
import apartmentsData from "../data/apartments.json";

function Card() {
	const cardSheet = apartmentsData.map((card) => {
		return (
			<section key={card.id}>
				<Link
					className="link-card"
					to={`/apartments/${card.id}`}
				>
					<img
						className="card-image"
						src={card.cover}
						alt={card.title}
					></img>
					<div className="card-background"></div>
					<h2 className="card-title">{card.title}</h2>
				</Link>
			</section>
		);
	});

	return <section className="card-container">{cardSheet}</section>;
}
export default Card;
