import { PaginationProps } from "../../../types/types";
import PaginationArrow from "../../Icon/PaginationArrow";


const Pagination = ({ currentPage, maxPage, setCurrentPage }: PaginationProps) => {
	return (
		<div className="pagination">
			<button
				className="pagination__page"
				onClick={() => {
					if (currentPage > 1) {
						setCurrentPage(currentPage - 1);
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
					}}
				>
					<PaginationArrow />
				</button>
			)}
		</div>
	);
};

export default Pagination;