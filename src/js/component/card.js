import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	return (
		<div className="card" style={{ minWidth: "18rem" }}>
			<img className="card-img-top" src="..." alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.data.name}</h5>
				{"gender" in props.data && <p className="card-text">{`Gender: ${props.data.gender}`}</p>}
				{"hair_color" in props.data && <p className="card-text">{`Hair Color: ${props.data.hair_color}`}</p>}
				{"eye_color" in props.data && <p className="card-text">{`Eye-Color: ${props.data.eye_color}`}</p>}
				{"population" in props.data && <p className="card-text">{`Population: ${props.data.population}`}</p>}
				{"climate" in props.data && <p className="card-text">{`Climate: ${props.data.climate}`}</p>}
				{"terrain" in props.data && <p className="card-text">{`Terrain: ${props.data.terrain}`}</p>}
				{"model" in props.data && <p className="card-text">{`Model: ${props.data.model}`}</p>}
				{"manufacturer" in props.data && (
					<p className="card-text">{`Manufacturer: ${props.data.manufacturer}`}</p>
				)}
				{"passengers" in props.data && <p className="card-text">{`Passengers: ${props.data.passengers}`}</p>}
				<div>
					<Link to={`/single/${props.data.url.replace("http://swapi.dev/api/", "")}`}>{"Learn more!"}</Link>
					<button type="button" className="btn btn-primary">
						<i />
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.object
};
