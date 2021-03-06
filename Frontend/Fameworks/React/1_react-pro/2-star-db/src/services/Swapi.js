class Planet {
	constructor(planet) {
		{
			this.name = planet.name;
			this.population = planet.population;
			this.rotationPeriod = planet.rotation_period;
			this.diameter =  planet.diameter;
			this.id = getIdFromLink(planet.url)
		}
	}
}
class Person {
	constructor(person) {
		this.name = person.name;
		this.gender = person.gender;
		this.birthYear = person.birth_year;
		this.eyeColor = person.eye_color ;
		this.id = getIdFromLink(person.url)
	}
}
class Starship {
	constructor(starship) {
		this.name = starship.name;
		this.model = starship.model;
		this.manufacturer = starship.manufacturer;
		this.costInCredits = starship.costInCredits;
		this.lenght = starship.lenght;
		this.crew = starship.crew;
		this.passengers = starship.passengers;
		this.cargoCapacity = starship.cargoCapacity;
	}
}

class Swapi {
	baseUrl = 'https://swapi.dev/api'
	fetchData = async(url) => {
		try {
			const resp = await fetch(this.baseUrl + url)
			if(!resp.ok) {
				throw Error(`Could't fetch ${this.baseUrl + url}, received ${resp.status}`)
			}
			return await resp.json();
		}
		catch (e) {
			throw e
		}
	}
	getAllPeople = async () => {
		const res = await this.fetchData('/people');
		return res.results.map(el => new Person(el));
	}
	getPerson = async (id) => {
		return new Person(await this.fetchData(`/people/${id}`))
	}
	getPersonImgUrl = (id) => {
		return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
	}
	getAllPlanets = async () => {
		const res = await this.fetchData('/planets');
		return res.results.map(el => new Planet(el));
	}
	getPlanet = async (id) => {
		return new Planet(await this.fetchData(`/planets/${id}`))
	}
	getPlanetImgUrl = (id) => {
		return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
	}
	getAllStarships = async () => {
		const res = await this.fetchData('/starships');
		return res.results.map(el => new Starship(el));
	}
	getStarship = async (id) => {
		return await this.fetchData(`/starships/${id}`)
	}
	getStarshipImgUrl = (id) => {
		return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
	}
}

const getIdFromLink = (link) => {
	const reg = /\/([0-9]*)\/$/;
	return link.match(reg)[1]
}


const swapi = new Swapi();
export default swapi;


