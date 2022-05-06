import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/react.css";
import propTypes from "prop-types";
// import {favsList} from "../views/cards.js";
import { FavoritesContext } from "../component/favorites";

export const Navbar = (props) => {
	const {favorites, setfavorites} = useContext(FavoritesContext);

	
	
	return (
		<>
	
		<nav className="navbar navbar-light bg-light ">
			
			<Link to="/">
				<span className="navbar-brand mx-3 h1">Home</span>
			</Link>
			<div className="ml-auto">
			<Link to="/characters">
<button className="btn btn-danger mx-4 "> Characters Page  </button>
				</Link>
				<Link to="/planets">
					<button className="btn btn-primary">Planets Page </button>
				</Link>
				<Link to="/allships">
<button className="btn btn-danger mx-4 "> Ships Page  </button>
				</Link>
				<button type="button" className="btn btn-info dropdown">
  Favorites <span className="badge bg-warning " data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">4</span> <a className="dropdown-toggle" data-bs-toggle="dropdown"
						href="#"
						role="button"
						aria-expanded="false"></a>
						<ul className="dropdown-menu">{favorites.map((x,i)=> <li key={i}>{x}</li>)}</ul>
</button>

			</div>
		
				
				
		</nav>
		<div className="box">
					<span className="react-logo">
						<span className="nucleo"></span>
					</span>
					</div>
		</>
	);
};
