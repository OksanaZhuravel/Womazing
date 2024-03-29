import { useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { PopupFormProps } from '../../types/types';
import { validateForm } from '../../utils/validationUtils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { setFormSubmited } from '../../state/form/formSlice';

const PopupForm: React.FC<PopupFormProps> = ({ create, title, text_btn, showMessage = false, showButton = true }) => {
	const dispatch = useDispatch()
	const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
	const [errors, setErrors] = useState<{ [key: string]: string }>({
		name: '',
		email: '',
		phone: '',
		message: '',
	});
	const isFormSubmited = useSelector((state: RootState) => state.form.isFormSubmited)
	console.log(isFormSubmited);

	const addForm = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const validationRules: Array<{ fields: Array<string>; condition: (value: string) => boolean; errorMessage: string }> = [
			{ fields: ['name'], condition: (value) => value.trim() !== '', errorMessage: 'Введите Имя' },
			{ fields: ['email'], condition: (value) => value.trim() !== '', errorMessage: 'Введите Email' },
			{ fields: ['phone'], condition: (value) => /^\+?[0-9]+$/.test(value), errorMessage: 'Только + и цифры для номера телефона' },
		];
		const validationErrors = validateForm(form, validationRules);

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			// dispatch(setFormSubmited(true))
		} else {
			const newForm = { ...form, id: Date.now() };
			create(newForm);
			setForm({ name: '', email: '', phone: '', message: '' });
			setErrors({});
			dispatch(setFormSubmited(false))
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
						value={form.message}
						onChange={(e) => setForm({ ...form, message: e.target.value })}
					>
					</textarea>
				)}
				{showButton && (
					<Button onClick={addForm} className={`button ${isFormSubmited ? '' : 'disabled'}`}>
						<span className='button__text'>{text_btn}</span>
					</Button>
				)}
			</form >
		</>
	);
};

export default PopupForm;
