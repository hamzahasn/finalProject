import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import Navbar from "./component/navbar";
import Footer from "./component/footer";
import { Login } from "./views/Login";
import { Signup } from "./views/signup";
import { About } from "./views/about";
import { Diarysearch } from "./views/diarysearch";
import { Diary } from "./views/diary";

//create your first component
const Layout = () => {
	const menu = [
		{ label: "Home", url: "/" },
		{ label: "About", url: "/about" },
		{ label: "Contact", url: "#" },
		{ label: "Signup", url: "/signup" },
		{ label: "Login", url: "/login" },
		{ label: "Diary", url: "/diary/search" }
	];

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar
						menu={menu}
						icon="https://i.ibb.co/8Yzwqrf/iconfinder-healthy-strength-strong-health-heart-5859214.png"
						brand="Fiture"
					/>

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signup">
							<Signup />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/diary/search">
							<Diarysearch />
						</Route>
						<Route exact path="/diary">
							<Diary />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
