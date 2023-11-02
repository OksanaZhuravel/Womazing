import Input from "../UI/Input/Input";

interface ProductItem {

	item: {
		category: {
			id: number;
			name: string;
		};
		description: string;
		id: number;
		images: string[];
		price: number;
		title: string;
	}

}
const ProductItem = ({ item }: ProductItem) => {
	const diccort = 0.9

	return (

		<div className="product__wrap">
			<img
				src={item.images[0]}
				className='product__img'
				alt={item.title}
			/>
			<div className="product__boby">
				<div className='product__prace'>
					<span className='product__number'>${(item.price * diccort).toFixed(2)}</span>
					<span className='product__discort'>${item.price}</span>
				</div>
				<div className="product__size size">
					Выберите размер
					<div className="size__options">
						<div className="size__item">
							<Input className="size__input" type="radio" value="S" id="o_1" />
							<label htmlFor="o_1" className="size__label"><span className="size__text">S</span></label>
						</div>
						<div className="size__item">
							<Input className="size__input" type="radio" value="S" id="o_2" />
							<label htmlFor="o_2" className="size__label"><span className="size__text">M</span></label>
						</div>

					</div>
				</div>
			</div>
		</div>

	);
}
export default ProductItem;