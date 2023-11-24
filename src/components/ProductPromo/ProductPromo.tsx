import { useEffect, useState } from 'react';
import api from '../../api/apiShop';
import { Link } from 'react-router-dom';
import Arrow from '../Icon/Arrow';
import { ProductPromoProps, ProductProps } from '../../types/types';


const ProductPromo = ({ subtitle, className, limit }: ProductPromoProps) => {
	const diccort = 0.9;
	const [products, setProducts] = useState<ProductProps[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const productAll = await api.getPromo(limit);
				setProducts(productAll);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);
	return (
		<div className={`${className}__container`}>
			<h2 className='subtitle-h2'>{subtitle}</h2>
			<div className={`inner ${className}__inner`}>
				{products.map((product) => (
					<article className={`${className} card`} key={product.id}>
						<div className='card__inner'>
							<img
								// src='/assets/img/home/catalog1.png'
								src={product.images[0]}
								width={350}
								height={478}
								alt={product.title}
								className='card__img'
							/>
							<Link to={`/product/${product.id}`} className='card__link'>
								<Arrow />
							</Link>
						</div>
						<div className='card__boby'>
							<h3 className='card__title'>{product.title}</h3>
							<div className='card__prace'>
								<span className='card__discort'>${product.price}</span>
								<span className='card__number'>
									${(product.price * diccort).toFixed(2)}
								</span>
							</div>
						</div>
					</article>
				))}
			</div>
		</div>
	);
};
export default ProductPromo;
