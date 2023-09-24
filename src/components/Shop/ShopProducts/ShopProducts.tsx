import { useEffect, useState } from "react";
import api from "../../../api/apiShop";
import { Link } from "react-router-dom";
import Arrow from "../../Icon/Arrow";

interface ProductProps {
	category: string;
	description: string;
	id: number;
	images: string[];
	price: number;
	title: string;
}
const ShopProducts = () => {
	const diccort = 0.9
	const pageSize = 9;
	const [products, setProducts] = useState<ProductProps[]>([]);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const offset = (currentPage - 1) * pageSize;
				const productAll = await api.getAll(offset, pageSize);
				// console.log(productAll);

				setProducts(productAll);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [currentPage]);
	return (
		<section className='shop' id='shop'>
			<div className='shop__container'>
				<div className='shop__inner inner'>
					{products.map((product) => (
						<article className='home-cart cart' key={product.id}>
							<div className='cart__inner'>
								<img
									src={product.images[0]}
									width={350}
									height={478}
									alt={product.title}
									className='cart__img'
								/>
								<Link to={`/product/${product.id}`} className='cart__link'>
									<Arrow />
								</Link>
							</div>
							<div className='cart__boby'>
								<h3 className='cart__title'>{product.title}</h3>
								<div className='cart__prace'>
									<span className='cart__discort'>${product.price}</span>
									<span className='cart__number'>${(product.price * diccort).toFixed(2)}</span>
								</div>
							</div>
						</article>
					))}
				</div>
				<div className='pagination'>
					<button
						onClick={() => {
							if (currentPage > 1) {
								setCurrentPage(currentPage - 1);
							}
						}}
						disabled={currentPage === 1}
					>
						Предыдущая
					</button>
					<button
						onClick={() => {
							setCurrentPage(currentPage + 1);
						}}
					>
						Следующая
					</button>
				</div>
			</div>
		</section>
	);
};
export default ShopProducts;