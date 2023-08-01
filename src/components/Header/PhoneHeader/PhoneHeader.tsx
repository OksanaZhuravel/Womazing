import { useState } from 'react';
import Phone from '../../Icon/Phone';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';

const PhoneHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    console.log('showModal');
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log('handleOk');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    console.log('handleCancel');
    setIsModalOpen(false);
  };

  return (
    <>
      <div className='header__phone phone-header' onClick={showModal}>
        <span className='phone-header__icon'>
          <Phone />
        </span>
        <span className='phone-header__number'>+7 (495) 823-54-12</span>
      </div>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}>
        <div className="popup__wraper">
          <div className="popup__content">
            <h2 className='popup__title'>Заказать обратный звонок</h2>
            <div className='form'>FORM</div>
            <Button onClick={handleOk} className='button'>
              <span className='button__text'>Заказать звонок</span>
            </Button>
          </div>


        </div>
      </Modal>
    </>
  );
};
export default PhoneHeader;
