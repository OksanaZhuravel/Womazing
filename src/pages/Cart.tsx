import { useSelector } from "react-redux"
import { RootState } from "../state/store"
import { useEffect, useState } from "react"
import { CouponsData } from "../types/types"
import { useCartInfo } from "../hooks/useCartInfo"
import api from "../api/apiShop"
import Title from "../components/Title/Title"
import { Link } from "react-router-dom"
import CartTotal from "../components/Cart/CartTotal/CartTotal"
import CartControls from "../components/Cart/CartControls/CartControls"
import CartList from "../components/Cart/CartList/CartList"

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.carts.cart)
  const [coupons, setCoupons] = useState<CouponsData[]>([])
  const [coupon, setCoupon] = useState<string>("")
  const [couponValid, setCouponValid] = useState<boolean | null>(null)
  const [couponApplied, setCouponApplied] = useState<boolean>(false)
  const { totalPrice, updateQuantity, deleteItemCart, updateTotalSave } =
    useCartInfo()
  const [discountedPriceNumber, setDiscountedPriceNumber] = useState<
    number | null
  >(null)
  // console.log(cartItems);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const couponResponse = await api.getCoupons()
        setCoupons(couponResponse)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const addCoupon = () => {
    if (couponApplied) {
      return
    }
    const couponData = coupons.find((c) => c.item === coupon)
    if (couponData) {
      const discountedPrice = (
        totalPrice *
        (1 - couponData.sale / 100)
      ).toFixed(0)
      const totalSave = parseInt(discountedPrice, 10)
      setDiscountedPriceNumber(totalSave)
      setCouponApplied(true)
      setCouponValid(true)
      cartItems
        .map((item) => item.id)
        .forEach((itemId) => {
          updateTotalSave(itemId, totalSave)
        })
    } else {
      setCouponValid(false)
      setDiscountedPriceNumber(null)
    }
  }

  const handleUpdateCart = () => {
    setCoupon("")
    setCouponValid(null)
    setCouponApplied(false)
    cartItems
      .map((item) => item.id)
      .forEach((itemId) => {
        updateTotalSave(itemId, 0)
      })
  }

  const handleQuantityChange = (
    itemId: number,
    key: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const newQuantity = parseInt(e.target.value, 10)
    updateQuantity(key, newQuantity, itemId)
    handleUpdateCart()
  }

  const handleDeleteItem = (key: string) => {
    deleteItemCart(key)
  }
  // console.log(cartItems);
  return (
    <>
      <Title title="Корзина" activeTitle="Корзина" activeLink="/cart" />
      <section className="cart">
        <div className="cart__container">
          {cartItems.length > 0 ? (
            <>
              <CartList
                cartItems={cartItems}
                handleDeleteItem={handleDeleteItem}
                handleQuantityChange={handleQuantityChange}
              />
              <CartControls
                couponApplied={couponApplied}
                coupon={coupon}
                setCoupon={setCoupon}
                couponValid={couponValid}
                setCouponValid={setCouponValid}
                addCoupon={addCoupon}
                handleUpdateCart={handleUpdateCart}
              />
              <CartTotal
                couponApplied={couponApplied}
                discountedPriceNumber={discountedPriceNumber}
                totalPrice={totalPrice}
              />
            </>
          ) : (
            <div className="cart__product">
              <div className="cart__inner">
                <p className="subtitle-h2">Ваша корзина пуста.</p>
                <Link to={"/shop"} className=" button">
                  <span className="button__text subtitle">
                    Перейти в магазин
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Cart
