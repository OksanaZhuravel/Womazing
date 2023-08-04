import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../api/apiShop';

interface ProductProps {
	category: number;
	description: string;
	id: number;
	images: string[];
	price: number;
	title: string;
}
const HomeShop = () => {
	const diccort = 0.9
	const [products, setProducts] = useState<ProductProps[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const productAll = await api.getAll();
				console.log(productAll);
				setProducts(productAll);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);


	return (
		<section className='home-shop' id='shop'>
			<div className='home-shop__container'>
				<h2 className='home-shop__title'>Новая коллекция</h2>
				<div className='home-shop__inner'>
					{products.map((product) =>
						<article className='home-cart cart' key={product.id}>
							<div className='cart__inner'>
								<img
									// src='/assets/img/home/catalog1.png'
									src={product.images[0]}
									width={350}
									height={478}
									alt={product.title}
									className='cart__img'
								/>
								<Link to={`/product/${product.id}`} className='cart__link'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='32'
										height='24'
										viewBox='0 0 32 24'
										fill='none'>
										<path
											d='M0 12H31M31 12L20.186 1M31 12L20.186 23'
											stroke='white'
										/>
									</svg>
								</Link>
							</div>
							<div className='cart__boby'>
								<h2 className='cart__title'>{product.title}</h2>
								<div className='cart__prace'>
									<span className='cart__discort'>${product.price}</span>
									<span className='cart__number'>${(product.price * diccort).toFixed(2)}</span>
								</div>
							</div>
						</article>
					)
					}
				</div>
				<Link to={'/shop'} className='button button--outline'>
					<span className='button__text'>Открыть магазин</span>
				</Link>
			</div>
		</section>
	);
};
export default HomeShop;
