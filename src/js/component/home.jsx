import React from "react";
import NavBar from "./NavBar";
import Jumbotrom from "./Jumbotrom";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<Jumbotrom />
			<div className="d-flex">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Home;
