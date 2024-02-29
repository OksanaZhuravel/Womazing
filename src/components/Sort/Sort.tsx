import api from "../../api/apiShop";
import { CategoryProps, SortProps } from "../../types/types";
import { useEffect, useState } from "react";

const Sort = ({ onSortChange }: SortProps) => {
	const [category, setCategory] = useState<CategoryProps[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const categories = await api.getAllCategories();
				setCategory([{
					id: 0,
					name: "Все"
				}, ...categories]);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const [activeItems, setActiveItems] = useState([true, ...Array.from({ length: category.length - 1 }).map(() => false)]);

	const handleSort = (index: number) => {
		const newActiveItems = Array.from({ length: category.length }).map((_isActive, i) => i === index);
		setActiveItems(newActiveItems);
		const range = category[index].id.toString();
		onSortChange(range);
	};

	return (
		<>
			<section className="sort">
				<div className="sort__container">
					<ul className="sort__list">
						{category.map((item, index) => (
							<li
								key={item.id}
								className={activeItems[index] ? 'sort__item active' : 'sort__item'}
								onClick={() => handleSort(index)}
							>
								<span className="sort__text">{item.name}</span>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default Sort;