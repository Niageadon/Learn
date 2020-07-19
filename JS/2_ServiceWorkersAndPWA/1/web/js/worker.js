"use strict";

let curFib = 0;
self.postMessage('hello from worker')
// TODO

// **********************************

function fib(n) {
	if (n < 2) {
		return n;
	}
	return fib(n-1) + fib(n-2);
}
