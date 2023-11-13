import { Link } from 'react-router-dom';

import ProductPromo from '../../ProductPromo/ProductPromo';

const HomeShop = () => {
	return (
		<section className='home-shop' id='shop'>
			<ProductPromo
				subtitle='Новая коллекция'
				className='home-shop'
				limit={3}
			/>
			<Link to={'/shop'} className='button button--outline'>
				<span className='button__text'>Открыть магазин</span>
			</Link>
		</section>
	);
};
export default HomeShop;
