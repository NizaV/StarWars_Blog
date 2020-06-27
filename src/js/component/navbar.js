import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							{"Favorites"}
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="#">
								{"Action"}
							</a>
							<a className="dropdown-item" href="#">
								{"Another action"}
							</a>
							<div className="dropdown-divider" />
							<a className="dropdown-item" href="#">
								{"Something else here"}
							</a>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	);
};
