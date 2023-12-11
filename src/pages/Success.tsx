import { Link } from "react-router-dom";
import Title from "../components/Title/Title";


const Success = () => {
  return <>
    <Title title='Заказ получен' activeTitle='Заказ получен' activeLink='/success' interim="Оформление заказа" />
    <section className="success">
      <div className="success__container">

        <div className="success__inner">
          <img
            className='success__img'
            src='/assets/img/icon/check.svg'
            alt='заказ оформлен'
          />
          <div className="success__box">
            <p className="subtitle-h3">Заказ успешно оформлен</p>
            <p className="text">Мы свяжемся с вами в ближайшее время!</p>
          </div>
        </div>
        <Link to={'/'} className='button--outline button'>
          Перейти на главную
        </Link>
      </div>
    </section>
  </>
};
export default Success;
