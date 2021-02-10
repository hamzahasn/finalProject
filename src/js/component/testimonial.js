import React from "react";
import PropTypes from "prop-types";
import "../../styles/testimonial.scss";

const Testimonial = () => {
	return (
		<>
			<div id="myCarousel" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#myCarousel" data-slide-to="0" className="active" />
					<li data-target="#myCarousel" data-slide-to="1" />
					<li data-target="#myCarousel" data-slide-to="2" />
				</ol>
				<div className="carousel-inner">
					<div className="item carousel-item active">
						<div className="img-box">
							<img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1558758981/male-2634974_640.jpg" />
						</div>
						<p className="testimonial">
							Phasellus vitae suscipit justo. Mauris pharetra feugiat ante id lacinia. Etiam faucibus
							mauris id tempor egestas. Duis luctus turpis at accumsan tincidunt. Phasellus risus risus,
							volutpat vel tellus ac, tincidunt fringilla massa. Etiam hendrerit dolor eget rutrum.
						</p>
						<p className="overview">
							<b>Paula Wilsons</b>
							Seo Analyst{" "}
						</p>
						<div className="star-rating"> </div>
					</div>
					<div className="item carousel-item">
						<div className="img-box">
							<img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1558758980/people-875617_1280.jpg" />
						</div>
						<p className="testimonial">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu sem tempor, varius quam at,
							luctus dui. Mauris magna metus, dapibus nec turpis vel, semper malesuada ante. Vestibulum
							idac nisl bibendum scelerisque non non purus. Suspendisse varius nibh non aliquet.
						</p>
						<p className="overview">
							<b>Paula Wilson</b>
							Media Analyst{" "}
						</p>
						<div className="star-rating"> </div>
					</div>
					<div className="item carousel-item">
						<div className="img-box">
							<img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1558758980/portrait-1287413_640.jpg" />
						</div>
						<p className="testimonial">
							Vestibulum quis quam ut magna consequat faucibus. Pellentesque eget nisi a mi suscipit
							tincidunt. Utmtc tempus dictum risus. Pellentesque viverra sagittis quam at mattis.
							Suspendisse potenti. Aliquam sit amet gravida nibh, facilisis gravida odio. Phasellus auctor
							velit.
						</p>
						<p className="overview">
							<b>Antonio Moreno</b>
							Web Developer
						</p>
						<div className="star-rating"> </div>
					</div>
				</div>{" "}
				<a className="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
					{" "}
					<i className="fa fa-angle-left" />{" "}
				</a>{" "}
				<a className="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
					{" "}
					<i className="fa fa-angle-right" />{" "}
				</a>
			</div>
		</>
	);
};

export default Testimonial;
