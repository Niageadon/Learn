const fetchData = async (url) => {
    try {
        const a = await fetch(url)
        return await a.json();
    }
    catch (e) {
        throw e
    }
}
fetchData('https://swapi.co/api/people/1')
    .then(console.log)

