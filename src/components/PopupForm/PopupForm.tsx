import { useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { formDataProps } from '../../types/types';
interface PopupFormProps {
	create: (formData: formDataProps) => void;
	title: string;
	text_btn: string;
	showMessage?: boolean;
}
const PopupForm: React.FC<PopupFormProps> = ({ create, title, text_btn, showMessage = false }) => {
	const [form, setForm] = useState({ name: '', email: '', phone: '', messange: '' });
	const [errors, setErrors] = useState<{ [key: string]: string }>({
		name: '',
		email: '',
		phone: '',
		messange: '',
	});
	const [isFormSubmitted, setFormSubmitted] = useState(true);
	const addForm = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		const validationErrors: { [key: string]: string } = {};
		if (form.name.trim() === '') {
			validationErrors.name = 'Введите Имя';
		}

		if (form.email.trim() === '') {
			validationErrors.email = 'Введите Email';
		} else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)) {
			validationErrors.email = 'Неверный формат почты';
		}

		if (form.phone.trim() === '') {
			validationErrors.phone = 'Ваш номер телефона';
		} else if (!/^\+?[0-9]+$/.test(form.phone)) {
			validationErrors.phone = 'только + и цифры';
		}

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
		} else {
			const newForm = { ...form, id: Date.now() };
			create(newForm);
			setForm({ name: '', email: '', phone: '', messange: '' });
			setErrors({});
			setFormSubmitted(false);
		}
	};

	return (
		<>
			<form className='popup__form form'>
				<h2 className='popup__title'>{title}</h2>
				<Input
					type='text'
					placeholder='Имя'
					className='form__input'
					value={form.name}
					onChange={(e) => setForm({ ...form, name: e.target.value })}
				/>
				{errors.name && <span className='error-message'>{errors.name}</span>}
				<Input
					type='text'
					placeholder='E-mail'
					className='form__input'
					value={form.email}
					onChange={(e) => setForm({ ...form, email: e.target.value })}
				/>
				{errors.email && <span className='error-message'>{errors.email}</span>}

				<Input
					type='text'
					placeholder='Телефон'
					className='form__input'
					value={form.phone}
					onChange={(e) => setForm({ ...form, phone: e.target.value })}
				/>
				{errors.phone && <span className='error-message'>{errors.phone}</span>}

				{showMessage && (
					<textarea
						placeholder='Сообщение'
						className='form__texarea'
						value={form.messange}
						onChange={(e) => setForm({ ...form, messange: e.target.value })}
					>
					</textarea>
				)}
				<Button onClick={addForm} className={`button ${isFormSubmitted ? '' : 'disabled'}`}>
					<span className='button__text'>{text_btn}</span>
				</Button>
			</form >
		</>
	);
};

export default PopupForm;
