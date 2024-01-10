
import { SortProps } from "../../types/types";
import { useState } from "react";

const Sort = ({ onSortChange }: SortProps) => {
	const [activeItems, setActiveItems] = useState([true, false, false, false, false]);
	const getLabelText = (range: string) => ({
		all: "Все",
		"100": "До 100$",
		"500": "от 100$ до 500$",
		"1000": "от 500$ до 1000$",
		moreThan1000: "Более 1000$",
	}[range] || "");

	const handleSort = (range: string, index: number) => {
		const newActiveItems = activeItems.map((_isActive, i) => i === index);
		setActiveItems(newActiveItems);
		onSortChange(range);
	};

	return (
		<>
			<section className="sort">
				<div className="sort__container">
					<ul className="sort__list">
						{["all", "100", "500", "1000", "moreThan1000"].map((range, index) => (
							<li
								key={range}
								className={activeItems[index] ? 'sort__item active' : 'sort__item'}
								onClick={() => handleSort(range, index)}
							>
								<span className="sort__text">{getLabelText(range)}</span>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
};

export default Sort;