const NavBar = () => {
  return (
    <nav className='header__menu menu'>
      <ul className='menu__list'>
        <li className='menu__item'>
          <a href='/' className='menu__link active'>
            <span className='menu__text'>Главная</span>
          </a>
        </li>
        <li className='menu__item'>
          <a href='/shop' className='menu__link'>
            <span className='menu__text'>Магазин</span>
          </a>
        </li>
        <li className='menu__item'>
          <a href='/about' className='menu__link'>
            <span className='menu__text'>О бренде</span>
          </a>
        </li>
        <li className='menu__item'>
          <a href='/contacts' className='menu__link'>
            <span className='menu__text'>Контакты</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
