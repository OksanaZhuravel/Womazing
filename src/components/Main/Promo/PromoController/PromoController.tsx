import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
// import Button from "../../../UI/Button/Button";

const PromoController: React.FC = () => {
	const scrollToShop = () => {
		const shopElement = document.getElementById('shop');
		if (shopElement) {
			const topOffset = shopElement.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({ top: topOffset, behavior: 'smooth' });
		}
	};
	return (
		<div className="promo__controller">
			<Button
				onClick={scrollToShop}
				className='promo__arrow'>
				<svg xmlns="http://www.w3.org/2000/svg" width="67" height="68" viewBox="0 0 67 68" fill="none">
					<rect width="67" height="67" transform="translate(0 0.5)" fill="#6E9C9F" fillOpacity="0.1" />
					<path d="M33 20V48M33 48L26 40.8108M33 48L40 40.8108" stroke="#6E9C9F" />
				</svg>
			</Button>
			<Link
				to={'/shop'}
				className='button promo__button'>
				<span className='button__text'>Открыть магазин</span>
			</Link>
		</div>
	);
}
export default PromoController;