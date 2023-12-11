import { useState } from 'react';
import Title from "../components/Title/Title";
import { useNavigate } from 'react-router-dom';
import { BuyerProps } from '../types/types';
import Input from '../components/UI/Input/Input';
import Button from '../components/UI/Button/Button';

const Checkout: React.FC<BuyerProps> = () => {
  const navigate = useNavigate();
  const [formBuyer, setFormBuyer] = useState({
    name: '',
    email: '',
    phone: '',
    messange: '',
    country: '',
    city: '',
    street: '',
    house: '',
    apartment: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
    phone: '',
    messange: '',
  });
  const [isFormSubmitted, setFormSubmitted] = useState(true);

  const addFormBuyer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const validationErrors: { [key: string]: string } = {};
    // if (formBuyer.name.trim() === '') {
    //   validationErrors.name = 'Введите Имя';
    // }
    // if (formBuyer.email.trim() === '') {
    //   validationErrors.email = 'Введите Email';
    // } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formBuyer.email)) {
    //   validationErrors.email = 'Неверный формат почты';
    // }
    // if (formBuyer.phone.trim() === '') {
    //   validationErrors.phone = 'Ваш номер телефона';
    // } else if (!/^\+?[0-9]+$/.test(formBuyer.phone)) {
    //   validationErrors.phone = 'только + и цифры';
    // }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const newForm = { ...formBuyer, id: Date.now() };
      setFormBuyer({
        name: '',
        email: '',
        phone: '',
        messange: '',
        country: '',
        city: '',
        street: '',
        house: '',
        apartment: '',
      });
      setErrors({});
      console.log(newForm);
      setFormSubmitted(false);
      navigate('/success');
    }
  }

  return (
    <>
      <Title title='Оформление заказа' activeTitle='Оформление заказа' activeLink='/checkout' />
      <section className="buyer">
        <div className="buyer__container">
          < form className='form buyer__form'>
            <div className="buyer__left">
              <div className="buyer__inner">
                <h2 className='buyer__title'>Данные покупателя</h2>
                <Input
                  type='text'
                  placeholder='Имя'
                  className='form__input'
                  value={formBuyer.name}
                  onChange={(e) => setFormBuyer({ ...formBuyer, name: e.target.value })}
                />
                {errors.name && <span className='error-message'>{errors.name}</span>}
                <Input
                  type='text'
                  placeholder='E-mail'
                  className='form__input'
                  value={formBuyer.email}
                  onChange={(e) => setFormBuyer({ ...formBuyer, email: e.target.value })}
                />
                {errors.email && <span className='error-message'>{errors.email}</span>}
                <Input
                  type='text'
                  placeholder='Телефон'
                  className='form__input'
                  value={formBuyer.phone}
                  onChange={(e) => setFormBuyer({ ...formBuyer, phone: e.target.value })}
                />
                {errors.phone && <span className='error-message'>{errors.phone}</span>}
              </div>
              <div className="buyer__inner">
                <h2 className='buyer__title'>Адрес получателя</h2>
                <Input
                  type='text'
                  placeholder='Страна'
                  className='form__input'
                  value={formBuyer.country}
                  onChange={(e) => setFormBuyer({ ...formBuyer, country: e.target.value })}
                />
                <Input
                  type='text'
                  placeholder='Город'
                  className='form__input'
                  value={formBuyer.city}
                  onChange={(e) => setFormBuyer({ ...formBuyer, city: e.target.value })}
                />
                <Input
                  type='text'
                  placeholder='Улица'
                  className='form__input'
                  value={formBuyer.street}
                  onChange={(e) => setFormBuyer({ ...formBuyer, street: e.target.value })}
                />
                <Input
                  type='text'
                  placeholder='Дом'
                  className='form__input'
                  value={formBuyer.house}
                  onChange={(e) => setFormBuyer({ ...formBuyer, house: e.target.value })}
                />
                <Input
                  type='text'
                  placeholder='Квартира'
                  className='form__input'
                  value={formBuyer.apartment}
                  onChange={(e) => setFormBuyer({ ...formBuyer, apartment: e.target.value })}
                />
              </div>
              <div className="buyer__inner">
                <h2 className='buyer__title'>Комментарии</h2>
                <textarea
                  placeholder='Сообщение'
                  className='form__texarea'
                  value={formBuyer.messange}
                  onChange={(e) => setFormBuyer({ ...formBuyer, messange: e.target.value })}
                >
                </textarea>
              </div>
            </div>
            <div className="buyer__right">
              <Button onClick={addFormBuyer} className={`button ${isFormSubmitted ? '' : 'disabled'}`}>
                <span className='button__text'>Разместить заказ</span>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
export default Checkout;
