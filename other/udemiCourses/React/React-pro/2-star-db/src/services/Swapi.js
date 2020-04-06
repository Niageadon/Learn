class Planet {
	constructor(planet) {
		{
			this.name = planet.name;
			this.population = planet.population;
			this.rotationPeriod = planet.rotation_period;
			this.diameter =  planet.diameter;
		}
	}
}
class Person {
	constructor(person) {
		console.log(person)
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
	baseUrl = 'https://swapi.co/api'
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
	async getAllPeople() {
		const res = await this.fetchData('/people');
		console.log(res)
		return res.results.map(el => new Person(el));
	}
	async getPerson(id) {
		return new Person(await this.fetchData(`/people/${id}`))
	}
	async getAllPlanets() {
		const res = await this.fetchData('/planets');
		console.log(res)
		return res.results.map(el => new Planet(el));
	}
	async getPlanet(id) {
		return new Planet(await this.fetchData(`/planets/${id}`))
	}
	async getAllStarships() {
		const res = await this.fetchData('/starships');
		console.log(res)
		return res.results.map(el => new Starship(el));
	}
	async getStarship(id) {
		return await this.fetchData(`/starships/${id}`)
	}
}

const getIdFromLink = (link) => {
	const reg = /\/([0-9]*)\/$/;
	return link.match(reg)[1]
}


const swapi = new Swapi();
export default swapi;


