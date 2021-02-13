import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../../styles/searchDiary.scss";
import DatePicker from "react-date-picker";

export const Diary = () => {
	const [currentsearch, setCurrentsearch] = useState("");
	const [food, setFood] = useState([]);
	const { store, actions } = useContext(Context);
	const [value, onChange] = useState(new Date());

	const handleKeyPress = e => {
		if (e.key === "Enter") actions.search(currentsearch);
	};

	return (
		<>
			<Container>
				<div className="d-flex flex-row">
					<h4 className="mr-2">Your Food Diary for:</h4>
					<div>
						<DatePicker className="calendar" onChange={onChange} value={value} />
					</div>
				</div>

				<ListGroup className="search-result-list-group">
					<ListGroup.Item>
						<Row>
							<Col>Calories</Col>
							<Col xs={1}>Carbs</Col>
							<Col xs={1}>Fat</Col>
							<Col xs={1}>Protein</Col>
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
