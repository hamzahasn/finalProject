import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-success mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Name/Logo</span>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Help</span>
				</Link>
				<Link to="/demo">
					<span className="navbar-brand mb-0 h1">Settings</span>
				</Link>
				<Link to="/login">
					<span className="navbar-brand mb-0 h1">Log in</span>
				</Link>
				<Link to="/signup">
					<span className="navbar-brand mb-0 h1">Sign Up</span>
				</Link>
			</div>
		</nav>
	);
};
