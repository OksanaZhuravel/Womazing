import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";


const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className="footer__wrap">
          <Logo className='footer__logo' />
          <NavBar className='footer__menu' />
          <div className='footer__contact contact-footer'>
            <span className='contact-footer__text'>+7 (495) 823-54-12</span>
            <a className='contact-footer__text' href="mailto:hello@womazing.com">hello@womazing.com</a>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copy">
            <p className="footer__text">&copy;&nbsp;Все права защищены</p>
            <Link to="/" className="footer__link"><span className="footer__text">Политика конфиденциальности</span></Link>
            <Link to="/" className="footer__link"><span className="footer__text">Публичная оферта</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
