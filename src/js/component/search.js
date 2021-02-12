import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Search = () => {
	const [currentsearch, setCurrentsearch] = useState("");
	const [food, setFood] = useState([]);
	const { store, actions } = useContext(Context);

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
					onChange={e => setCurrentsearch(e.target.value)}
				/>
				<span
					onClick={() => actions.search(currentsearch)}
					className="input-group-text border-0"
					id="search-addon">
					<i className="fas fa-search" />
				</span>
			</div>
		</>
	);
};

export default Search;
