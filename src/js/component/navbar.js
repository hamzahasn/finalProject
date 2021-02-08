import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
	const buildMenu = props.menu.map((item, index) => {
		return (
			<li key={index} className="nav-item">
				<a className="nav-link" href={item.url}>
					{item.label}
				</a>
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
				<ul className="navbar-nav">{buildMenu}</ul>
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
