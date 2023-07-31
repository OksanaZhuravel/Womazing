import LogoSVG from './../../Icon/LogoSvg';

const Logo = () => {
  return (
    <a href='/' className='header__logo logo'>
      <span className='logo__img'>
        <LogoSVG />
      </span>
      <span className='logo__text'>Womazing</span>
    </a>
  );
};
export default Logo;
