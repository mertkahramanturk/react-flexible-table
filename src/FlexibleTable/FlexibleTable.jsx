/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, {
	useEffect,
	useState,
	useMemo
} from "react";
import PropTypes from "prop-types";
import Pagination from "../components/Pagination";
import { debounce } from 'lodash';
import SearchIcon from "../assets/Search";

import { motion, AnimatePresence } from "framer-motion";
import ChevronUp from "../assets/ChevronUp";
import ChevronDown from "../assets/ChevronDown";
import ChevronRight from "../assets/ChevronRight";
import Spinner from "../components/Spinner";

const FlexibleTable = ({
	columns = [],
	data = [],
	actions = [],
	pagination = false,
	onRowClick = undefined,
	changePage = () => { },
	changePageSize = () => { },
	setFilter = () => { },
	page: externalPage = 1,
	pageSize: externalPageSize = 10,
	totalItems = 0,
	totalPages = 1,
	loading = false,
	externalSort = false,
	externalSearch = false,
	searchPlaceholder = "Search...",
	tableDetail = null,
	fivotColumn = 0,
	fivotLeft = 100,
	lineStriped = false,
	handleMultiSelect = null,
	previousData = [],
	loadingComponent = null,
	stickyHeader = false
}) => {

	const [sortConfig, setSortConfig] = React.useState(null);
	const [searchTerms, setSearchTerms] = useState({});
	const [openSearchIndex, setOpenSearchIndex] = useState(null);
	const [expandedRows, setExpandedRows] = useState([]);
	const [selectedRows, setSelectedRows] = useState([]);
	const [page, setPage] = useState(externalPage || 1);
	const [pageSize, setPageSize] = useState(externalPageSize || 10);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (!event.target.closest(".table-search--wrapper")) {
				setOpenSearchIndex(null);
			}
		};
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handlePageChange = (newPage, newPageSize = pageSize) => {
		setPage(newPage);
		setPageSize(newPageSize);
		if (changePage) {
			changePage(newPage, newPageSize);
		}
	};

	const handlePageSizeChange = (newPageSize) => {
		setPageSize(newPageSize);
		setPage(1);
		if (changePageSize) {
			changePageSize(newPageSize);
		}
	};

	const toggleRow = (rowIndex) => {
		if (expandedRows.includes(rowIndex)) {
			setExpandedRows(expandedRows.filter((i) => i !== rowIndex));
		} else {
			setExpandedRows([...expandedRows, rowIndex]);
		}
	}
	const requestSort = (key) => {
		let direction = "asc";

		if (sortConfig && sortConfig[key] === "asc") {
			direction = "desc";
		} else if (sortConfig && sortConfig[key] === "desc") {
			direction = null;
		}

		const newSortConfig = direction ? { [key]: direction } : null;
		setSortConfig(newSortConfig);

		if (externalSort) {
			if (direction) {
				const sortQuery = `sort[${key}]=${direction}`;
				setFilter({ sort: sortQuery });
			} else {
				setFilter({ sort: "" });
			}
		}
	};


	const sortData = (filteredData) => {
		if (!sortConfig || externalSort) return filteredData;

		const sortedData = [...filteredData].sort((a, b) => {
			for (const key of Object.keys(sortConfig)) {
				const direction = sortConfig[key];

				const valueA = isNaN(a[key]) ? a[key]?.toString().toLowerCase() : Number(a[key]);
				const valueB = isNaN(b[key]) ? b[key]?.toString().toLowerCase() : Number(b[key]);

				if (valueA < valueB) {
					return direction === "asc" ? -1 : 1;
				}
				if (valueA > valueB) {
					return direction === "asc" ? 1 : -1;
				}
			}
			return 0;
		});

		return sortedData;
	};

	const debouncedSearch = useMemo(
		() => debounce((updatedSearchTerms) => {
			if (externalSearch) {
				const searchQuery = Object.keys(updatedSearchTerms)
					.filter((key) => updatedSearchTerms[key])
					.map((key) => `search[${key}]=${updatedSearchTerms[key]}`)
					.join("&");

				setFilter({ search: searchQuery });
			}
		}, 500), [externalSearch, setFilter]
	);

	const handleSearchChange = (event, columnKey) => {
		const newValue = event.target.value;

		const updatedSearchTerms = {
			...searchTerms,
			[columnKey]: newValue,
		};

		setSearchTerms(updatedSearchTerms);
		debouncedSearch(updatedSearchTerms);
	};

	const handleCheckboxChange = (row) => {
		const isSelected = selectedRows.includes(row);
		const updatedSelectedRows = isSelected
			? selectedRows.filter((selectedRow) => selectedRow !== row)
			: [...selectedRows, row];

		setSelectedRows(updatedSelectedRows);

		if (handleMultiSelect) {
			handleMultiSelect(updatedSelectedRows);
		}
	};
	const startIndex = (page - 1) * pageSize;
	const endIndex = startIndex + pageSize;
	const paginatedData = data.slice(startIndex, endIndex);

	const filteredData = externalSearch
		? paginatedData
		: paginatedData.filter((row) => {
			return columns.every((column) => {
				if (column.searchable && searchTerms[column.key]) {
					return row[column.key]?.toString()
						.toLowerCase()
						.includes(searchTerms[column.key].toLowerCase());
				}
				return true;
			});
		});

	const defaultLoadingComponent = (
		<div className="loading-overlay">
			<Spinner />
		</div>
	);

	const sortedData = sortData(filteredData);
	const resolvedLoadingComponent = loadingComponent || defaultLoadingComponent;
	const theadStyle = stickyHeader
	? {
			position: "sticky",
			top: 0,
			background: "#fff",
			zIndex: 10,
			boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
	}
	: {};

	return (
		<React.Fragment>
			<div className={`table-wrapper ${loading ? "loading-active" : ""}`}>
				{(loading && previousData?.length !== 0) &&
					resolvedLoadingComponent
				}
				<table style={{
					width: '100%'
				}}>
					<thead style={theadStyle}>
						<tr>
							{columns.map((column, index) => (
								<th
									key={column.key}
									onClick={() => column.sortable && requestSort(column.key)}
									style={{
										width: `${100 / columns.length}%`,
										whiteSpace: "nowrap",
										// overflow: "hidden",
										textOverflow: "ellipsis",
										position: index < fivotColumn ? "sticky" : "static",
										left: index < fivotColumn ? `${index * fivotLeft}px` : "auto",
										zIndex: index < fivotColumn ? 1 : 0,
										background: index < fivotColumn && "#fff",
										color: index < fivotColumn && "#000",
										borderRadius: index < fivotColumn && '0px',
										...column.cellStyle,
									}}
								>
									<div className="d-flex align-items-center gap-1 position-relative">
										{handleMultiSelect && index === 0 && (
											<input
												type="checkbox"
												className="custom-check-input mt-0 top-0"
												checked={paginatedData.length > 0 && paginatedData.every(row => selectedRows.includes(row))}
												onClick={(e) => e.stopPropagation()}
												onChange={(e) => {
													if (paginatedData.every(row => selectedRows.includes(row))) {
														const newSelectedRows = selectedRows.filter(row => !paginatedData.includes(row));
														setSelectedRows(newSelectedRows);
														handleMultiSelect(newSelectedRows);
													} else {
														const newSelectedRows = [...selectedRows, ...paginatedData.filter(row => !selectedRows.includes(row))];
														setSelectedRows(newSelectedRows);
														handleMultiSelect(newSelectedRows);
													}
												}}
											/>
										)}
										<div>{column.title} </div>
										{column.sortable &&
											(sortConfig?.[column.key] === "asc" ? (
												<ChevronUp color="#fff" />
											) : sortConfig?.[column.key] === "desc" ? (
												<ChevronDown color="#fff" />
											) : <ChevronRight color="#fff" />)
										}
										{column.searchable && (
											<div
												className="table-search--wrapper"
												id={`search-container-${index}`}
												onClick={(e) => {
													e.stopPropagation();
													setOpenSearchIndex(index);
												}}
											>
												<div className={`table-search--container ${openSearchIndex === index ? "expanded" : ""}`}>
													{
														openSearchIndex !== index &&
														<SearchIcon color="#000" />
													}
													{openSearchIndex === index && (
														<input
															type="text"
															placeholder={searchPlaceholder}
															value={searchTerms[column.key] || ""}
															onChange={(e) => handleSearchChange(e, column.key)}
															onClick={(event) => event.stopPropagation()}
															className="table-search--input"
															id={`search-input-${index}`}
														/>
													)}
												</div>
											</div>
										)}
									</div>
								</th>
							))}
							{actions && <th className="table-actions"></th>}
						</tr>
					</thead>
					<tbody>
						{(loading && previousData?.length === 0)
							? resolvedLoadingComponent
							: sortedData?.length > 0
								? sortedData?.map((row, index) => (
									<React.Fragment key={row.id} >
										<tr
											className={`${onRowClick ? "cursor-pointer" : ""} ${lineStriped ? "striped-row" : ""}`}
											key={row.id}
											onClick={() => onRowClick && onRowClick(row)}
										>
											{columns.map((column, columnIndex) => (
												<td
													className={`table-row ${expandedRows.includes(index) ? "expanded" : ""}`}
													key={column.key}
													style={{
														width: `${100 / columns.length}%`,
														wordWrap: "break-word",
														whiteSpace: "normal",
														overflow: "hidden",
														textOverflow: "ellipsis",
														position: columnIndex < fivotColumn ? "sticky" : "static",
														left: columnIndex < fivotColumn ? `${columnIndex * fivotLeft}px` : "auto",
														zIndex: columnIndex < fivotColumn ? 1 : 0,
														background: columnIndex < fivotColumn && "#fff",
														color: columnIndex < fivotColumn && "#000",
														borderRadius: columnIndex < fivotColumn && '0px',
														cursor: column.key === 'id' && 'pointer',
														...column.cellStyle,
													}}
													onClick={(e) => {
														if (e.target.type !== "checkbox" && tableDetail && tableDetail(row) && column.openTableDetail === true) {
															toggleRow(index);
															e.stopPropagation();
														}
													}}
												>
													{handleMultiSelect && columnIndex === 0 && (
														<input
															type="checkbox"
															className="custom-check-input me-2"
															checked={selectedRows.includes(row)}
															onChange={(e) => {
																e.stopPropagation();
																handleCheckboxChange(row);
															}}
														/>
													)}
													{column.render ? column.render(row) : row[column.key]}
												</td>
											))}

											{actions && (
												<td className={`table-row action-td position-relative ${expandedRows.includes(index) ? "expanded" : ""}`}>
													{
														actions.filter((action) => {
															if (typeof action.hidden === 'function') {
																return !action.hidden(row);
															}
															return true;
														}).map((action, actionIndex) => {
															const isDisabled =
																typeof action.disabled === "function"
																	? action.disabled(row)
																	: false;
															return (
																<React.Fragment key={actionIndex}>

																	<span key={actionIndex}>
																		<button
																			className="btn btn-link"
																			style={action.style}
																			onClick={(e) => {
																				e.stopPropagation();
																				action.onClick(row);
																			}}
																			disabled={isDisabled}
																			id={`action-${action.name}-${index}`}
																		>
																			{action.icon}
																		</button>
																	</span>
																</React.Fragment>
															);
														})}
												</td>
											)}
										</tr>
										<AnimatePresence initial={false}>
											{expandedRows.includes(index) && (
												<motion.tr
													key={row.id}
													className="table-detail"
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: "auto" }}
													exit={{ opacity: 0, height: 0 }}
													transition={{ duration: 0.2 }}
												>
													<td colSpan={columns.length + (actions ? 1 : 0)} className="px-0 py-0" onClick={(e) => e.stopPropagation()}>
														<div className="table-detail-wrapper">
															{tableDetail && tableDetail(row)}
														</div>
													</td>
												</motion.tr>
											)}
										</AnimatePresence>
									</React.Fragment>
								))
								:  <tr>
								<td colSpan="100%">
									<div className="no-records">
										 Record Not Found
									</div>
								</td>
							</tr>}
					</tbody>
				</table>
			</div>
			{pagination && (
				<Pagination
					totalRows={totalItems || data.length}
					rowsPerPage={pageSize}
					currentPage={page}
					totalPages={totalPages}
					onPageChange={handlePageChange}
					onPageSizeChange={handlePageSizeChange}
				/>
			)}
		</React.Fragment>
	);
};

FlexibleTable.propTypes = {
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.string.isRequired,
			cellStyle: PropTypes.object,
			render: PropTypes.func,
		})
	).isRequired,
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
	previousData: PropTypes.arrayOf(PropTypes.object),
	setFilter: PropTypes.func,
	iconColor: PropTypes.string,
	handleChangePageSize: PropTypes.func,
	actions: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
			style: PropTypes.object,
			disabled: PropTypes.bool,
			onClick: PropTypes.func,
			tooltip: PropTypes.string,
			hidden: PropTypes.func,
		})
	),
	sortable: PropTypes.bool,
	pagination: PropTypes.bool,
	externalSort: PropTypes.bool,
	externalSearch: PropTypes.bool,
	searchPlaceholder: PropTypes.string,
	loading: PropTypes.bool,
	onRowClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
	changePage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	totalItems: PropTypes.number.isRequired,
	totalPages: PropTypes.number,
	fivotColumn: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
	fivotLeft: PropTypes.number,
	tableDetail: PropTypes.func,
	handleMultiSelect: PropTypes.func,
	lineStriped: PropTypes.bool,
	stickyHeader: PropTypes.bool,
	loadingComponent: PropTypes.node,
};

export default FlexibleTable;
