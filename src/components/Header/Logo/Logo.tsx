import { Link } from 'react-router-dom';
import LogoSVG from './../../Icon/LogoSvg';

const Logo = () => {
  return (
    <Link to='/' className='header__logo logo'>
      <span className='logo__img'>
        <LogoSVG />
      </span>
      <span className='logo__text'>Womazing</span>
    </Link>
  );
};
export default Logo;
