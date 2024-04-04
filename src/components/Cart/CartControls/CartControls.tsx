import { CartControlsProps } from "../../../types/types"
import Button from "../../UI/Button/Button"
import Input from "../../UI/Input/Input"

const CartControls: React.FC<CartControlsProps> = ({
  couponApplied,
  coupon,
  setCoupon,
  couponValid,
  setCouponValid,
  addCoupon,
  handleUpdateCart,
}) => (
  <div className="cart__control">
    <div className="cart__form">
      <Input
        type="text"
        placeholder="Введите купон"
        className="form__input"
        value={coupon}
        onChange={(e) => {
          setCoupon(e.target.value)
          setCouponValid(null)
        }}
      />
      {couponValid === false && !couponApplied && (
        <span className="error-message">Неверный код купона.</span>
      )}
      {couponApplied && (
        <span className="error-message error-message__color">
          Купон уже применен.
        </span>
      )}
      <Button
        className="button button--outline"
        children="Применить купон"
        onClick={addCoupon}
      />
    </div>
    <Button
      className="button button--outline"
      children="Обновить корзину"
      onClick={handleUpdateCart}
    />
  </div>
)
export default CartControls
