import Quality from '../../Icon/Quality';
import Responsibility from '../../Icon/Responsibility';
import Speed from '../../Icon/Speed';

const Importance = () => {
	return (
		<section className='importance'>
			<div className='importance__container'>
				<h2 className='importance__title subtitle-h2'>Что для нас важно</h2>
				<ul className='importance__list'>
					<li className='importance__item'>
						<span className='importance__svg'>
							<Quality />
						</span>
						<p className='importance__subtitle'>Качество</p>
						<p className='importance__text'>
							Наши профессионалы работают на лучшем оборудовании для пошива
							одежды беспрецедентного качества
						</p>
					</li>
					<li className='importance__item'>
						<span className='importance__svg'><Speed /></span>
						<p className='importance__subtitle'>Скорость</p>
						<p className='importance__text'>
							Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
							единиц продукции в наших собственных цехах
						</p>
					</li>
					<li className='importance__item'>
						<span className='importance__svg'><Responsibility /></span>
						<p className='importance__subtitle'>Ответственность</p>
						<p className='importance__text'>
							Мы заботимся о людях и планете. Безотходное производство и
							комфортные условия труда - все это Womazing
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};
export default Importance;
