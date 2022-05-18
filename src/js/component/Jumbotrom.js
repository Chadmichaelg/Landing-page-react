import React from "react";

const Jumbotrom = () => {
	return (
		<div>
			<div className="jumbotron m-5">
				<h1 className="display-4">A Warm Welcome!</h1>
				<p className="lead">
					If a function is called with missing arguments (less than
					declared), the missing values are set to undefined.
					Sometimes this is acceptable, but sometimes it is better to
					assign a default value to the parameter:
				</p>
				<a
					className="btn btn-primary btn-lg"
					href="https://reactjs.org/"
					role="button">
					Call to Action
				</a>
			</div>
		</div>
	);
};

export default Jumbotrom;
