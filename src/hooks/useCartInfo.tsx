import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import {
  deleteCart,
  updateCart,
  updateDiscountedPrice,
} from "../state/cart/cartSlice"

export const useCartInfo = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.carts.cart)
  // console.log(cartItems);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  )
  const totalPrice = cartItems.reduce((total, item) => {
    const itemTotal = isNaN(item.quantity * (item.discord ?? item.price))
      ? 0
      : item.quantity * (item.discord ?? item.price)
    return total + itemTotal
  }, 0)
  const totalsSave =
    cartItems.find((item) => item.totalSave !== undefined)?.totalSave ?? 0

  const finalPrice = totalsSave ? totalsSave : totalPrice
  const updateQuantity = (key: string, newQuantity: number, itemId: number) => {
    dispatch(updateCart({ key, newQuantity, itemId }))
  }
  const deleteItemCart = (key: string) => {
    dispatch(deleteCart({ key }))
  }
  const updateTotalSave = (itemId: number, totalSave: number) => {
    dispatch(updateDiscountedPrice({ itemId, totalSave }))
  }

  return {
    finalPrice,
    totalPrice,
    totalQuantity,
    updateQuantity,
    deleteItemCart,
    updateTotalSave,
  }
}
