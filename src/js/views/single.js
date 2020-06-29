import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron">
			<div className="d-flex">
				<img className="card-img-top" src="..." alt="Card image cap" />
			</div>
			<div className="d-flex">
				<h1 className="display-4">{"Card title"}</h1>
				<p className="lead">{"Some type of card description"}</p>
			</div>
			<hr className="my-4" />
			<p>{"This will be card info"}</p>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
