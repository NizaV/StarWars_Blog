import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.data.name}</h5>
				<p className="card-text">
					{"Gender: "} {props.data.gender}
				</p>
				<p className="card-text">
					{"Hair Color: "} {props.data.hair_color}
				</p>
				<p className="card-text">
					{"Eye-Color: "} {props.data.eye_color}
				</p>
				<a href="#" className="btn btn-primary">
					{"Learn more!"}
				</a>
			</div>
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.object
};
