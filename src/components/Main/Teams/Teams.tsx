import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

const Teams = () => {
	return (
		<section className="teams">
			<div className="teams__container">
				<h2 className="teams__title">Команда мечты Womazing</h2>
				<div className="teams__wrap">
					<Swiper
						modules={[Pagination, Navigation]}
						pagination={{ clickable: true }}
						navigation
						spaceBetween={63}
						centeredSlides={true}
						className='teams__swiper'>
						<SwiperSlide className='teams__slide'>
							<img
								className='teams__img'
								src='/assets/img/home/dream.png'
								alt='Команда мечты Womazing'
							/>
						</SwiperSlide>
						<SwiperSlide className='teams__slide'>
							<img
								className='teams__img'
								src='/assets/img/home/dream2.png'
								alt='Команда мечты Womazing'
							/>
						</SwiperSlide>
						<SwiperSlide className='teams__slide'>
							<img
								className='teams__img'
								src='/assets/img/home/dream3.png'
								alt='Команда мечты Womazing'
							/>
						</SwiperSlide>
					</Swiper>
					<div className="teams__body">
						<p className="teams__subtitle">Для каждой</p>
						<p className="teams__text">Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.</p>
						<p className="teams__text">Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
						<a href="/" className="teams__link link"><span className="link__text">Подробнее о бренде</span></a>
					</div>
				</div>
			</div>
		</section >
	);
}
export default Teams;