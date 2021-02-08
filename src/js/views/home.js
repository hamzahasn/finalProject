import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Jumbo from "../component/jumbo";
import Card from "../component/card";

export const Home = () => {
	const carddata = [
		{
			title: "The Right Ingredients",
			description:
				" Maecenas suscipit sapien sed eros tempus, ac sollicitudin diam mattis. Donec vitae auctor ante. Phasellus nec lobortis quam. Suspendisse a urna ipsum. Sed mollis eget ipsum ac consectetur. Duis pellentesque elementum justo.   ",
			button: "Read More",
			image: "https://advancedhoustonsurgical.com/wp-content/uploads/2018/06/AHS_Blog_july-1.jpg",
			link: "#"
		},
		{
			title: "Grocery Shopping",
			description:
				" Maecenas suscipit sapien sed eros tempus, ac sollicitudin diam mattis. Donec vitae auctor ante. Phasellus nec lobortis quam. Suspendisse a urna ipsum. Sed mollis eget ipsum ac consectetur. Duis pellentesque elementum justo.  ",
			button: "Read More",
			image:
				"https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/content/ea/12/fa2e5c114a37a41604b0096b17a9/left-image._TTW_._CR0,0,1320,990_._SR900,675_._QL100_.jpg",
			link: "#"
		},
		{
			title: "Increase Your Lifts",
			description:
				" Maecenas suscipit sapien sed eros tempus, ac sollicitudin diam mattis. Donec vitae auctor ante. Phasellus nec lobortis quam. Suspendisse a urna ipsum. Sed mollis eget ipsum ac consectetur. Duis pellentesque elementum justo.",
			button: "Read More",
			image: "https://www.greatestphysiques.com/wp-content/uploads/2017/05/omar-isuf-doing-deadlifts.jpg",
			link: "#"
		},
		{
			title: "Let's Get Moving",
			description:
				" Maecenas suscipit sapien sed eros tempus, ac sollicitudin diam mattis. Donec vitae auctor ante. Phasellus nec lobortis quam. Suspendisse a urna ipsum. Sed mollis eget ipsum ac consectetur. Duis pellentesque elementum justo.   ",
			button: "Read More",
			image:
				"https://www.quickanddirtytips.com/sites/default/files/styles/article_main_image/public/images/12691/cardio-compressor.png?itok=Gx1P0og1",
			link: "#"
		}
	];
	return (
		<>
			<Jumbo
				goku="https://i.ibb.co/MNCyBDk/222-2.png"
				about="

Take control of your goals. Track calories, break down ingredients, and log activities with Fiture."
				jumbolink="#"
				jumboheading="Fitness starts with what you eat."
				jumboit="Start for Free"
			/>
			<div className="container-fluid">
				<div className="row">
					{carddata.map((item, index) => {
						return (
							<div key={index} className="col-sm">
								<Card
									name={item.title}
									text={item.description}
									btn={item.button}
									img={item.image}
									cardlink={item.link}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
