import React from "react";
import PropTypes from "prop-types";

const Columns = () => {
	return (
		<>
			<div className="tools text-center">
				<h1 className="display-3 heading">The Tools for Your Goals</h1>
				<p>
					Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the
					right features to hit your goals.
				</p>
			</div>

			<div className="container text-center">
				<div className="row">
					<div className="col-sm">
						<img src="https://i.ibb.co/3SyrGvh/diary-1.png" />
						<p>
							<b>Learn. Track. Improve.</b>
						</p>

						<p>
							Keeping a food diary helps you understand your habits and increases your likelihood of
							hitting your goals.
						</p>
					</div>
					<div className="col-sm">
						<img src="https://i.ibb.co/5jpXfg4/calendar.png " />
						<p>
							<b>Learn. Track. Improve.</b>
						</p>

						<p>
							Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.
						</p>
					</div>
					<div className="col-sm">
						<img src="https://i.ibb.co/hmvkXwn/community.png " />
						<p>
							<b>Learn. Track. Improve.</b>
						</p>

						<p>Join the World’s Largest Fitness Community for advice, tips, and support 24/7.</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Columns;
