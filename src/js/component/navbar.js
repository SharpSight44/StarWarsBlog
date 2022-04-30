import React from "react";
import { Link } from "react-router-dom";
import "../../styles/react.css";

export const Navbar = () => {
	return (
		<>
	
		<nav className="navbar navbar-light bg-light ">
			
			<Link to="/">
				<span className="navbar-brand mx-3 h1">Home</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Demo Page </button>
				</Link>
				<Link to="/cards">
<button className="btn btn-danger mx-4 "> Cards Page  </button>
				</Link>
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
