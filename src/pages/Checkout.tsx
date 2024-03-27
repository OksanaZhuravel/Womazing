import { useEffect, useState } from "react"
import Title from "../components/Title/Title"
import { useNavigate } from "react-router-dom"
import { BuyerProps, CartItem, FormBuyer } from "../types/types"
import { validateForm } from "../utils/validationUtils"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { useCartInfo } from "../hooks/useCartInfo"
import { validationRules } from "../utils/validationRules"
import BuyerForm from "../components/Cart/BuyerForm/BuyerForm"
import OrderSummary from "../components/Cart/OrderSummary/OrderSummary"
import { resetCart } from "../state/cart/cartSlice"
import api from "../api/apiShop"

// const Checkout: React.FC<BuyerProps> = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [formBuyer, setFormBuyer] = useState<FormBuyer>({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     country: '',
//     city: '',
//     street: '',
//     house: '',
//     apartment: '',
//     iscash: false,
//   });
//   const [errors, setErrors] = useState<{ [key: string]: string }>({
//     name: '',
//     email: '',
//     phone: '',
//     message: '',
//     country: '',
//     city: '',
//     street: '',
//     house: '',
//     apartment: '',
//   });
//   const [isFormSubmited, setFormSubmited] = useState(true);

//   const addFormBuyer = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formBuyer, validationRules);

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       setFormBuyer((prevForm) => {
//         const newForm = { ...prevForm, id: Date.now(), cartItems: cartItems };
//         setErrors({});
//         console.log(newForm);
//         setFormSubmited(false);
//         dispatch(resetCart());
//         setFormBuyer(newForm);
//         return newForm;
//       });
//     }
//   }
//   const cartItems = useSelector((state: RootState) => state.carts.cart)
//   const { finalPrice } = useCartInfo();
//   useEffect(() => {
//     if (!isFormSubmited) {
//       navigate('/success');
//     }
//   }, [isFormSubmited, navigate]);
//   console.log(cartItems);
//   return (
//     <>
//       <Title title='Оформление заказа' activeTitle='Оформление заказа' activeLink='/checkout' />
//       <section className="buyer">
//         <div className="buyer__form">
//           <BuyerForm
//             formBuyer={formBuyer}
//             setFormBuyer={setFormBuyer}
//             errors={errors}
//           />
//           <OrderSummary
//             cartItems={cartItems}
//             finalPrice={finalPrice}
//             isFormSubmited={isFormSubmited}
//             addFormBuyer={addFormBuyer}
//             formBuyer={formBuyer}
//             setFormBuyer={setFormBuyer}
//           />
//         </div>
//       </section>
//     </>
//   );
// };
// export default Checkout;

const Checkout: React.FC<BuyerProps> = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formBuyer, setFormBuyer] = useState<FormBuyer>({
    name: "",
    email: "",
    phone: "",
    message: "",
    country: "",
    city: "",
    street: "",
    house: "",
    apartment: "",
    iscash: false,
  })
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    phone: "",
    message: "",
    country: "",
    city: "",
    street: "",
    house: "",
    apartment: "",
  })
  const [isFormSubmited, setFormSubmited] = useState(true)

  const addFormBuyer = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formBuyer, validationRules);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const cartItemsInfo = cartItems
        .map((item: CartItem) => {
          let totalSaveCell = 'N/A';
          if (item.totalSave) {
            totalSaveCell = `<td>${item.totalSave}</td>`;
          }
          let diccortCell = 'N/A';
          if (item.diccort) {
            diccortCell = `<td>${item.diccort}</td>`;
          }
          return `
      <tr>
        <td><strong>${item.title}</strong></td>
        <td>${item.selectedSize}</td>
        <td>${item.selectedColor}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
        ${diccortCell}
        ${totalSaveCell}
         <td><h3>${finalPrice}</h3></td>
      </tr>
    `;
        })
        .join("");
      const table = `
    <table style="border-collapse: collapse; width: 100%;">
      <thead>
        <tr style="width: 100%; border: 1px solid #342464;">
          <th>Название</th>
          <th>Размер</th>
          <th>Цвет</th>
          <th>Количество</th>
          <th>Цена без скидок</th>
          <th>Цена со скидкой</th>
          <th>С купоном (общ.)</th>
          <th>ОБЩИЙ ИТОГ</th>
        </tr>
      </thead>
      <tbody style="width: 100%; border: 1px solid #342464;">
        ${cartItemsInfo}
      </tbody>
    </table>
  `;
      const newForm = { ...formBuyer, id: Date.now(), cartItems: table };
      setErrors({});
      // console.log(newForm);
      setFormSubmited(false);
      dispatch(resetCart());
      const response = await api.postOrders(newForm, table);
      if (response) {
        // setFormSubmited(true);
        console.log("Email sent successfully!");
      } else {
        // setFormSubmited(false);
        console.log("Message sending failed");
      }
    }
  };

  const cartItems = useSelector((state: RootState) => state.carts.cart)
  const { finalPrice } = useCartInfo()

  useEffect(() => {
    if (!isFormSubmited) {
      navigate("/success")
    }
  }, [isFormSubmited, navigate])

  // console.log(cartItems);

  return (
    <>
      <Title
        title="Оформление заказа"
        activeTitle="Оформление заказа"
        activeLink="/checkout"
      />
      <section className="buyer">
        <div className="buyer__form">
          <BuyerForm
            formBuyer={formBuyer}
            setFormBuyer={setFormBuyer}
            errors={errors}
          />
          <OrderSummary
            cartItems={cartItems}
            finalPrice={finalPrice}
            isFormSubmited={isFormSubmited}
            addFormBuyer={addFormBuyer}
            formBuyer={formBuyer}
            setFormBuyer={setFormBuyer}
          />
        </div>
      </section>
    </>
  )
}

export default Checkout
