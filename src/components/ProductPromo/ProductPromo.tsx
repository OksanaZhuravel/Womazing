import { useEffect } from "react"
import { Link } from "react-router-dom"
import Arrow from "../Icon/Arrow"
import { ProductPromoProps, ProductProps } from "../../types/types"
import { AppDispatch, RootState } from "../../state/store"
import { useDispatch, useSelector } from "react-redux"
import { fetchProductsAll } from "../../state/product/productSlice"
import { defaultProducts } from "../../api/defolt"
import Loading from "../UI/Loading/Loading"
import { shuffle } from "../../utils/shuffle"

const ProductPromo = ({ subtitle, className, limit }: ProductPromoProps) => {
	const products = useSelector(
		(state: RootState) => state.products.item as ProductProps[],
	)
	// console.log(products);

	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(fetchProductsAll())
	}, [dispatch])

	if (!Array.isArray(products)) {
		return <Loading />;
	}
	const newsProducts = shuffle(products.filter((product) => product.news));
	const remainingProducts = shuffle(products.filter((product) => !product.news));
	let currentProducts = newsProducts.slice(0, limit);
	if (currentProducts.length < limit) {
		const remainingCount = limit - currentProducts.length;
		currentProducts = [
			...currentProducts,
			...remainingProducts.slice(0, remainingCount),
		];
	}
	return (
		<div className={`${className}`}>
			<h2 className="subtitle-h2">{subtitle}</h2>
			<div className={`inner ${className}__inner`}>
				{currentProducts && currentProducts.length > 0
					? currentProducts.map((product) => (
						<article className={`${className} card`} key={product.id}>
							<div className="card__inner">
								{product.images.length > 0 && (
									<img
										className="card__img"
										src={product.images[0]}
										alt={product.title}
										width={350}
										height={478}
									/>
								)}

								<Link to={`/product/${product.id}`} className="card__link">
									<Arrow />
								</Link>
							</div>
							<div className="card__boby">
								<h3 className="card__title">{product.title}</h3>
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
					))
					: defaultProducts.map((product) => (
						<article className={`${className} card`} key={product.id}>
							<div className="card__inner">
								{product.images.length > 0 && (
									<img
										className="card__img"
										src={product.images[0]}
										alt={product.title}
										width={350}
										height={478}
									/>
								)}

								<Link to={`/product/${product.id}`} className="card__link">
									<Arrow />
								</Link>
							</div>
							<div className="card__boby">
								<h3 className="card__title">{product.title}</h3>
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
		</div>
	)
}
export default ProductPromo

