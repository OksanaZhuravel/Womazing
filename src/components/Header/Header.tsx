import CartHeader from './CartHeader/CartHeader';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import PhoneHeader from './PhoneHeader/PhoneHeader';


const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <Logo className='header__logo' />
        <NavBar className='header__menu' />
        <PhoneHeader className='header__phone' />
        <CartHeader />
      </div>
    </header>
  );
};
export default Header;
