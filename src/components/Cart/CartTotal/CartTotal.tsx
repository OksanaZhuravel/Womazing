import { Link } from "react-router-dom";
import { CartTotalProps } from "../../../types/types";


const CartTotal: React.FC<CartTotalProps> = ({ couponApplied, discountedPriceNumber, totalPrice }) => (
	<div className="cart__total total">
		<div className="total__subtotal">
			<p className="total__text text">Подытог:</p>
			<p className="total__text text">
				${couponApplied
					? isNaN(discountedPriceNumber ?? 0)
						? 0
						: discountedPriceNumber
					: isNaN(totalPrice)
						? 0
						: totalPrice}
			</p>
		</div>
		<div className="total__wrap">
			<div className="total__count">
				<p className="total__text subtitle-h3">Итого:</p>
				<p className="total__text subtitle-h3">
					${couponApplied
						? isNaN(discountedPriceNumber ?? 0)
							? 0
							: discountedPriceNumber
						: isNaN(totalPrice)
							? 0
							: totalPrice}
				</p>
			</div>
			<Link to={"/checkout"} className="button">
				Оформить заказ
			</Link>
		</div>
	</div>
);
export default CartTotal;