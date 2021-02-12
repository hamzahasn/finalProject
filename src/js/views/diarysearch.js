import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../../styles/searchDiary.scss";

export const Diarysearch = () => {
	const [currentsearch, setCurrentsearch] = useState("");
	const [food, setFood] = useState([]);
	const { store, actions } = useContext(Context);

	const handleKeyPress = e => {
		if (e.key === "Enter") actions.search(currentsearch);
	};

	return (
		<>
			<Container>
				<div className="searchtext text-center">
					Search our food database by the name of the food you wish to add
				</div>
				<div className="input-group rounded mb-5">
					<input
						type="search"
						className="form-control rounded"
						placeholder="Search"
						aria-label="Search"
						aria-describedby="search-addon"
						onChange={e => setCurrentsearch(e.target.value)}
						onKeyPress={e => handleKeyPress(e)}
					/>
					<span
						onClick={() => actions.search(currentsearch)}
						className="input-group-text border-0"
						id="search-addon">
						<i className="fas fa-search" />
					</span>
				</div>
				<ListGroup className="search-result-list-group">
					<ListGroup.Item>
						<Row>
							<Col>Name</Col>
							<Col>Serving Unit</Col>
							<Col xs={1}>Qty</Col>
							<Col xs={1}>Action</Col>
						</Row>
					</ListGroup.Item>

					{typeof store.searchResult.common !== "undefined" &&
						store.searchResult.common.map((item, index) => (
							<ListGroup.Item key={index}>
								<Row>
									<Col>{item.food_name}</Col>

									<Col>{item.serving_unit}</Col>
									<Col xs={1}>{item.serving_qty}</Col>
									<Col xs={1}>
										<i className="fas fa-plus" />
									</Col>
								</Row>
							</ListGroup.Item>
						))}
				</ListGroup>
			</Container>
		</>
	);
};
