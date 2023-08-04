import { Link } from 'react-router-dom';

const HomeShop = () => {
	return (
		<section className='home-shop' id='shop'>
			<div className='home-shop__container'>
				<h2 className='home-shop__title'>Новая коллекция</h2>
				<div className="home-shop__inner">
					<article className='home-cart cart'>
						<img
							src='/assets/img/home/catalog1.png'
							alt='Футболка USA'
							className='cart__img'
						/>
						<div className="cart__boby">
							<h2 className='cart__title'>Футболка USA</h2>
							<div className='cart__prace'>
								<span className='cart__discort'>$229</span>
								<span className='cart__number'>$129</span>
							</div>
						</div>
						<Link to={`/product/`} className='cart__link'>
							<svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24" fill="none">
								<path d="M0 12H31M31 12L20.186 1M31 12L20.186 23" stroke="white" />
							</svg>
						</Link>
					</article>
				</div>
				<Link to={'/shop'} className='button button--outline'>
					<span className='button__text'>Открыть магазин</span>
				</Link>
			</div>
		</section>
	);
};
export default HomeShop;
