import { ReactNode } from 'react';

interface ModalProps {
	open: boolean;
	onCancel: () => void;
	children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onCancel, children }) => {
	if (open === true) {
		document.body.classList.add('popup__show');
	} else {
		document.body.classList.remove('popup__show');
	}
	return (
		<div className={open === true ? 'popup popup_show' : 'popup'}>
			{children}
			<button className='popup__close' onClick={onCancel}>
				X
			</button>
		</div>
	);
};
export default Modal;
