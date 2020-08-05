"use strict";

const version = 5
let isOnline = true
let isLoggedIn = false
let cacheName = `ramblings-${version}`
const urlsToCache = {
	loggedOut: [
		"/",
		"/about",
		"/contact",
		"/login",
		"/404",
		"/js/blog.js",
		"/js/home.js",
		"/js/login.js",
		"/js/add-post.js",
		"/css/style.css",
		"/images/logo.gif",
		"/images/offline.png",
	]
}

self.addEventListener('install', onInstall)
self.addEventListener('activate', onActivate)
self.addEventListener('message', onMessage)
self.addEventListener('fetch', onFetch)

main().catch(console.error)
///
async function main() {
	console.log('my sw is starting...')
	await sendMessage({ requestStatusUpdate: true })
	await cacheLoggedOutFiles()
}
function onFetch(event) {
	event.respondWith(router(event.request))
	
}
async function router(req) {
	let url = new URL(req.url)
	let reqUrl = url.pathName
	let cache = await caches.open(cacheName)
	if (url.origin == location.origin) {
		let res
		let fetchOptions = {
			credentials: 'omit',
			cache: 'no-store',
			method: req.method,
			headers: req.headers
		}
		try {
			res = await fetch(req.url, fetchOptions)
			if (res?.ok) {
				await cache.put(reqUrl, res.clone())
				return res
			}
		} catch (e) {
			throw e
		}
		res = await cache.match(reqUrl)
		if (res) {
			return res.clone()
		}
	}
}
async function onInstall(event) {
	console.log('my sw installed...')
	self.skipWaiting()
}
function onActivate(event) {
	event.waitUntil(handleActivation())
}

async function handleActivation() {
	await clearCaches()
	await cacheLoggedOutFiles(true)
	await clients.claim()
	console.log('my sw activated...')
	
}

async function sendMessage(msg) {
	let allClients = await clients.matchAll({ includeUncontrolled: true })
	return Promise.all(
		allClients.map(client => {
			let chan = new MessageChannel()
			chan.port1.onmessage = onMessage
			client.postMessage(msg, [chan.port2])
		})
	)
}

function onMessage({ data }) {
	if (data.statusUpdate) {
		isOnline = data.statusUpdate.isOnline
		isLoggedIn = data.statusUpdate.isLoggedIn
		console.log('sw status update', `is-online:${isOnline}`, `is-logged-in:${isLoggedIn}`)
	}
}

async function cacheLoggedOutFiles(forceReload = false) {
	let cache = await caches.open(cacheName)
	return Promise.all(
		urlsToCache.loggedOut.map(async url => {
			try {
				let res
				if(!forceReload) {
					res = await cache.match(url)
					if(res) return res
				}
				let fetchOptions = {
					method: 'GET',
					credentials: 'omit',
					cache: 'no-cache'
				}
				res = await fetch(url, fetchOptions)
				if(res.ok) {
					await cache.put(url, res.clone())
				}
			}
			catch (e) {
			
			}
		})
	)
}

async function clearCaches() {
	let cacheNames = await caches.keys()
	let oldCacheNames = cacheNames.filter(cacheName => {
		if(/ramblings-\d+$/.test(cacheName)) {
			let [, cacheVersion] = cacheName.match(/^ramblings-(\d+)$/)
			cacheVersion = (cacheVersion != null) ? Number(cacheVersion) : cacheVersion
			return (cacheVersion > 0 && cacheVersion !== version)
		}
	})
	return Promise.all(oldCacheNames.map(cacheName => caches.delete(cacheName)))
}
