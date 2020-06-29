import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { ItemHolder } from "../component/ItemHolder";
import { Single } from "./single";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="text-center container mt-5">
			<ItemHolder title={"Characters"} cardsData={store.people} />
			<ItemHolder title={"Planets"} cardsData={store.planets} />
			<ItemHolder title={"Starships"} cardsData={store.starships} />
			<Single />
		</div>
	);
};
