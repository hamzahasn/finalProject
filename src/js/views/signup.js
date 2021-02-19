import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import "../../styles/signup.scss";
import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	const [fName, setfName] = useState("");
	const [lName, setlName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [terms, setTerms] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		// check that password and confirmPassword Match, and that terms is not false
		if (terms == true && password == confirmPassword) {
			// if they match, call action in flux to send all state variables to the backend api for signup
			let data = {
				fname: fName,
				lname: lName,
				email: email,
				password: password,
				tos: terms
			};

			let signup = await actions.signupUser(data);
			// wait for response. If successful, we send them to login. If failed, we show an error.
			if (signup) {
				history.push("/login");
			} else {
				console.error("error: ", signup);
			}
		} else {
			console.error("there was a problem with signup!");
		}
	};

	return (
		<div className="signup-form">
			<form onSubmit={e => handleSubmit(e)}>
				<h2>Register</h2>
				<p className="hint-text">Create your account.</p>
				<div className="form-group">
					<div className="row">
						<div className="col-sm-6">
							<input
								onChange={e => setfName(e.target.value)}
								value={fName}
								type="text"
								className="form-control"
								name="first_name"
								placeholder="First Name"
								required="required"
							/>
						</div>
						<div className="col-sm-6">
							<input
								onChange={e => setlName(e.target.value)}
								value={lName}
								type="text"
								className="form-control"
								name="last_name"
								placeholder="Last Name"
								required="required"
							/>
						</div>
					</div>
				</div>
				<div className="form-group">
					<input
						onChange={e => setEmail(e.target.value)}
						value={email}
						type="email"
						className="form-control"
						name="email"
						placeholder="Email"
						required="required"
					/>
				</div>
				<div className="form-group">
					<input
						onChange={e => setPassword(e.target.value)}
						value={password}
						type="password"
						className="form-control"
						name="password"
						placeholder="Password"
						required="required"
					/>
				</div>
				<div className="form-group">
					<input
						onChange={e => setConfirmPassword(e.target.value)}
						value={confirmPassword}
						type="password"
						className="form-control"
						name="confirm_password"
						placeholder="Confirm Password"
						required="required"
					/>
				</div>
				<div className="form-group">
					<label className="checkbox-inline" />
					<input
						checked={terms}
						onChange={e => setTerms(e.target.checked)}
						type="checkbox"
						required="required"
					/>{" "}
					I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
				</div>
				<div className="form-group">
					<button type="submit" className="btn btn-success btn-lg btn-block">
						Register Now
					</button>
				</div>
			</form>
			<div className="text-center">
				Already have an account? <a href="#">Sign in</a>
			</div>
		</div>
	);
};
