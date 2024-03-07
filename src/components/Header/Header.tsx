import CartHeader from './CartHeader/CartHeader';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import PhoneHeader from './PhoneHeader/PhoneHeader';
import { useEffect, useState } from 'react';
import Button from '../UI/Button/Button';



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = (scrollPosition / (scrollHeight - clientHeight)) * 100;
      if (scrollPercentage >= 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`header ${isScrolled ? 'scroll' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header__wrapper">
        <div className='header__container'>
          <Logo className='header__logo' />
          <NavBar className='header__menu' setIsMenuOpen={setIsMenuOpen} />
          <PhoneHeader className='header__phone' />
          <CartHeader />
          <Button type="button" className='icon-menu' onClick={() => setIsMenuOpen(prevState => !prevState)}>
            <span></span>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
