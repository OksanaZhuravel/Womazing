import { Link } from "react-router-dom"
import CloseSvg from "../../Icon/CloseSvg"
import Button from "../../UI/Button/Button"
import Input from "../../UI/Input/Input"
import { CartItem, CartItemProps } from "../../../types/types"

const CarIProductItem: React.FC<CartItemProps & { cartItems: CartItem[] }> = ({
  item,
  cartItems,
  handleDeleteItem,
  handleQuantityChange,
}) => {
  const hasDifferentProperties = cartItems.some((cartItem) => {
    return (
      cartItem.id === item.id &&
      (cartItem.selectedSize !== item.selectedSize ||
        cartItem.selectedColor !== item.selectedColor ||
        cartItem.quantity !== item.quantity)
    )
  })
  // console.log(item);

  return (
    <div className="product-cart__item">
      <Button onClick={() => handleDeleteItem(item.key)}>
        <CloseSvg />
      </Button>
      <Link to={`/product/${item.id}`} className="product-cart__link">
        {item.images && item.images.length > 0 && (
          <img src={item.images[0]} alt={item.title} />
        )}
        <div className="product-cart__wrap">
          <p className="product-cart__text text">{item.title}</p>
          {hasDifferentProperties && (
            <>
              <span className="text-small">
                {`цвет: `}
                <strong>{item.selectedColor}</strong>
              </span>
              <span className="text-small">
                {`размер: `}
                <strong>{item.selectedSize}</strong>
              </span>
            </>
          )}
        </div>
      </Link>
      <p className="product-cart__amount text">
        {item.discord !== null && item.discord !== undefined ? (
          <span>${item.discord}</span>
        ) : (
          <span>${item.price}</span>
        )}
      </p>
      <Input
        type="text"
        placeholder="1"
        className="product-cart__input text-big"
        value={isNaN(item.quantity) ? "" : item.quantity}
        onChange={(e) => handleQuantityChange(item.id, item.key, e)}
      />
      <p className="text">
        $
        {isNaN(item.quantity * (item.discord ?? item.price))
          ? 0
          : item.quantity * (item.discord ?? item.price)}
      </p>
    </div>
  )
}
export default CarIProductItem
