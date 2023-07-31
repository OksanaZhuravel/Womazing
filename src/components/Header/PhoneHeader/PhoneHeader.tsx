import Phone from '../../Icon/Phone';

const PhoneHeader = () => {
  return (
    <div
      className='header__phone phone-header'
      onClick={() => {
        console.log('Click phone');
      }}>
      <span className='phone-header__icon'>
        <Phone />
      </span>
      <span className='phone-header__number'>+7 (495) 823-54-12</span>
    </div>
  );
};
export default PhoneHeader;
