import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			<section className="about">
				<div className="about__container">
					<div className="about__wrap">
						<img src="/assets/img/home/brand.png" alt="" className="about__img" />
						<div className="about__boby">
							<h3 className="about__subtitle subtitle">Идея и женщина</h3>
							<p className="about__text text">Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.</p>
							<p className="about__text text">Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.</p>
						</div>
					</div>
					<div className="about__wrap">
						<img src="/assets/img/home/brand2.png" alt="" className="about__img" />
						<div className="about__boby">
							<h3 className="about__subtitle subtitle">Магия в деталях</h3>
							<p className="about__text text">Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.</p>
							<p className="about__text text">Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. </p>
						</div>
					</div>
					<Link to={'/shop'} className='button'>
						<span className='button__text'>Перейти в магазин</span>
					</Link>
				</div>
			</section>
		</>
	);
}
export default About;