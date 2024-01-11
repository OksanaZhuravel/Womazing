import { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { useCartInfo } from "../../hooks/useCartInfo";
import CloseSvg from "../Icon/CloseSvg";


const Cart = () => {
	const cartItems = useSelector((state: RootState) => state.carts.cart)
	// console.log(cartItems);

	const [coupon, setCoupon] = useState({ coupon: "" })
	const addCoupon = () => {
		console.log(coupon)
	}
	const { totalPrice, updateQuantity, deleteItemCart } = useCartInfo();

	const handleQuantityChange = (itemId: number, e: React.ChangeEvent<HTMLInputElement>) => {
		const newQuantity = parseInt(e.target.value, 10);
		updateQuantity(itemId, newQuantity);
	};
	const handleDeleteItem = (itemId: number) => {
		deleteItemCart(itemId);
	};


	return (
		<section className="cart">
			<div className="cart__container">
				{
					cartItems.length > 0 ? (
						<>
							<div className="cart__subtitle subtitle-cart">
								<ul className="subtitle-cart__list">
									<li className="subtitle-cart__item">
										<p className="subtitle-cart__text subtitle-h4">Товар</p>
									</li>
									<li className="subtitle-cart__item">
										<p className="subtitle-cart__text subtitle-h4">Цена</p>
									</li>
									<li className="subtitle-cart__item">
										<p className="subtitle-cart__text subtitle-h4">Количество</p>
									</li>
									<li className="subtitle-cart__item">
										<p className="subtitle-cart__text subtitle-h4">Всего</p>
									</li>
								</ul>
							</div>
							<div className="cart__product product-cart">
								<div className="product-cart__inner">
									{cartItems.map(item => (
										<div key={item.id} className="product-cart__item">
											<Button className="button__svg" onClick={() => handleDeleteItem(item.id)}>
												<CloseSvg />
											</Button>
											{item.images && item.images.length > 0 && (
												<img src={item.images[0]} alt={item.title} />
											)}
											<p>{item.title}</p>
											<p>${item.price}</p>
											<Input
												type='number'
												placeholder='1'
												className='quantity__input text-big'
												value={isNaN(item.quantity) ? '' : item.quantity}
												onChange={(e) => handleQuantityChange(item.id, e)}
											/>
											<p>${isNaN(item.quantity * item.price) ? 0 : item.quantity * item.price}</p>
											{/* <p>{item.quantity}</p> */}
											{/* <p>${totalPrice * totalQuantity}</p> */}
										</div>
									))}
								</div>
							</div>
							<div className="cart__control">
								<div className="cart__form">
									<Input
										type="text"
										placeholder="Введите купон"
										className="form__input"
										value={coupon.coupon}
										onChange={(e) =>
											setCoupon({ ...coupon, coupon: e.target.value })
										}
									/>
									<Button
										className="button button--outline"
										children="Применить купон"
										onClick={addCoupon}
									/>
								</div>
								<Button
									className="button button--outline"
									children="Обновить корзину"
									onClick={() => console.log("Обновить корзину")}
								/>
							</div>
							<div className="cart__total total">
								<div className="total__subtotal">
									<p className="total__text text">Подытог:</p>
									<p className="total__text text">
										${isNaN(totalPrice) ? 0 : totalPrice}
									</p>
								</div>
								<div className="total__wrap">
									<div className="total__count">
										<p className="total__text subtitle-h3">Итого:</p>
										<p className="total__text subtitle-h3">
											${isNaN(totalPrice) ? 0 : totalPrice}
										</p>
									</div>
									<Link to={'/checkout'} className='button'>
										Оформить заказ
									</Link>
								</div>
							</div>
						</>
					) : (
						<>
							<div className="cart__product">
								<div className="cart__inner">
									<p className="subtitle-h2">Ваша корзина пуста.</p>
									<Link to={'/shop'} className=' button'>
										<span className='button__text subtitle'>Перейти в магазин</span>
									</Link>
								</div>
							</div>
						</>)
				}
			</div>
		</section>
	);
}
export default Cart;