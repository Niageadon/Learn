"use strict";

// version = 1
self.addEventListener('install', onInstall)
self.addEventListener('activate', onActivate)

main().catch(console.error)
///
async function main() {
	console.log('my sw is starting...')
}
async function onInstall(event) {
	console.log('my sw installed...')
	self.skipWaiting()
}
function onActivate(event) {
	event.waitUntil(handleActivation())
}

async function handleActivation() {
	await clients.claim()
	console.log('my sw activated...')
	
}
