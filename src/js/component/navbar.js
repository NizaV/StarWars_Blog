import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/">
				<img
					src="https://i.pinimg.com/originals/c6/8c/0f/c68c0f53d50ea8aa4a21b6374814b4a2.jpg"
					width="70"
					height="30"
					alt="Star Wars"
				/>
			</Link>
			<div className="dropdown show ml-auto">
				<button
					className="btn btn-dark dropdown-toggle"
					href="#"
					role="button"
					id="dropdownMenuLink"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
				</button>
				<div className="dropdown-menu ml-auto dropdown-menu-right" aria-labelledby="dropdownMenuLink">
					<>
						<ul className="w-25">
							{store.favorites &&
								store.favorites.map((person, index) => {
									// if (person.isfav) {
									return (
										<li key={index} className="dropit dropdown-item" href="#">
											<div className="d-flex flex-row">
												<p className="mr-4">{person} </p>
												<button
													onClick={() => actions.deleteFav(index, "people")}
													className="btndelete pull-right btn-xs btn btn-danger py-0 ml-auto h-25">
													<i className="fas fa-trash" />
												</button>
											</div>
										</li>
									);
									// }
								})}
							{/* {store.planet &&
								store.planet.map((planet, index) => {
									if (planet.isfav) {
										return (
											<li key={index} className="dropit dropdown-item" href="#">
												{planet.name}{" "}
												<button
													onClick={() => actions.deleteFav(index, "planets")}
													className="btndelete pull-right btn-xs btn btn-danger py-0">
													X
												</button>
											</li>
										);
									}
								})} */}
						</ul>
					</>
				</div>
			</div>
		</nav>
	);
};
