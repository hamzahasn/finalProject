import React, { useState, useEffect, useContext } from "react";
import PropTypes, { array } from "prop-types";
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
	const [total, setTotal] = useState(0);
	const [foundSelected, setFoundSelected] = useState();

	const handleSaveDiary = e => {
		//logic for saving the day in diary
	};

	useEffect(
		() => {
			console.log("inside effect");
			calculateTotals();
		},
		[store.foodselected.morning, store.foodselected.afternoon, store.foodselected.night]
	);
	useEffect(
		() => {
			let current = date.toISOString().split("T")[0];
			let findSelected = store.diary.find(item => item.date === current);
			console.log("found", findSelected);
			setFoundSelected(findSelected);
			actions.setDiary(current, date);
		},
		[date]
	);
	const calculateFoundTotals = () => {
		let x = 0;
		for (let i = 0; i < foundSelected.length; i++) {
			x += foundSelected[i].calories;
		}
		return x;
	};
	const calculateTotals = () => {
		console.log("calculating totals");
		console.log("sum foods test", store.foodselected.morning);

		let runningTotal =
			sumFoods(store.foodselected.morning) +
			sumFoods(store.foodselected.afternoon) +
			sumFoods(store.foodselected.night);
		console.log("running total", runningTotal);
		setTotal(runningTotal);
	};
	const sumFoods = arr => {
		let x = 0;
		for (let i = 0; i < arr.length; i++) {
			x += arr[i].nf_calories * arr[i].qty;
			console.log("calories", arr[i].nf_calories);
			console.log("qty", arr[i].qty);
		}
		return x;
	};
	return (
		<Container>
			<div className="d-flex flex-row">
				<h4 className="mr-2">Your Food Diary for:</h4>
				<div>
					<DatePicker className="calendar" onChange={setDate} value={date} />
				</div>
				<div className="ml-auto">
					<Button onClick={actions.createDiaryEntry}>Save Diary Entry</Button>
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
				{foundSelected
					? foundSelected.foods.filter(i => i.time_of_day == "morning").map((item, index) => {
							return (
								<ListGroup.Item key={index}>
									<Row>
										<Col>{item.name}</Col>
										<Col xs={1}>{item.quantity}</Col>
										<Col xs={1}>{item.serving_size}</Col>
										<Col xs={1}>{item.serving_unit}</Col>
										<Col xs={1}>{item.calories}</Col>

										<Col xs={1}>
											<Button onClick={e => actions.removeFoodItem(index, "morning")}>
												<i className="fas fa-minus" />
											</Button>
										</Col>
									</Row>
								</ListGroup.Item>
							);
					  })
					: null}
				{/* // find the diary for the selected date // check if length > 0 for this part of the day // if length >
				0, map the array and display info */}
				{store.foodselected.morning.map((item, index) => (
					<ListGroup.Item key={index}>
						<Row>
							<Col>{item.food_name}</Col>
							<Col xs={1}>
								<input
									type="number"
									min="1"
									step="1"
									value={item.qty}
									onChange={e => {
										actions.updateFoodQty(e.target.value, index, "morning");
										calculateTotals();
									}}
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
				{foundSelected
					? foundSelected.foods.filter(i => i.time_of_day == "afternoon").map((item, index) => {
							return (
								<ListGroup.Item key={index}>
									<Row>
										<Col>{item.name}</Col>
										<Col xs={1}>{item.quantity}</Col>
										<Col xs={1}>{item.serving_size}</Col>
										<Col xs={1}>{item.serving_unit}</Col>
										<Col xs={1}>{item.calories}</Col>

										<Col xs={1}>
											<Button onClick={e => actions.removeFoodItem(index, "afternoon")}>
												<i className="fas fa-minus" />
											</Button>
										</Col>
									</Row>
								</ListGroup.Item>
							);
					  })
					: null}
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
									onChange={e => {
										actions.updateFoodQty(e.target.value, index, "afternoon");
										calculateTotals();
									}}
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
				{foundSelected
					? foundSelected.foods.filter(i => i.time_of_day == "night").map((item, index) => {
							return (
								<ListGroup.Item key={index}>
									<Row>
										<Col>{item.name}</Col>
										<Col xs={1}>{item.quantity}</Col>
										<Col xs={1}>{item.serving_size}</Col>
										<Col xs={1}>{item.serving_unit}</Col>
										<Col xs={1}>{item.calories}</Col>

										<Col xs={1}>
											<Button onClick={e => actions.removeFoodItem(index, "night")}>
												<i className="fas fa-minus" />
											</Button>
										</Col>
									</Row>
								</ListGroup.Item>
							);
					  })
					: null}
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
									onChange={e => {
										actions.updateFoodQty(e.target.value, index, "night");
										calculateTotals();
									}}
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
						{foundSelected ? <Col>{calculateFoundTotals()}</Col> : <Col>{total}</Col>}
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
