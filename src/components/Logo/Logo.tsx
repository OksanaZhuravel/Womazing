import { Link } from 'react-router-dom';
import LogoSVG from '../Icon/LogoSvg';

const Logo = ({ className }: { className: string }) => {
  return (
    <Link to='/' className={`${className} logo`}>
      <span className='logo__img'>
        <LogoSVG />
      </span>
      <span className='logo__text'>Womazing</span>
    </Link>
  );
};
export default Logo;
