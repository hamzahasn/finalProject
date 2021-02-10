import React from "react";
import PropTypes from "prop-types";

const Search = () => {
	return (
		<>
			<div className="searchtext text-center">
				Search over 11 million foods in our database. What&apos;s in your food? Learn about calorie count,
				nutrition information and serving size.
			</div>
			<div className="input-group rounded">
				<input
					type="search"
					className="form-control rounded"
					placeholder="Search"
					aria-label="Search"
					aria-describedby="search-addon"
				/>
				<span className="input-group-text border-0" id="search-addon">
					<i className="fas fa-search" />
				</span>
			</div>
		</>
	);
};

export default Search;
