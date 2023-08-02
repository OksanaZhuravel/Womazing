import { useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';

interface formDataProps {
	name: string;
	email: string;
	phone: string;
}

const PopupForm = ({
	create,
}: {
	create: (formData: formDataProps) => void;
}) => {
	const [form, setForm] = useState({ name: '', email: '', phone: '' });
	const [errors, setErrors] = useState<{ [key: string]: string }>({
		name: '',
		email: '',
		phone: '',
	});

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
			setForm({ name: '', email: '', phone: '' });
			setErrors({});
		}
	};

	return (
		<>
			<form className='popup__form form'>
				<h2 className='popup__title'>Заказать обратный звонок</h2>
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

				<Button onClick={addForm} className='button'>
					<span className='button__text'>Заказать звонок</span>
				</Button>
			</form>
		</>
	);
};

export default PopupForm;
