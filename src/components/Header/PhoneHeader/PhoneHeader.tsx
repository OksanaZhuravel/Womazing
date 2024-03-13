import { useState } from 'react';
import Phone from '../../Icon/Phone';
import Modal from '../../UI/Modal/Modal';
import PopupForm from '../../PopupForm/PopupForm';
import Button from '../../UI/Button/Button';
import CloseSvg from '../../Icon/CloseSvg';
import { formDataProps } from '../../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { setModalOpen } from '../../../state/modal/modalSlice';


const PhoneHeader = ({ className }: { className: string }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modals.isModalOpen);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const showModal = () => {
    dispatch(setModalOpen(true));
  };
  const handleCancel = () => {
    dispatch(setModalOpen(false));
    setIsFormSubmitted(false);
  };
  const create = (formData: formDataProps) => {
    console.log(formData);
    dispatch(setModalOpen(false));
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
          <PopupForm create={create} title='Заказать обратный звонок' text_btn='Заказать звонок' />
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
