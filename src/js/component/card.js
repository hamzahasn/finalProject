import React from "react";
import PropTypes from "prop-types";

const Card = props => {
	return (
		<div className="card border border-warning" style={{ width: "18rem;" }}>
			<img className="card-img-top cardimgs" src={props.img} alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name} </h5>
				<p className="card-text">{props.text}</p>
				<a href={props.cardlink} className="btn btn-primary text-light">
					{props.btn}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	text: PropTypes.string,
	btn: PropTypes.string,
	img: PropTypes.string,
	cardlink: PropTypes.string
};

export default Card;
