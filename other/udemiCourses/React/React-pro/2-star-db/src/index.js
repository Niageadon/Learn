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
		return res.results;
	}
	async getPerson(id) {
		return await this.fetchData(`/people/${id}`)
	}
	async getAllPlanets() {
		const res = await this.fetchData('/planets');
		console.log(res)
		return res.results;
	}
	async getPlanet(id) {
		return await this.fetchData(`/planets/${id}`)
	}
	async getAllStarships() {
		const res = await this.fetchData('/starships');
		console.log(res)
		return res.results;
	}
	async getStarship(id) {
		return await this.fetchData(`/starships/${id}`)
	}
}
const swapi = new Swapi();

swapi.fetchData('/people/1')
    //.then(console.log)

swapi.getAllPeople().then(console.log)

