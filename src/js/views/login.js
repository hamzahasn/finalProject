import React from "react";
import "../../styles/home.scss";

export const Login = () => (
	<div className="text-center mt-5">
		<form onSubmit={e => e.preventDefault()}>
			<div className="form-group">
				<label>Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter email"
				/>
				<small id="emailHelp" className="form-text text-muted" />
			</div>
			<div className="form-group">
				<label>Password</label>
				<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	</div>
);
