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
	const [date, setDate] = useState(new Date());
	const [diaryEntry, setDiaryEntry] = useState([]);
	const [morning, setMorning] = useState([]);
	const [afternoon, setAfternoon] = useState([]);
	const [night, setNight] = useState([]);

	const handleSaveDiary = e => {
		//logic for saving the day in diary
	};

	useEffect(
		() => {
			//find the diary entry array.find()
			//function to find length to make sure it's not 0, length > 0
		},
		[diaryEntry]
	);

	return (
		<>
			<Container>
				<div className="d-flex flex-row">
					<h4 className="mr-2">Your Food Diary for:</h4>
					<div>
						<DatePicker className="calendar" onChange={setDate} value={date} />
					</div>
				</div>

				<ListGroup className="diary-list-group">
					<h2>Morning</h2>
					<ListGroup.Item>
						<Row>
							<Col>Name</Col>
							<Col xs={1}>Qty</Col>
							<Col xs={1}>Calories</Col>
							<Col xs={1}>Action</Col>
						</Row>
					</ListGroup.Item>
					{// find the diary for the selected date
					// check if length > 0 for this part of the day
					// if length > 0, map the array and display info

					morning.map((item, index) => (
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
					<ListGroup.Item>
						<Row>
							<Col>
								Add New Item <i className="fas fa-plus" />
							</Col>
						</Row>
					</ListGroup.Item>
				</ListGroup>
				<ListGroup className="diary-list-group">
					<h2>Afternoon</h2>
					<ListGroup.Item>
						<Row>
							<Col>Name</Col>
							<Col xs={1}>Qty</Col>
							<Col xs={1}>Calories</Col>
							<Col xs={1}>Action</Col>
						</Row>
					</ListGroup.Item>
					{// find the diary for the selected date
					// check if length > 0 for this part of the day
					// if length > 0, map the array and display info

					afternoon.map((item, index) => (
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
					<ListGroup.Item>
						<Row>
							<Col>
								Add New Item <i className="fas fa-plus" />
							</Col>
						</Row>
					</ListGroup.Item>
				</ListGroup>
				<ListGroup className="diary-list-group">
					<h2>Night</h2>
					<ListGroup.Item>
						<Row>
							<Col>Name</Col>
							<Col xs={1}>Qty</Col>
							<Col xs={1}>Calories</Col>
							<Col xs={1}>Action</Col>
						</Row>
					</ListGroup.Item>
					{// find the diary for the selected date
					// check if length > 0 for this part of the day
					// if length > 0, map the array and display info

					night.map((item, index) => (
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
					<ListGroup.Item>
						<Row>
							<Col>
								Add New Item <i className="fas fa-plus" />
							</Col>
						</Row>
					</ListGroup.Item>
				</ListGroup>
			</Container>
		</>
	);
};
