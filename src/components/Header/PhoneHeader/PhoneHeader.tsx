import Phone from '../../Icon/Phone';
import Modal from '../../UI/Modal/Modal';
import PopupForm from '../../PopupForm/PopupForm';
import Button from '../../UI/Button/Button';
import CloseSvg from '../../Icon/CloseSvg';
import { formDataProps } from '../../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../state/store';
import { setModalOpen } from '../../../state/modal/modalSlice';
import { setVerification } from '../../../state/form/formSlice';

import api from '../../../api/apiShop';


const PhoneHeader = ({ className }: { className: string }) => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.modals.isModalOpen);
  const isVerification = useSelector((state: RootState) => state.form.isVerification)

  const showModal = () => {
    dispatch(setModalOpen(true));
  };
  const handleCancel = () => {
    dispatch(setModalOpen(false));
    dispatch(setVerification(false))
  };
  const create = async (formData: formDataProps) => {
    // console.log(formData);
    const response = await api.postEmails(formData);
    if (response) {
      dispatch(setModalOpen(false));
      dispatch(setVerification(true))
      console.log("Email sent successfully!");
    } else {
      dispatch(setVerification(false))
      console.log("Message sending failed");
    }
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
      {isVerification && (
        <Modal open={isVerification} onCancel={handleCancel}>
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
