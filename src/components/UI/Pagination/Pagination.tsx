import { PaginationProps } from "../../../types/types";
import PaginationArrow from "../../Icon/PaginationArrow";


const Pagination = ({ currentPage, maxPage, setCurrentPage }: PaginationProps) => {
	const scrollAndOffset = () => {
		const firstArticle = document.querySelector('article');
		if (firstArticle) {
			const topOffset = firstArticle.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.3;
			window.scrollTo({ top: topOffset, behavior: 'smooth' });
		}
	};
	return (
		<div className="pagination">
			<button
				className="pagination__page"
				onClick={() => {
					if (currentPage > 1) {
						setCurrentPage(currentPage - 1);
						scrollAndOffset();
					}
				}}
				disabled={currentPage === 1}
			>
				{currentPage}
			</button>
			{currentPage < maxPage && (
				<button
					className="pagination__next"
					onClick={() => {
						setCurrentPage(currentPage + 1);
						scrollAndOffset();
					}}
				>
					{currentPage + 1}
				</button>
			)}
			{currentPage < maxPage && (
				<button
					className="pagination__arrow"
					onClick={() => {
						setCurrentPage(currentPage + 1);
						scrollAndOffset();
					}}
				>
					<PaginationArrow />
				</button>
			)}
		</div>
	);
};

export default Pagination;