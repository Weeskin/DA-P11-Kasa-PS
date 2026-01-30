import { useParams, Navigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import TitleLocation from "../components/TitleLocation";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rate from "../components/Rate";
import Collapse from "../components/Collapse";
import apartmentsData from "../data/apartments.json";

export default function Apartment() {
	const { id } = useParams(); // Récupère l'ID depuis l'URL
	const selectedApartment = apartmentsData.find(
		(apartment) => apartment.id === id
	);

	if (!selectedApartment) {
		return <Navigate to="error" />;
	}

	return (
		<div className="apartment-container">
			<Slideshow pictures={selectedApartment.pictures} />
			<div className="apartmen-info_container">
				<div className="apartments-info_location">
					<TitleLocation
						title={selectedApartment.title}
						location={selectedApartment.location}
					/>
					<Tags tags={selectedApartment.tags} />
				</div>
				<div className="apartment-info_host">
					<Host
						name={selectedApartment.host.name}
						picture={selectedApartment.host.picture}
					/>
					<Rate rating={selectedApartment.rating} />
				</div>
			</div>
			<div className="collapse-container_apartment">
				<Collapse
					title={"Description"}
					description={selectedApartment.description}
				/>
				<Collapse
					title={"Équipements"}
					description={selectedApartment.equipments}
				/>
			</div>
		</div>
	);
}
