import CartHeader from './CartHeader/CartHeader';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import PhoneHeader from './PhoneHeader/PhoneHeader';
import { useEffect, useState } from 'react';
import Button from '../UI/Button/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isModalOpen = useSelector((state: RootState) => state.modals.isModalOpen);
  const isVerification = useSelector((state: RootState) => state.form.isVerification)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const isScrolled = scrollPosition > 0;
      setIsScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      header.classList.toggle('scroll', isScrolled || isModalOpen || isVerification);
    }
  }, [isScrolled, isModalOpen, isVerification]);

  return (
    <header className={`header ${isScrolled || isModalOpen || isVerification ? 'scroll' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
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
