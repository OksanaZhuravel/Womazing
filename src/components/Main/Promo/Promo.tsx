import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import PromoController from './PromoController/PromoController';
const Promo: React.FC = () => {
	return (
		<section className='promo'>
			<div className='promo__container'>
				<Swiper
					pagination={{ clickable: true }}
					spaceBetween={5}
					autoplay={{ delay: 5000 }}
					loop={true}
					centeredSlides={true}
					modules={[Pagination, Autoplay]}
					className='promo__swiper'>
					<SwiperSlide className='promo__slide'>
						<div className='promo__inner'>
							<div className='promo__boby'>
								<h1 className='promo__title'>
									Новые поступления в этом сезоне
								</h1>
								<p className='promo__text'>
									Утонченные сочетания и бархатные оттенки вот то, что вы искали
									в этом сезоне. Время исследовать.
								</p>
								<PromoController />
							</div>
							<img
								className='promo__img'
								src='/assets/img/home/foto_promo.png'
								alt='Девушка в пальто'
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide className='promo__slide'>
						<div className='promo__inner'>
							<div className='promo__boby'>
								<h1 className='promo__title'>
									Что-то новенькое. Мы&nbsp;заждались тебя.
								</h1>
								<p className='promo__text'>
									Надоело искать себя в&nbsp;сером городе? Настало время новых
									идей, свежих красок и&nbsp;вдохновения с&nbsp;Womazing!
								</p>
								<PromoController />
							</div>
							<img
								className='promo__img'
								src='/assets/img/home/brand.png'
								alt='Девушка в пальто'
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide className='promo__slide'>
						<div className='promo__inner'>
							<div className='promo__boby'>
								<h1 className='promo__title'>
									Включай новый сезон с&nbsp;WOMAZING
								</h1>
								<p className='promo__text'>
									Мы&nbsp;обновили ассортимент&nbsp;&mdash; легендарные
									коллекции и&nbsp;новинки от отечественных дизайнеров
								</p>
								<PromoController />
							</div>
							<img
								className='promo__img'
								src='/assets/img/home/brand2.png'
								alt='Девушка в пальто'
							/>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default Promo;






