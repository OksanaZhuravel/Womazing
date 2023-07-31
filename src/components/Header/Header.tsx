import Logo from './Logo/Logo';
import NavBar from './NavBar/NavBar';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__container'>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};
export default Header;
