
import React from "react";
import PropTypes from 'prop-types';
import ChevronRight from '../../assets/ChevronRight';
import ChevronLeft from '../../assets/ChevronLeft';
import FirstPage from '../../assets/ChevronDoubleLeft';
import LastPage from '../../assets/ChevronDoubleRight';
import CustomSelect from '../CustomSelect';

const Pagination = ({
	totalRows,
	rowsPerPage,
	currentPage,
	onPageChange,
	onPageSizeChange
}) => {
	const totalPages = Math.ceil(totalRows / rowsPerPage);
	const maxPageNumbersToShow = 3;

	const getVisiblePages = () => {
		const pages = [];
		const startPage = Math.max(1, currentPage - Math.floor(maxPageNumbersToShow / 2));
		const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}

		return pages;
	};

	const handlePageChange = (page) => {
		if(page !== currentPage){
			if (page >= 1 && page <= totalPages) {
				onPageChange(page, rowsPerPage);
			}
		}
	
	};

	const handlePageSizeChange = (e) => {
		if(Number(e.target.value) !== rowsPerPage){
			onPageSizeChange(Number(e.target.value));
		}
	};

	const pageOpt = [
		{
			key: 10,
			label: "10"
		},
		{
			key: 25,
			label: "25"
		},
		{
			key: 50,
			label: "50"
		}
	]

	return (
		<div className='d-flex align-items-center flex-wrap gap-2 pagination-items'>
			<div className='table-info'>
				<span className='text-muted'>
					{totalPages} / {currentPage}
				</span>
			</div>

			<div className='d-flex align-items-center gap-2 table-pagination'>
				<div className='pagination'>
					<span
						role='button'
						onClick={() => handlePageChange(1)}
						disabled={currentPage === 1}
						className='pagination-button'
					>
						<FirstPage color="#000" />
					</span>
					<span
						role='button'
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
						className='pagination-button'
					>
						<ChevronLeft color="#000" />
					</span>

					{getVisiblePages().map((page) => (
						<span
							key={page}
							role='button'
							className={`page-number ${currentPage === page ? 'active' : ''}`}
							onClick={() => handlePageChange(page)}
						>
							{page}
						</span>
					))}
					{maxPageNumbersToShow < totalPages && <span className='text-primary cursorpointer'>...</span>}
					<span
						role='button'
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className='pagination-button'
					>
						<ChevronRight color="#000" />
					</span>
					<span
						role='button'
						onClick={() => handlePageChange(totalPages)}
						disabled={currentPage === totalPages}
						className='pagination-button'
					>
												<LastPage color="#000" />

					</span>
				</div>
				<div className='rows-per-page'>
					<CustomSelect
						ariaLabel="pagination"
						value={rowsPerPage}
						onChange={(event) => handlePageSizeChange(event)}
						list={pageOpt?.map((values) => ({
							value: values?.key,
							text: values?.label
						}))}
					/>
				</div>
			</div>

		</div>
	);
};

Pagination.propTypes = {
	totalRows: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	onPageSizeChange: PropTypes.func.isRequired,
};

export default Pagination;
