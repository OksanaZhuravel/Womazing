import { Link } from 'react-router-dom';
import CartIcon from '../../Icon/CartIcon';

const CartHeader = () => {
  return (
    <div className='header__cart cart-header'>
      <Link to='/cart' className='cart-header__link'>
        <span className='cart-header__icon'>
          <CartIcon />
        </span>
        <div className='cart-header__count'>
          <span className='cart-header__text'>3</span>
        </div>
      </Link>
    </div>
  );
};
export default CartHeader;
