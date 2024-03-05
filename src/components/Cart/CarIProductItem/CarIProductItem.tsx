import { Link } from "react-router-dom";
import CloseSvg from "../../Icon/CloseSvg";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { CartItemProps } from "../../../types/types";

const CarIProductItem: React.FC<CartItemProps> = ({ item, handleDeleteItem, handleQuantityChange }) => (
	<div className="product-cart__item">
		<Button onClick={() => handleDeleteItem(item.id)}>
			<CloseSvg />
		</Button>
		<Link to={`/product/${item.id}`} className="product-cart__link">
			{item.images && item.images.length > 0 && <img src={item.images[0]} alt={item.title} />}
			<p className="product-cart__text text">{item.title}</p>
		</Link>
		<p className="text">
			{item.diccort !== null && item.diccort !== undefined ? (
				<span>${item.diccort}</span>
			) : (
				<span>${item.price}</span>
			)}
		</p>
		<Input
			type="text"
			placeholder="1"
			className="product-cart__input text-big"
			value={isNaN(item.quantity) ? "" : item.quantity}
			onChange={(e) => handleQuantityChange(item.id, e)}
		/>
		<p className="text">
			${isNaN(item.quantity * (item.diccort ?? item.price)) ? 0 : item.quantity * (item.diccort ?? item.price)}
		</p>
	</div>
);
export default CarIProductItem;