import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	useEffect(
		() => {
			actions.getItem(props.match.params.thetype, props.match.params.theid);
		},
		[props.match.params.theid]
	);
	return (
		<>
			{"name" in store.single &&
				props.match.params.theid == store.single.url.match(/[/][0-9]+[/]/)[0].replace(/[/]/g, "") && (
					<div className="jumbotron">
						<div className="d-flex">
							<img className="card-img-top" src="..." alt="Card image cap" />
							<div className="d-flex flex-column">
								<h1 className="display-4">{store.single.name}</h1>
								<p className="lead">
									{
										"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
									}
								</p>
							</div>
						</div>
						<hr className="my-4" />
						{/* loop through object properties to create divs */}
						<div className="d-flex flex-wrap">
							{Object.entries(store.single).map(([key, value], index) => {
								if (
									value.toString().search("http") == -1 &&
									key != "name" &&
									key != "created" &&
									key != "edited" &&
									value.toString() != ""
								) {
									let propertyName = key.replace(/_/g, " ");
									return (
										<div className="d-flex flex-column ml-5 mr-5" key={index}>
											<p>{`${propertyName.charAt(0).toUpperCase() + propertyName.slice(1)}`}</p>
											<p>{`${value}`}</p>
										</div>
									);
								}
							})}
						</div>
					</div>
				)}
		</>
	);
};

Single.propTypes = {
	match: PropTypes.objects
};
