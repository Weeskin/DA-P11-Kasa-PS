// Import des ressources et des dépendances nécessaires
import ArrowBack from "../assets/arrows/arrow-back.png";
import ArrowForward from "../assets/arrows/arrow-forward.png";
import { useState } from "react";
import PropTypes from "prop-types"; // Utilisé pour valider les props passées au composant

/**
 * Composant Slideshow qui affiche une série d'images avec des contrôles de navigation.
 * @param {object} props - Les propriétés passées au composant.
 * @param {string[]} props.pictures - Un tableau d'URLs des images à afficher.
 */
export default function Slideshow({ pictures }) {
	// --- ÉTAT (State) ---
	// On utilise le hook useState pour gérer l'index de l'image actuellement affichée.
	// 'currentSlide' contient l'index (commençant à 0).
	// 'setCurrentSlide' est la fonction pour mettre à jour cet index.
	// L'état initial est 0, pour afficher la première image du tableau.
	const [currentSlide, setCurrentSlide] = useState(0);

	// --- COMPORTEMENTS (Handlers) ---
	// Fonction pour passer à l'image précédente.
	const goToPreviousSlide = () => {
		// On utilise la forme fonctionnelle de setCurrentSlide pour garantir
		// que nous travaillons avec la valeur la plus à jour de l'état.
		setCurrentSlide((prevSlide) =>
			// Si on est sur la première image (index 0), on boucle vers la dernière.
			// Sinon, on décrémente simplement l'index.
			prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
		);
	};

	// Fonction pour passer à l'image suivante.
	const goToNextSlide = () => {
		setCurrentSlide((prevSlide) =>
			// Si on est sur la dernière image, on boucle vers la première (index 0).
			// Sinon, on incrémente simplement l'index.
			prevSlide === pictures.length - 1 ? 0 : prevSlide + 1
		);
	};


	//affichage
	return (
		<div className="slideshow-container">
			{/* Condition d'affichage : les flèches de navigation et le compteur
			    ne s'affichent que s'il y a plus d'une image. */}
			{pictures.length > 1 && (
				<div className="slideshow-navigation">
					<img
						className="navigation-back"
						src={ArrowBack}
						alt="Image précédente"
						onClick={goToPreviousSlide}
					/>
					<img
						className="navigation-forward"
						src={ArrowForward}
						alt="Image suivante"
						onClick={goToNextSlide}
					/>
				</div>
			)}
			<div className="slide">
				{/* Affiche l'image correspondant à l'index actuel */}
				<img
					src={pictures[currentSlide]}
					alt={`Photographie du logement ${currentSlide + 1}`}
				/>
				{/* Affiche le compteur seulement s'il y a plus d'une image */}
				{pictures.length > 1 && (
					<div className="slide-count">
						<span>{`${currentSlide + 1}/${pictures.length}`}</span>
					</div>
				)}
			</div>
		</div>
	);
}

// --- VALIDATION DES PROPS ---
// PropTypes aide à prévenir les bugs en s'assurant que le composant reçoit
// le bon type de données. Ici, on vérifie que 'pictures' est bien un tableau.
Slideshow.propTypes = {
	pictures: PropTypes.array.isRequired, // .isRequired rend la prop obligatoire
};
