import { useEffect, useCallback } from 'react';
import { ModalProps } from '../../../types/types';
import { useDispatch } from 'react-redux';
import { setModalOpen } from '../../../state/modal/modalSlice';

const generateClassName = (open: boolean) => {
	return open ? 'popup popup_show' : 'popup';
};

const Modal: React.FC<ModalProps> = ({ open, onCancel, children }) => {
	const dispatch = useDispatch();
	const handleOutsideClick = useCallback(
		(event: MouseEvent) => {
			if (
				open &&
				event.target instanceof Element &&
				!event.target.closest('.popup__content')
			) {
				dispatch(setModalOpen(false));
			}
		},
		[open, onCancel]
	);
	const handleEscapeKey = useCallback(
		(event: KeyboardEvent) => {
			if (open && event.key === 'Escape') {
				dispatch(setModalOpen(false));
			}
		},
		[open, onCancel]
	);
	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);
		document.addEventListener('keydown', handleEscapeKey);
		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
			document.removeEventListener('keydown', handleEscapeKey);
		};
	}, [handleOutsideClick, handleEscapeKey]);

	useEffect(() => {
		document.body.classList.toggle('popup__show', open);
	}, [open, onCancel]);

	return (
		<div className={generateClassName(open)}>
			<div className='popup__wrapper'>
				{children}
			</div>
		</div>
	);
};

export default Modal;
