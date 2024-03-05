import { CartListProps } from "../../../types/types";
import CarIProductItem from "../CarIProductItem/CarIProductItem"

const CartList: React.FC<CartListProps> = ({ cartItems, handleDeleteItem, handleQuantityChange }) => (
	<div className="product-cart__inner">
		{cartItems.map((item) => (
			<CarIProductItem
				key={item.id}
				item={item}
				handleDeleteItem={handleDeleteItem}
				handleQuantityChange={handleQuantityChange}
			/>
		))}
	</div>
);
export default CartList;