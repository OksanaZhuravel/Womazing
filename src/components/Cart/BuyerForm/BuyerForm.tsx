import { FormBuyer } from "../../../types/types"
import Input from "../../UI/Input/Input"
interface BuyerFormProps {
  formBuyer: FormBuyer
  setFormBuyer: React.Dispatch<React.SetStateAction<FormBuyer>>
  errors: { [key: string]: string }
}
const BuyerForm: React.FC<BuyerFormProps> = ({
  formBuyer,
  setFormBuyer,
  errors,
}) => {
  return (
    <form className="form">
      <div className="buyer__left">
        <div className="buyer__inner">
          <h2 className="buyer__title subtitle-h3">Данные покупателя</h2>
          <Input
            type="text"
            placeholder="Имя"
            className="form__input"
            value={formBuyer.name}
            onChange={(e) =>
              setFormBuyer((prevForm) => ({
                ...prevForm,
                name: e.target.value,
              }))
            }
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
          <Input
            type="text"
            placeholder="E-mail"
            className="form__input"
            value={formBuyer.email}
            onChange={(e) =>
              setFormBuyer((prevForm) => ({
                ...prevForm,
                email: e.target.value,
              }))
            }
          />
          {errors.email && (
            <span className="error-message">{errors.email}</span>
          )}
          <Input
            type="text"
            placeholder="Телефон"
            className="form__input"
            value={formBuyer.phone}
            onChange={(e) =>
              setFormBuyer((prevForm) => ({
                ...prevForm,
                phone: e.target.value,
              }))
            }
          />
          {errors.phone && (
            <span className="error-message">{errors.phone}</span>
          )}
        </div>
        <div className="buyer__inner">
          <h2 className="buyer__title subtitle-h3">Адрес получателя</h2>
          <Input
            type="text"
            placeholder="Страна"
            className="form__input"
            value={formBuyer.country}
            onChange={(e) =>
              setFormBuyer((prevForm) => ({
                ...prevForm,
                country: e.target.value,
              }))
            }
          />
          {errors.country && (
            <span className="error-message">{errors.country}</span>
          )}

          <Input
            type="text"
            placeholder="Город"
            className="form__input"
            value={formBuyer.city}
            onChange={(e) =>
              setFormBuyer((prevForm) => ({
                ...prevForm,
                city: e.target.value,
              }))
            }
          />
          {errors.city && <span className="error-message">{errors.city}</span>}
          <Input
            type="text"
            placeholder="Улица"
            className="form__input"
            value={formBuyer.street}
            onChange={(e) =>
              setFormBuyer((prevForm) => ({
                ...prevForm,
                street: e.target.value,
              }))
            }
          />
          {errors.street && (
            <span className="error-message">{errors.street}</span>
          )}
          <Input
            type="text"
            placeholder="Дом"
            className="form__input"
            value={formBuyer.house}
            onChange={(e) =>
              setFormBuyer((prevForm) => ({
                ...prevForm,
                house: e.target.value,
              }))
            }
          />
          {errors.house && (
            <span className="error-message">{errors.house}</span>
          )}
          <Input
            type="text"
            placeholder="Квартира"
            className="form__input"
            value={formBuyer.apartment}
            onChange={(e) =>
              setFormBuyer((prevForm) => ({
                ...prevForm,
                apartment: e.target.value,
              }))
            }
          />
          {errors.apartment && (
            <span className="error-message">{errors.apartment}</span>
          )}
        </div>
        <div className="buyer__inner">
          <h2 className="buyer__title subtitle-h3">Комментарии</h2>
          <textarea
            placeholder="Сообщение"
            className="form__texarea"
            value={formBuyer.message}
            onChange={(e) =>
              setFormBuyer({ ...formBuyer, message: e.target.value })
            }
          ></textarea>
        </div>
      </div>
    </form>
  )
}
export default BuyerForm
