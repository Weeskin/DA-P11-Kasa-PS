import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import bannerAboutPage from "../assets/banners/banner-about.png";
import aproposData from "../data/about.json";

export default function About() {
	//state
	const collapseContent = aproposData.map((item) => (
		<Collapse
			key={item.id}
			title={item.title}
			description={item.description}
		/>
	));

	//rendu
	return (
		<div className="about-page">
			<Banner image={bannerAboutPage} />
			<div className="collapse-container_apropos">{collapseContent}</div>
		</div>
	);
}
