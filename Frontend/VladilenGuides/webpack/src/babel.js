async function start() {
	return await Promise.resolve('some text')
}

let bob;
start().then(console.log(234))
console.log(22)

class User {
	static id = Date.now()
}

console.log('user-id', User.id)

import('lodash').then(_ => {
	console.log('__', _.random(1, 44, true))
})
