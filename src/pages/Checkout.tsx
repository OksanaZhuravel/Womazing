import { useEffect, useState } from 'react';
import Title from "../components/Title/Title";
import { useNavigate } from 'react-router-dom';
import { BuyerProps, FormBuyer } from '../types/types';
import { validateForm } from '../utils/validationUtils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useCartInfo } from '../hooks/useCartInfo';
import { validationRules } from '../utils/validationRules';
import BuyerForm from '../components/Cart/BuyerForm/BuyerForm';
import OrderSummary from '../components/Cart/OrderSummary/OrderSummary';
import { resetCart } from '../state/cart/cartSlice';

const Checkout: React.FC<BuyerProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formBuyer, setFormBuyer] = useState<FormBuyer>({
    name: '',
    email: '',
    phone: '',
    message: '',
    country: '',
    city: '',
    street: '',
    house: '',
    apartment: '',
    iscash: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    phone: '',
    message: '',
    country: '',
    city: '',
    street: '',
    house: '',
    apartment: '',
  });
  const [isFormSubmitted, setFormSubmitted] = useState(true);

  const addFormBuyer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formBuyer, validationRules);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setFormBuyer((prevForm) => {
        const newForm = { ...prevForm, id: Date.now(), cartItems: cartItems };
        setErrors({});
        console.log(newForm);
        setFormSubmitted(false);
        dispatch(resetCart());
        return newForm;
      });
    }
  }
  const cartItems = useSelector((state: RootState) => state.carts.cart)
  const { finalPrice } = useCartInfo();
  useEffect(() => {
    if (!isFormSubmitted) {
      navigate('/success');
    }
  }, [isFormSubmitted, navigate]);
  console.log(cartItems);
  return (
    <>
      <Title title='Оформление заказа' activeTitle='Оформление заказа' activeLink='/checkout' />
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
            isFormSubmitted={isFormSubmitted}
            addFormBuyer={addFormBuyer}
            formBuyer={formBuyer}
            setFormBuyer={setFormBuyer}
          />
        </div>
      </section>
    </>
  );
};
export default Checkout;
