import { useState } from 'react';
import Phone from '../../Icon/Phone';
import Modal from '../../UI/Modal/Modal';
import PopupForm from '../../PopupForm/PopupForm';
import Button from '../../UI/Button/Button';
import CloseSvg from '../../Icon/CloseSvg';
import { formDataProps } from '../../../types/types';


const PhoneHeader = ({ className }: { className: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setIsFormSubmitted(false);
  };
  const create = (formData: formDataProps) => {
    console.log(formData);
    setIsModalOpen(false);
    setIsFormSubmitted(true);
  };

  return (
    <>
      <div className={`${className} phone-header`} onClick={showModal}>
        <span className='phone-header__icon'>
          <Phone />
        </span>
        <span className='phone-header__number'>+7 (495) 823-54-12</span>
      </div>
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <div className='popup__content'>
          <PopupForm create={create} />
        </div>
        <Button className='popup__close' onClick={handleCancel}>
          <CloseSvg />
        </Button>
      </Modal>
      {isFormSubmitted && (
        <Modal open={isFormSubmitted} onCancel={handleCancel}>
          <div className='popup__content'>
            <h2 className='popup__title submit'>
              Отлично! Мы скоро вам перезвоним.
            </h2>
            <Button className='button button--outline' onClick={handleCancel}>
              <span className='button__text'>Закрыть</span>
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
};
export default PhoneHeader;
