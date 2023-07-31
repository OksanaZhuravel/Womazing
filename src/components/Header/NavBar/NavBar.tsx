import { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItem = [
  { id: 1, path: '/', text: 'Главная' },
  { id: 2, path: '/shop', text: 'Магазин' },
  { id: 3, path: '/about', text: 'О бренде' },
  { id: 4, path: '/contacts', text: 'Контакты' },
];

const NavBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <nav className='header__menu menu'>
      <ul className='menu__list'>
        {menuItem.map((item) => (
          <li
            className='menu__item'
            key={item.id}
            onClick={() => {
              setSelectedIndex(item.id);
            }}>
            <Link
              to={item.path}
              className={
                selectedIndex === item.id ? 'menu__link active' : 'menu__link'
              }>
              <span className='menu__text'>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default NavBar;
