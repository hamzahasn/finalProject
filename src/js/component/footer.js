import React from "react";
import PropTypes from "prop-types";

const Footer = () => {
	return (
		<footer className="page-footer font-small my-3 py-2 ">
			<div className="container">
				<div className="row">
					<div className="col-md-12 py-6">
						<div className=" flex-center">
							<a href="#" className="fb-ic mt-2 footerbtn">
								<i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x" />
							</a>
							<a href="#" className="tw-ic mt-2  footerbtn">
								<i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x" />
							</a>

							<a href="#" className="ins-ic mt-2 footerbtn">
								<i className="fab fa-instagram fa-lg white-text  fa-2x" />
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="footer-end text-center ">Created by Hamza Hasnain and Rafael Lacson</div>
		</footer>
	);
};

Footer.propTypes = {
	menu: PropTypes.array,
	brand: PropTypes.string
};

export default Footer;
