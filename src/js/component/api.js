





//Updated to OWN API - PERFECT 
export async function getAllPeople() {
	const response = await fetch(
		"https://3000-sharpsight44-starwarspy-nwbn51tv9b2.ws-us45.gitpod.io/people"
		);
		const payload = await response.json();
		
		return payload
	}
export async function getSingleCharacter(i) {
	const response = await fetch(
		"https://3000-sharpsight44-starwarspy-nwbn51tv9b2.ws-us45.gitpod.io/people/" + i
		);
		const payload = await response.json();
	
		return payload.character
	}
	

//UPDATED to OWn API - PERFECT 
export async function getAllPlanets() {
	const response = await fetch(
		"https://3000-sharpsight44-starwarspy-nwbn51tv9b2.ws-us45.gitpod.io/planets"
	);
	const payload = await response.json();

	return payload
}


export async function getSinglePlanet(i) {
		
		
	const response = await fetch(
		"https://3000-sharpsight44-starwarspy-nwbn51tv9b2.ws-us45.gitpod.io/planets/" + i
		);
		const payload = await response.json();
		
		return payload.planet
	}

export async function getAllShips() {
	const response = await fetch(
		"https://swapi.dev/api/starships"
	);
	const payload = await response.json();

	return payload.results
}

export async function getShipLocal(i) {
	

	const response = await fetch(
		"https://swapi.dev/api/starships/" + i
	);
	const payload = await response.json();

	return payload
}


