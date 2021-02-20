import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "../../styles/searchDiary.scss";
import DatePicker from "react-date-picker";
import { Diarysearch } from "./diarysearch";

export const Diary = () => {
	const { store, actions } = useContext(Context);
	const [date, setDate] = useState(new Date());

	const handleSaveDiary = e => {
		//logic for saving the day in diary
	};

	// useEffect(
	// 	() => {
	// 		//find the diary entry array.find()
	// 		//function to find length to make sure it's not 0, length > 0
	// 	},
	// 	[diaryEntry]
	// );

	return (
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
						<Col xs={1}>Serving Size</Col>
						<Col xs={1}>Unit</Col>
						<Col xs={1}>Calories</Col>
						<Col xs={1}>Action</Col>
					</Row>
				</ListGroup.Item>
				{// find the diary for the selected date
				// check if length > 0 for this part of the day
				// if length > 0, map the array and display info

				store.foodselected.morning.map((item, index) => (
					<ListGroup.Item key={index}>
						<Row>
							<Col>{item.food_name}</Col>
							<Col xs={1}>
								<input
									type="number"
									min="1"
									step="1"
									value={item.qty}
									onChange={e => actions.updateFoodQty(e.target.value, index, "morning")}
									className="form-control"
								/>
							</Col>
							<Col xs={1}>{item.serving_qty}</Col>
							<Col xs={1}>{item.serving_unit}</Col>
							<Col xs={1}>{item.nf_calories}</Col>

							<Col xs={1}>
								<Button onClick={e => actions.removeFoodItem(index, "morning")}>
									<i className="fas fa-minus" />
								</Button>
							</Col>
						</Row>
					</ListGroup.Item>
				))}
				<ListGroup.Item>
					<Diarysearch dailyFood="morning" />
				</ListGroup.Item>
			</ListGroup>

			<ListGroup className="diary-list-group">
				<h2>Afternoon</h2>
				<ListGroup.Item>
					<Row>
						<Col>Name</Col>
						<Col xs={1}>Qty</Col>
						<Col xs={1}>Serving Size</Col>
						<Col xs={1}>Unit</Col>
						<Col xs={1}>Calories</Col>
						<Col xs={1}>Action</Col>
					</Row>
				</ListGroup.Item>
				{// find the diary for the selected date
				// check if length > 0 for this part of the day
				// if length > 0, map the array and display info

				store.foodselected.afternoon.map((item, index) => (
					<ListGroup.Item key={index}>
						<Row>
							<Col>{item.food_name}</Col>
							<Col xs={1}>
								<input
									type="number"
									min="1"
									step="1"
									value={item.qty}
									onChange={e => actions.updateFoodQty(e.target.value, index, "afternoon")}
									className="form-control"
								/>
							</Col>
							<Col xs={1}>{item.serving_qty}</Col>
							<Col xs={1}>{item.serving_unit}</Col>
							<Col xs={1}>{item.nf_calories}</Col>

							<Col xs={1}>
								<Button onClick={e => actions.removeFoodItem(index, "afternoon")}>
									<i className="fas fa-minus" />
								</Button>
							</Col>
						</Row>
					</ListGroup.Item>
				))}
				<ListGroup.Item>
					<Diarysearch dailyFood="afternoon" />
				</ListGroup.Item>
			</ListGroup>

			<ListGroup className="diary-list-group">
				<h2>Night</h2>
				<ListGroup.Item>
					<Row>
						<Col>Name</Col>
						<Col xs={1}>Qty</Col>
						<Col xs={1}>Serving Size</Col>
						<Col xs={1}>Unit</Col>
						<Col xs={1}>Calories</Col>
						<Col xs={1}>Action</Col>
					</Row>
				</ListGroup.Item>
				{// find the diary for the selected date
				// check if length > 0 for this part of the day
				// if length > 0, map the array and display info

				store.foodselected.night.map((item, index) => (
					<ListGroup.Item key={index}>
						<Row>
							<Col>{item.food_name}</Col>
							<Col xs={1}>
								<input
									type="number"
									min="1"
									step="1"
									value={item.qty}
									onChange={e => actions.updateFoodQty(e.target.value, index, "night")}
									className="form-control"
								/>
							</Col>
							<Col xs={1}>{item.serving_qty}</Col>
							<Col xs={1}>{item.serving_unit}</Col>
							<Col xs={1}>{item.nf_calories}</Col>

							<Col xs={1}>
								<Button onClick={e => actions.removeFoodItem(index, "night")}>
									<i className="fas fa-minus" />
								</Button>
							</Col>
						</Row>
					</ListGroup.Item>
				))}
				<ListGroup.Item>
					<Diarysearch dailyFood="night" />
				</ListGroup.Item>
			</ListGroup>

			<ListGroup className="diary-list-group">
				<h2>Daily Calories</h2>
				<ListGroup.Item>
					<Row>
						<Col>Daily Calories:</Col>
					</Row>
				</ListGroup.Item>
			</ListGroup>
		</Container>

		// let example = [1,2,3,4,5]
		// let i;
		// let sum = 0;

		// for (i = 0; i <example.length; i++){
		//     sum += example[i];
		// }

		// alert(sum);
	);
};
