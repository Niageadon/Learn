window.addEventListener('load', () => {console.log('loaded')})
//window.addEventListener('unload', () => {console.log('unload')})

const url = Deno.args[0]
const resp = await fetch(url)
const data = await resp.json()
await Deno.writeFile('data.json', new TextEncoder().encode(JSON.stringify(data)))


console.log(data)
// https://jsonplaceholder.typicode.com/todos/1
// deno run --allow-net fetch.ts  https://jsonplaceholder.typicode.com/todos/1
// deno run --allow-net=https://jsonplaceholder.typicode.com fetch.ts  https://jsonplaceholder.typicode.com/todos/1
