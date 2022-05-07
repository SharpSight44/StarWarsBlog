import React, {useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";


import injectContext from "./store/appContext";
import { AllCharacters } from "./views/allCharacters";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { AllPlanets } from "./views/Planets";
import { AllShips } from "./views/ships";
import { LocalShip } from "./views/shipsId";
import { FavoritesContext } from "./component/favorites";
import {SinglePlanet }  from "./views/SinglePlanet"
import {SingleCharacter }  from "./views/SingleCharacter"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	const [favorites, setfavorites] = useState([]); 
	const value = {favorites, setfavorites}

	


	return (
		<div>
			
			<BrowserRouter basename={basename}>
			<FavoritesContext.Provider value={value}>
				<ScrollToTop>
					<Navbar  />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/planets">
							<AllPlanets />
						</Route>
						<Route exact path="/planets/:id">
							<SinglePlanet/>
						</Route>
						<Route exact path="/allships">
							<AllShips/>
						</Route>
						<Route exact path="/ships/:id">
							<LocalShip/>
						</Route>
						<Route exact path="/characters">
<AllCharacters/>
						</Route>
						<Route exact path="/characters/:id">
							<SingleCharacter/>
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
				</FavoritesContext.Provider>
			</BrowserRouter>
			
		</div>
	);
};

export default injectContext(Layout);
