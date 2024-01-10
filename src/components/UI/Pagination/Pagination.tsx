import { PaginationProps } from "../../../types/types";


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
					<svg xmlns="http://www.w3.org/2000/svg" width="21" height="11" viewBox="0 0 21 11" fill="none">
						<path d="M-2.18557e-07 5.5L20 5.5M20 5.5L14.8649 10.5M20 5.5L14.8649 0.499999" stroke="black" />
					</svg>
				</button>
			)}
		</div>
	);
};

export default Pagination;