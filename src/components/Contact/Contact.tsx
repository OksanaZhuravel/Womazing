import { useState } from "react";
import { formDataProps } from "../../types/types";
import PopupForm from "../PopupForm/PopupForm";

const Contact = () => {
	const [isFormSubmitted, setFormSubmitted] = useState(false);
	const create = (formData: formDataProps) => {
		console.log(formData);
		setFormSubmitted(true);

	};
	return (
		<section className="contact">
			<div className="contact__container">
				<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d8996.094838375468!2d37.5264605628054!3d55.68857554456446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LMuINCc0L7RgdC60LLQsCwgMy3RjyDRg9C70LjRhtCwINCh0YLRgNC-0LjRgtC10LvQtdC5LCAyNQ!5e0!3m2!1sru!2sge!4v1700476291979!5m2!1sru!2sge" width="100%" height="476" loading="lazy" ></iframe>
				<ul className="address">
					<li className="address__item text">Телефон<span className="text-big">+7 (495) 823-54-12</span></li>
					<li className="address__item text">E-mail<span className="text-big">info@sitename.com</span></li>
					<li className="address__item text">Адрес<span className="text-big">г. Москва, 3-я улица Строителей, 25</span></li>
				</ul>
				<PopupForm create={create} title='Напишите нам' showMessage={true} text_btn='Отправить' />
				{isFormSubmitted &&
					<div className="button button--color">Сообщение успешно отправлено</div>
				}
			</div>
		</section>

	);
}
export default Contact;