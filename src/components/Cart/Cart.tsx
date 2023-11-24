import { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const Cart = () => {
	const [coupon, setCoupon] = useState({ coupon: "" })
	const addCoupon = () => {
		console.log(coupon)
	}
	return (
		<section className="cart">
			<div className="cart__container">
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
						<p className="subtitle-h2">Ваша корзина пуста.</p>
						<Link to={'/shop'} className='link'>
							<span className='link__text subtitle'>Перейти в магазин</span>
						</Link>
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
							$<span>129</span>
						</p>
					</div>
					<div className="total__wrap">
						<div className="total__count">
							<p className="total__text subtitle-h3">Итого:</p>
							<p className="total__text subtitle-h3">
								$<span>129</span>
							</p>
						</div>

						<Link to={'/checkout'} className='button'>
							Оформить заказ
						</Link>

					</div>
				</div>

			</div>
		</section>
	);
}
export default Cart;