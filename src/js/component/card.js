import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card m-auto" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.data.name}</h5>
				<p className="card-text">
					{"Some quick example text to build on the card title and make up the bulk of the card's content."}
				</p>
				<a href="#" className="btn btn-primary">
					{"Go somewhere"}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.object
};
