import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Navbar = props => {
	const { store, actions } = useContext(Context);
	const buildMenu = props.menu.map((item, index) => {
		return (
			<li key={index} className="nav-item">
				<Link className="nav-link" to={item.url}>
					{item.label}
				</Link>
			</li>
		);
	});
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-warning position-absolute fixed-top ">
			<img src={props.icon} />

			<a className="navbar-brand" href="#">
				{props.brand}
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav">
					{buildMenu}
					{store.loggedIn ? (
						<li className="nav-item ml-auto">
							<Link className="nav-link" to="/" onClick={actions.logout}>
								Logout
							</Link>
						</li>
					) : (
						<>
							<li className="nav-item ml-auto">
								<Link className="nav-link" to="/signup">
									Signup
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/login">
									Login
								</Link>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	menu: PropTypes.array,
	brand: PropTypes.string,
	icon: PropTypes.string
};

export default Navbar;
