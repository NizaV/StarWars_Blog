import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="card" style={{ minWidth: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.data.name}</h5>
				<p className="card-text">
					{"gender" in props.data && <p>{`Gender: ${props.data.gender}`}</p>}
					{"hair_color" in props.data && <p>{`Hair Color: ${props.data.hair_color}`}</p>}
					{"eye_color" in props.data && <p>{`Eye-Color: ${props.data.eye_color}`}</p>}
					{"population" in props.data && <p>{`Population: ${props.data.population}`}</p>}
					{"climate" in props.data && <p>{`Climate: ${props.data.climate}`}</p>}
					{"terrain" in props.data && <p>{`Terrain: ${props.data.terrain}`}</p>}
					{"model" in props.data && <p>{`Model: ${props.data.model}`}</p>}
					{"manufacturer" in props.data && <p>{`Manufacturer: ${props.data.manufacturer}`}</p>}
					{"passengers" in props.data && <p>{`Passengers: ${props.data.passengers}`}</p>}
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
