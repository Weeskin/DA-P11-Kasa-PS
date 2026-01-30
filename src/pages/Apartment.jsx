import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import TitleLocation from "../components/TitleLocation";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rate from "../components/Rate";
import Collapse from "../components/Collapse";
import appartementsData from "../data/apartments.json";

export default function Apartment() {
	const { id } = useParams(); // Récupère l'ID depuis l'URL
	const selectedAppartement = appartementsData.find(
		(appartement) => appartement.id === id
	);

	if (!selectedAppartement) {
		return <Navigate to="error" />;
	}

	return (
		<div className="apartment-container">
			<Slideshow pictures={selectedAppartement.pictures} />
			<div className="apartmen-info_container">
				<div className="apartments-info_location">
					<TitleLocation
						title={selectedAppartement.title}
						location={selectedAppartement.location}
					/>
					<Tags tags={selectedAppartement.tags} />
				</div>
				<div className="apartment-info_host">
					<Host
						name={selectedAppartement.host.name}
						picture={selectedAppartement.host.picture}
					/>
					<Rate rating={selectedAppartement.rating} />
				</div>
			</div>
			<div className="collapse-container_apartment">
				<Collapse
					title={"Description"}
					description={selectedAppartement.description}
				/>
				<Collapse
					title={"Équipements"}
					description={selectedAppartement.equipments}
				/>
			</div>
		</div>
	);
}
