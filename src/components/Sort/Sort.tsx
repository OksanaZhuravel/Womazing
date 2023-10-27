
import api from "../../api/apiShop";

const Sort = () => {
	const handleSort = () => {
		const fetchData = async () => {
			try {
				const productSort = await api.getSort();
				console.log(productSort);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	};
	return (
		<section className='sort'>
			<div className='sort__container'>
				<ul className='sort__list'>
					<li className='sort__item active'>
						<span className="sort__text">Все</span>
					</li>
					<li className='sort__item' onClick={() => handleSort()}>
						<span className="sort__text">Пальто</span>
					</li>
					<li className='sort__item'>
						<span className="sort__text">Свитшоты</span>
					</li>
					<li className='sort__item'>
						<span className="sort__text">Кардиганы</span>
					</li>
					<li className='sort__item'>
						<span className="sort__text">Толстовки</span>
					</li>
				</ul>
			</div>
		</section>
	);
};
export default Sort;
