import { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../Icon/Arrow";
import { ProductProps } from "../../../types/types";
import { useSelector } from "react-redux";
import { RootState } from "../../../state/store";


const ShopProducts = () => {
	const diccort = 0.9
	const pageSize = 9;
	const [currentPage, setCurrentPage] = useState(1);
	const products = useSelector((state: RootState) => state.products.item as ProductProps[]);
	const maxPage = Math.ceil(products.length / pageSize)
	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const currentProducts = products.slice(startIndex, endIndex);
	// console.log(products);
	return (
		<section className='shop' id='shop'>
			<div className='shop__container'>
				<div className="shop__pagination text">Показано: <span>{pageSize}</span> из <span>{products.length}</span> товаров</div>
				<div className='shop__inner inner'>
					{currentProducts.map((product) => (
						<article className='home-card card' key={product.id}>
							<div className='card__inner'>
								<img
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
									<span className='card__number'>${(product.price * diccort).toFixed(2)}</span>
								</div>
							</div>
						</article>
					))}
				</div>
				<div className="pagination">
					<button className="pagination__page"
						onClick={() => {
							if (currentPage > 1) {
								setCurrentPage(currentPage - 1);
							}
						}}
						disabled={currentPage === 1}
					>
						{currentPage}
					</button>
					{currentPage < maxPage && (
						<button className="pagination__next"
							onClick={() => {
								setCurrentPage(currentPage + 1);
							}}
						>
							{currentPage + 1}
						</button>
					)}
					{currentPage < maxPage && (
						<button className="pagination__arrow"
							onClick={() => {
								setCurrentPage(currentPage + 1);
							}}
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="21" height="11" viewBox="0 0 21 11" fill="none">
								<path d="M-2.18557e-07 5.5L20 5.5M20 5.5L14.8649 10.5M20 5.5L14.8649 0.499999" stroke="black" />
							</svg>
						</button>
					)}
				</div>

			</div>
		</section>
	);
};
export default ShopProducts;