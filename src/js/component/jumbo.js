import React from "react";
import PropTypes from "prop-types";

const Jumbo = props => {
	return (
		<div className="container-fluid text-center pt-5">
			<div className="jumbotron">
				<div className="row">
					<div className="col-12 col-md-6">
						<h1 className="display-2 heading">{props.jumboheading}</h1>
						<p className="lead">{props.about}</p>
						<a className="btn btn-primary btn-lg" href={props.jumbolink} role="button">
							{props.jumboit}
						</a>{" "}
					</div>
					<div className="col-12 col-md-6">
						<img className="goku" src={props.goku} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

Jumbo.propTypes = {
	goku: PropTypes.string,
	about: PropTypes.string,
	jumbolink: PropTypes.string,
	jumboheading: PropTypes.string,
	jumboit: PropTypes.string
};

export default Jumbo;
