import { Link } from "react-router-dom"
import { CartItem, FormBuyer } from "../../../types/types"
import Button from "../../UI/Button/Button"
import Input from "../../UI/Input/Input"
interface OrderSummaryProps {
  cartItems: CartItem[]
  finalPrice: number
  isFormSubmittedOrder: boolean
  addFormBuyer: (e: React.MouseEvent<HTMLButtonElement>) => void
  formBuyer: FormBuyer
  setFormBuyer: React.Dispatch<React.SetStateAction<FormBuyer>>
}
const OrderSummary: React.FC<OrderSummaryProps> = ({
  cartItems,
  finalPrice,
  isFormSubmittedOrder,
  addFormBuyer,
  formBuyer,
  setFormBuyer,
}) => {
  if (cartItems.length < 1) {
    return (
      <div className="buyer__right">
        <div className="buyer__inner">
          <p className="buyer__title subtitle-h3">
            Невозможно отправить заказ!
          </p>
          <p className="buyer__title subtitle-h3">Корзина пуста.</p>
          <Link to={"/shop"} className=" button">
            <span className="button__text ">Перейти в магазин</span>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="buyer__right">
      <div className="buyer__inner">
        <h2 className="buyer__title subtitle-h3">Ваш заказ</h2>
        <div className="buyer-cart">
          <div className="buyer-cart__inner">
            <p className="buyer-cart__text subtitle-h4">Товар</p>
            <p className="buyer-cart__text subtitle-h4">Всего</p>
          </div>
          <ul className="buyer-cart__list">
            {cartItems.map((item) => (
              <li key={item.key} className="buyer-cart__item">
                <p className="buyer-cart__text text">{item.title}</p>
                {item.discord !== null && item.discord !== undefined ? (
                  <p className="buyer-cart__text text">${item.discord}</p>
                ) : (
                  <p className="buyer-cart__text text">${item.price}</p>
                )}
              </li>
            ))}
          </ul>
          <div className="buyer-cart__subtotal">
            <p className="buyer-cart__text text">Подытог</p>
            <p className="buyer-cart__text text">
              ${isNaN(finalPrice) ? 0 : finalPrice}
            </p>
          </div>
          <div className="buyer-cart__total">
            <p className="buyer-cart__text subtitle-h4">Итого</p>
            <p className="buyer-cart__text text">
              ${isNaN(finalPrice) ? 0 : finalPrice}
            </p>
          </div>
        </div>
      </div>
      <div className="buyer__inner buyer__inner--gap">
        <h2 className="buyer__title subtitle-h3">Способы оплаты</h2>
        <div className="buyer__checkbox checkbox">
          <Input
            id="checkbox"
            type="checkbox"
            name="isCash"
            className="checkbox__input"
            checked={formBuyer.isCash}
            onChange={() =>
              setFormBuyer({ ...formBuyer, isCash: !formBuyer.isCash })
            }
          />
          <label htmlFor="checkbox" className="text checkbox__label">
            <span>Оплата наличными</span>
          </label>
        </div>
        <Button
          onClick={addFormBuyer}
          className={`button ${isFormSubmittedOrder ? "" : "disabled"}`}
        >
          <span className="button__text">Разместить заказ</span>
        </Button>
      </div>
    </div>
  )
}
export default OrderSummary
