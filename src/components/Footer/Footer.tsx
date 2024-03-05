import { Link } from "react-router-dom"
import Logo from "../Logo/Logo"
import NavBar from "../NavBar/NavBar"
import Social from "../Social/Social"
import { useEffect } from "react"
import { fetchCategoriesAll } from "../../state/categories/categoriesSlice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../state/store"
import { defaultCategories } from "../../api/defolt"

const Footer = () => {
  const category = useSelector((state: RootState) => state.categories.categories)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    dispatch(fetchCategoriesAll())
  }, [dispatch])

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__wrap">
          <Logo className="footer__logo" />
          <NavBar className="footer__menu" />
          <div className="footer__contact contact-footer">
            <span className="contact-footer__text">+7 (495) 823-54-12</span>
            <a
              className="contact-footer__text"
              href="mailto:hello@womazing.com"
            >
              hello@womazing.com
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__copy">
            <p className="footer__text">&copy;&nbsp;Все права защищены</p>
            <Link to="/" className="footer__link">
              <span className="footer__text">Политика конфиденциальности</span>
            </Link>
            <Link to="/" className="footer__link">
              <span className="footer__text">Публичная оферта</span>
            </Link>
          </div>
          <ul className="footer__list">
            {category && category.length > 0
              ? category.map((item) => (
                <li className="footer__item" key={item.id}>
                  <Link className="footer__link" to={`/shop`}>
                    <span className="footer__text">{item.name}</span>
                  </Link>
                </li>
              ))
              : defaultCategories.map((category, index) => (
                <li className="footer__item" key={index}>
                  <Link className="footer__link" to={`/shop`}>
                    <span className="footer__text">{category}</span>
                  </Link>
                </li>
              ))}
          </ul>
          <div className="footer__inner">
            <Social />
            <div className="footer__pay">
              <img
                src="/assets/img/icon/visa-mastercard.png"
                alt="visa-mastercard"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
