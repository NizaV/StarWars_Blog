import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ItemHolder } from "../component/ItemHolder";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center mt-5">
			<ItemHolder title={"Characters"} cardsData={store.people} />
			<ItemHolder title={"Planets"} cardsData={store.planets} />
		</div>
	);
};
