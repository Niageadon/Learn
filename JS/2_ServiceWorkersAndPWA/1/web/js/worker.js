"use strict";

let curFib = 0;
self.postMessage('hello from worker')
self.onmessage = onMessage
// **********************************

function onMessage(event) {
	console.log('Received in worker: ', event.data)
	getNextFib()
}
function getNextFib() {
	let fibNum = fib(curFib)
	self.postMessage({ fib: fibNum, index: curFib,  })
	curFib++
	getNextFib()
}
function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n-1) + fib(n-2);
}
