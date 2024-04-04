import { CartListProps } from "../../../types/types"
import CarIProductItem from "../CarIProductItem/CarIProductItem"

const CartList: React.FC<CartListProps> = ({
  cartItems,
  handleDeleteItem,
  handleQuantityChange,
}) => (
  <div className="product-cart__inner">
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
    {cartItems.map((item) => (
      <CarIProductItem
        key={item.key}
        cartItems={cartItems}
        item={item}
        handleDeleteItem={handleDeleteItem}
        handleQuantityChange={handleQuantityChange}
      />
    ))}
  </div>
)
export default CartList
