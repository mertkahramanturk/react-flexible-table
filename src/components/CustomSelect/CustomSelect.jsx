import React, {
	useEffect,
	useRef,
	useState
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CustomSelect = ({
	placeholder = 'Select an option...',
	ariaLabel = undefined,
	value = '',
	name = undefined,
	isTouched = false,
	invalidFeedback = undefined,
	isValid,
	onBlur = undefined,
	onChange = undefined,
	onFocus = undefined,
	disabled = false,
	list = [],
	isSearchable = false,
	handleSearch = undefined,
	searchValue = undefined,
	styles = {},
	...props
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState("");

	useEffect(()=>{
		setSelectedValue(value)
	},[value])

	const wrapperRef = useRef(null);

	const toggleDropdown = () => {
		if (!disabled) {
			setIsOpen(!isOpen);
		}
	};

	const handleSelect = (optionValue) => {
		setSelectedValue(optionValue);
		setIsOpen(false);
		if (onChange) {
			onChange({ target: { value: optionValue, name } });
		}
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [wrapperRef]);

	const handleSearchClick = (event) => {
		event.stopPropagation();
	};

	return (
		<div ref={wrapperRef} className={classNames('custom-select-wrapper', { disabled })} {...props}>
			<div
				className={classNames('custom-select', {
					'custom-select__is-invalid': !isValid && isTouched && invalidFeedback,
					'is-valid': !isValid && isTouched && !invalidFeedback,
				}, { disabled })}
				onClick={toggleDropdown}
				aria-label={ariaLabel}
				tabIndex="0"
				onBlur={() => onBlur && onBlur({ target: { name } })}
				onFocus={onFocus}
			>
				<div className="custom-select__trigger">
					{selectedValue ? (
						<span>{list.find((option) => option.value === selectedValue)?.text ||
							 selectedValue ||
							  placeholder}
						</span>
					) : (
						<span className="custom-placeholder">{placeholder}</span>
					)}
				</div>

				<div className={`custom-options shadow-lg ${isOpen ? 'open' : ''}`} style={styles}>
					{isSearchable && (
						<div className="custom-search">
							<input
								type="text"
								name='search'
								value={searchValue}
								onChange={handleSearch}
								onClick={handleSearchClick}
								placeholder={"search"}
								className="custom-select-search-input"
							/>
						</div>
					)}
					{list?.length > 0 ? list.map((option) => (
						<div
							key={option.value}
							className={classNames('custom-option ', {
								selected: option.value === selectedValue,
							})}
							onClick={() => handleSelect(option.value)}
						>
							{option.text}
						</div>
					)) : (
						<div className='w-100 d-flex justify-content-center align-items-center h-100 min-height-100'>
							<span className='font-size-14 text-muted text-center'>{"empty"} </span>
						</div>
					)
					}
				</div>
			</div>
			{isTouched && invalidFeedback && (
				<div className="invalid-feedback d-block">
					{invalidFeedback}
				</div>
			)}
		</div>
	);
};

CustomSelect.propTypes = {
	placeholder: PropTypes.string,
	ariaLabel: PropTypes.string.isRequired,
	name: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	isTouched: PropTypes.bool,
	invalidFeedback: PropTypes.string,
	validFeedback: PropTypes.string,
	searchValue: PropTypes.string,
	isValid: PropTypes.bool,
	isValidMessage: PropTypes.bool,
	onBlur: PropTypes.func,
	onChange: PropTypes.func,
	onFocus: PropTypes.func,
	handleSearch: PropTypes.func,
	disabled: PropTypes.bool,
	isSearchable: PropTypes.bool,
	styles: PropTypes.object,
	list: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		})
	).isRequired,
};

export default CustomSelect;
