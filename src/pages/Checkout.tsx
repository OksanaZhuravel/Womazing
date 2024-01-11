import { useEffect, useState } from 'react';
import Title from "../components/Title/Title";
import { useNavigate } from 'react-router-dom';
import { BuyerProps, FormBuyer } from '../types/types';
import Input from '../components/UI/Input/Input';
import Button from '../components/UI/Button/Button';
import { validateForm } from '../utils/validationUtils';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useCartInfo } from '../hooks/useCartInfo';

const Checkout: React.FC<BuyerProps> = () => {
  const navigate = useNavigate();
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

    const validationRules: Array<{ fields: Array<string>; condition: (value: string) => boolean; errorMessage: string }> = [
      { fields: ['name'], condition: (value) => value.trim() !== '', errorMessage: 'Введите Имя' },
      { fields: ['email'], condition: (value) => value.trim() !== '', errorMessage: 'Введите Email' },
      { fields: ['phone'], condition: (value) => /^\+?[0-9]+$/.test(value), errorMessage: 'Только + и цифры для номера телефона' },
      { fields: ['country'], condition: (value) => value.trim() !== '', errorMessage: 'Введите страну' },
      { fields: ['city'], condition: (value) => value.trim() !== '', errorMessage: 'Введите город' },
      { fields: ['street'], condition: (value) => value.trim() !== '', errorMessage: 'Введите улицу' },
      { fields: ['house'], condition: (value) => value.trim() !== '', errorMessage: 'Введите номер дома' },
      { fields: ['apartment'], condition: (value) => value.trim() !== '', errorMessage: 'Введите номер квартиры' },
    ];


    const validationErrors = validateForm(formBuyer, validationRules);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setFormBuyer((prevForm) => {
        const newForm = { ...prevForm, id: Date.now() };
        setErrors({});
        console.log(newForm);
        setFormSubmitted(false);
        return newForm;
      });
    }
  }
  const cartItems = useSelector((state: RootState) => state.carts.cart)
  const { totalPrice } = useCartInfo();
  useEffect(() => {
    if (!isFormSubmitted) {
      navigate('/success');
    }
  }, [isFormSubmitted, navigate]);

  return (
    <>
      <Title title='Оформление заказа' activeTitle='Оформление заказа' activeLink='/checkout' />
      <section className="buyer">
        <div className="buyer__container">
          < form className='form buyer__form'>
            <div className="buyer__left">
              <div className="buyer__inner">
                <h2 className='buyer__title subtitle-h3'>Данные покупателя</h2>
                <Input
                  type='text'
                  placeholder='Имя'
                  className='form__input'
                  value={formBuyer.name}
                  onChange={(e) => setFormBuyer((prevForm) => ({ ...prevForm, name: e.target.value }))}
                />
                {errors.name && <span className='error-message'>{errors.name}</span>}
                <Input
                  type='text'
                  placeholder='E-mail'
                  className='form__input'
                  value={formBuyer.email}
                  onChange={(e) => setFormBuyer((prevForm) => ({ ...prevForm, email: e.target.value }))}
                />
                {errors.email && <span className='error-message'>{errors.email}</span>}
                <Input
                  type='text'
                  placeholder='Телефон'
                  className='form__input'
                  value={formBuyer.phone}
                  onChange={(e) => setFormBuyer((prevForm) => ({ ...prevForm, phone: e.target.value }))}
                />
                {errors.phone && <span className='error-message'>{errors.phone}</span>}
              </div>
              <div className="buyer__inner">
                <h2 className='buyer__title subtitle-h3'>Адрес получателя</h2>
                <Input
                  type='text'
                  placeholder='Страна'
                  className='form__input'
                  value={formBuyer.country}
                  onChange={(e) => setFormBuyer((prevForm) => ({ ...prevForm, country: e.target.value }))}
                />
                {errors.country && <span className='error-message'>{errors.country}</span>}

                <Input
                  type='text'
                  placeholder='Город'
                  className='form__input'
                  value={formBuyer.city}
                  onChange={(e) => setFormBuyer((prevForm) => ({ ...prevForm, city: e.target.value }))}
                />
                {errors.city && <span className='error-message'>{errors.city}</span>}
                <Input
                  type='text'
                  placeholder='Улица'
                  className='form__input'
                  value={formBuyer.street}
                  onChange={(e) => setFormBuyer((prevForm) => ({ ...prevForm, street: e.target.value }))}
                />
                {errors.street && <span className='error-message'>{errors.street}</span>}
                <Input
                  type='text'
                  placeholder='Дом'
                  className='form__input'
                  value={formBuyer.house}
                  onChange={(e) => setFormBuyer((prevForm) => ({ ...prevForm, house: e.target.value }))}
                />
                {errors.house && <span className='error-message'>{errors.house}</span>}
                <Input
                  type='text'
                  placeholder='Квартира'
                  className='form__input'
                  value={formBuyer.apartment}
                  onChange={(e) => setFormBuyer((prevForm) => ({ ...prevForm, apartment: e.target.value }))}
                />
                {errors.apartment && <span className='error-message'>{errors.apartment}</span>}
              </div>
              <div className="buyer__inner">
                <h2 className='buyer__title subtitle-h3'>Комментарии</h2>
                <textarea
                  placeholder='Сообщение'
                  className='form__texarea'
                  value={formBuyer.message}
                  onChange={(e) => setFormBuyer({ ...formBuyer, message: e.target.value })}>
                </textarea>
              </div>
            </div>
            <div className="buyer__right">
              <div className="buyer__inner">
                <h2 className='buyer__title subtitle-h3'>Ваш заказ</h2>
                <div className="buyer-cart">
                  <div className="buyer-cart__inner">
                    <p className="buyer-cart__text subtitle-h4">Товар</p>
                    <p className="buyer-cart__text subtitle-h4">Всего</p>
                  </div>
                  <ul className="buyer-cart__list">
                    {cartItems.map(item => (
                      <li key={item.id} className="buyer-cart__item">
                        <p className="buyer-cart__text text">{item.title}</p>
                        <p className="buyer-cart__text text">${item.price}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="buyer-cart__subtotal">
                    <p className="buyer-cart__text text">Подытог</p>
                    <p className="buyer-cart__text text">${isNaN(totalPrice) ? 0 : totalPrice}</p>
                  </div>
                  <div className="buyer-cart__total">
                    <p className="buyer-cart__text subtitle-h4">Итого</p>
                    <p className="buyer-cart__text subtitle-h4">${isNaN(totalPrice) ? 0 : totalPrice}</p>
                  </div>
                </div>
              </div>
              <div className="buyer__inner buyer__inner--gap">
                <h2 className='buyer__title subtitle-h3'>Способы оплаты</h2>
                <div className="buyer__checkbox checkbox">
                  <Input
                    id='checkbox'
                    type='checkbox'
                    name="iscash"
                    className='checkbox__input'
                    checked={formBuyer.iscash}
                    onChange={() => setFormBuyer({ ...formBuyer, iscash: !formBuyer.iscash })}
                  />
                  <label htmlFor="checkbox" className='text checkbox__label'>
                    <span>Оплата наличными</span>
                  </label>
                </div>
                <Button onClick={addFormBuyer} className={`button ${isFormSubmitted ? '' : 'disabled'}`}>
                  <span className='button__text'>Разместить заказ</span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Checkout;
