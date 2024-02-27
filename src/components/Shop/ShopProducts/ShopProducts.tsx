import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../Icon/Arrow";
import { ProductProps, RangeProps } from "../../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state/store";
import { fetchProductsAll } from "../../../state/product/productSlice";
import { ranges } from "../../../utils/productUtils";
import Pagination from "../../UI/Pagination/Pagination";


const ShopProducts = ({ currentRange }: RangeProps) => {
	const diccort = 0.9
	const pageSize = 9;
	const [currentPage, setCurrentPage] = useState(1);
	const products = useSelector((state: RootState) => state.products.item as ProductProps[]);
	// console.log(products);

	const startIndex = (currentPage - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const sortedArray = useMemo(() => ranges[currentRange]?.(products) || products, [currentRange, products]);
	const maxPage = Math.ceil(sortedArray.length / pageSize)
	const currentProducts = sortedArray.slice(startIndex, endIndex);
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchProductsAll()).catch((error) => {
			console.error("Error fetching products:", error);
		});
	}, [dispatch]);

	return (
		<section className='shop' id='shop'>
			<div className='shop__container'>
				<div className="shop__pagination text">
					{sortedArray.length < pageSize
						? `Показано: ${sortedArray.length} из ${sortedArray.length} товаров`
						: `Показано: ${pageSize} из ${sortedArray.length} товаров`}
				</div>
				{sortedArray.length <= 0
					? <div className='shop__inner inner'><p className="subtitle-h2">По вашему запросу нет товаров</p></div>
					: <>
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
						<Pagination currentPage={currentPage} maxPage={maxPage} setCurrentPage={setCurrentPage} />
					</>
				}
			</div>
		</section>
	);
};
export default ShopProducts;