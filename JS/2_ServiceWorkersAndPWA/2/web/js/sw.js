"use strict";

// version = 1
self.addEventListener('install', onInstall)
self.addEventListener('activate', onActivate)

main().catch(console.error)
///
async function main() {
	console.log('my sw is starting...')
}
async function onInstall() {
	console.log('my sw installed...')
	self.skipWaiting()
}
async function onActivate() {
	console.log('my sw activated...')

}
