import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card ml-3 mr-3" style={{ minWidth: "18rem" }}>
			<img
				className="card-img-top"
				src="data:image/jpeg;base64,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"
				alt="Image Insert Here"
			/>

			<div className="card-body">
				<h5 className="card-title property-under">{props.data.name}</h5>
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
				<div className="d-flex flex-row justify-content-between">
					<button type="button" className="btn learn-color">
						<Link to={`/single/${props.data.url.replace("http://swapi.dev/api/", "")}`}>
							{"Learn more!"}
						</Link>
					</button>
					<button
						type="button"
						className="btn fav-button"
						onClick={() => actions.saveFavorites(props.data.name, "people")}>
						<i className="far fa-heart fav-icn" />
					</button>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	data: PropTypes.object
};