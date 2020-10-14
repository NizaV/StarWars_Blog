import React from "react";
import PropTypes from "prop-types";
import { Card } from "./card";

export const ItemHolder = props => {
	return (
		<>
			<div className="text-secondary holder-text">
				<h2>{props.title}</h2>
			</div>
			<div className="d-flex justify-content-between overflow-auto">
				{props.cardsData &&
					props.cardsData.map((cardData, index) => {
						return <Card data={cardData} key={index} />;
					})}
			</div>
		</>
	);
};

ItemHolder.propTypes = {
	title: PropTypes.string,
	cardsData: PropTypes.array
};
