import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const Login = props => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	function validateForm() {
		return email.length > 0 && password.length > 0;
	}

	function handleSubmit(event) {
		event.preventDefault();
	}

	return (
		<div className="Login">
			<Form onSubmit={handleSubmit}>
				<Form.Group size="lg" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)} />
				</Form.Group>
				<Form.Group size="lg" controlId="password">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} />
				</Form.Group>
				<Button block size="lg" type="submit" disabled={!validateForm()}>
					Login
				</Button>
			</Form>
		</div>
	);
};

export default Login;
