import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../../styles/searchDiary.scss";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const Diarysearch = props => {
	const [currentsearch, setCurrentsearch] = useState("");
	const [food, setFood] = useState([]);
	const { store, actions } = useContext(Context);
	const [modalShow, setModalShow] = React.useState(false);

	const handleKeyPress = e => {
		if (e.key === "Enter") actions.search(currentsearch);
	};

	return (
		<>
			<Button variant="primary" onClick={() => setModalShow(true)}>
				Add New Item <i className="fas fa-plus" />
			</Button>

			<Modal
				{...props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				show={modalShow}
				onHide={() => {
					setModalShow(false);
					setCurrentsearch("");
					actions.clearSearch();
				}}>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
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
									<Col xs={12} sm={2} />
									<Col>Name</Col>
									<Col>Serving Unit</Col>
									<Col>Calories</Col>
									<Col xs={6} sm={1}>
										Qty
									</Col>
									<Col xs={6} sm={1}>
										Action
									</Col>
								</Row>
							</ListGroup.Item>

							{typeof store.searchResult.branded !== "undefined" &&
								store.searchResult.branded.map((item, index) => (
									<ListGroup.Item key={index}>
										<Row className="d-flex align-items-center justify-content-center">
											<Col xs={12} sm={2}>
												<img
													style={{
														maxWidth: "150px",
														height: "150px",
														objectFit: "cover"
													}}
													src={item.photo.thumb}
												/>
											</Col>
											<Col className="d-flex align-items-center justify-content-center">
												{item.food_name}
											</Col>

											<Col className="d-flex align-items-center justify-content-center">
												{item.serving_unit}
											</Col>
											<Col className="d-flex align-items-center justify-content-center">
												{item.nf_calories}
											</Col>
											<Col
												xs={6}
												sm={1}
												className="d-flex align-items-center justify-content-center">
												{item.serving_qty}
											</Col>
											<Col
												xs={6}
												sm={1}
												className="d-flex align-items-center justify-content-center">
												<Button
													onClick={() => actions.addFoodItem(item, props.dailyFood)}
													variant="danger">
													<i className="fas fa-plus" />
												</Button>
											</Col>
										</Row>
									</ListGroup.Item>
								))}
						</ListGroup>
					</Container>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

Diarysearch.propTypes = {
	dailyFood: PropTypes.string
};
