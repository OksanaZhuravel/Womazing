import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../../Icon/Arrow";
import { RangeProps } from "../../../types/types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../state/store";
import { fetchProductsAll } from "../../../state/product/productSlice";
import Pagination from "../../UI/Pagination/Pagination";
import { defaultProducts } from "../../../api/defolt";

const ShopProducts = ({ currentRange }: RangeProps) => {
	const [pageSize, setPageSize] = useState(3);

	const [currentPage, setCurrentPage] = useState(1);

	const products = useSelector((state: RootState) => {
		return state.products.item || defaultProducts;
	});

	const sortedArray = products.filter(product => {
		if (currentRange === "Все") {
			return true;
		} else {
			return product.categories.includes(currentRange);
		}
	});

	const startIndex = (currentPage - 1) * pageSize;

	const endIndex = startIndex + pageSize;

	const maxPage = Math.ceil(sortedArray.length / pageSize);

	const currentProducts = sortedArray.slice(startIndex, endIndex);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(fetchProductsAll()).catch((error) => {
			console.error("Error fetching products:", error);
		});
	}, [dispatch]);

	useEffect(() => {
		const updatePageSize = () => {
			if (window.innerWidth <= 767.98) {
				setPageSize(1);
			} else if (window.innerWidth <= 1126.98) {
				setPageSize(2);
			} else {
				setPageSize(3);
			}
			setCurrentPage(1);
		};
		updatePageSize();
		window.addEventListener("resize", updatePageSize);
		return () => {
			window.removeEventListener("resize", updatePageSize);
		};
	}, []);

	useEffect(() => {
		setCurrentPage(1);
	}, [currentRange]);

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
										<div className="card__prace">
											{product.diccort !== null ? (
												<>
													<span>${product.diccort}</span>
													<span className="card__discort">${product.price}</span>
												</>
											) : (
												<span>${product.price}</span>
											)}
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
