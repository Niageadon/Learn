(function Blog(){
	"use strict";

	let offlineIcon, sw, swRegistration;
	let isOnline = ("onLine" in navigator) ? navigator.onLine: true
	let isLoggedIn = /isLoggedIn=1/.test(document.cookie.toString() || "");
	let usingSW = ('serviceWorker' in navigator)
	
	
	document.addEventListener("DOMContentLoaded",ready,false);
	initServiceWorker()
		.catch(console.error)

	// **********************************

	function ready() {
		offlineIcon = document.getElementById("connectivity-status");
		
		if(!isOnline) {
			offlineIcon.classList.remove('hidden')
		}
		window.addEventListener('isOnline', function online() {
			offlineIcon.classList.add('hidden')
			isOnline = true
			sendStatusUpdate()
		})
		window.addEventListener('offline', function offline() {
			offlineIcon.classList.remove('hidden')
			isOnline = false
			sendStatusUpdate()
		})
	}
	async function initServiceWorker() {
		swRegistration = await navigator.serviceWorker.register('/sw.js', {
			updateViaCache: 'none'
		})
		sw = swRegistration.installing ?? swRegistration.waiting ?? swRegistration.active
		navigator.serviceWorker.addEventListener('controllerchange', () => {
			sw = navigator.serviceWorker.controller
			sendStatusUpdate(sw)
		})
		navigator.serviceWorker.addEventListener('message', onSWMessage)
	}
	
	async function onSWMessage(event) {
		let { data } = event
		if (data.requestStatusUpdate) {
			console.log('received status upd req from sw')
			sendStatusUpdate(event.ports?.[0])
		}
	}
	
	function sendStatusUpdate(target) {
		sendSWMessage({ statusUpdate: { isOnline, isLoggedIn }}, target)
	}
	
	async function sendSWMessage(msg, target) {
		if (target) {
			target.postMessage(msg)
		} else if(sw) {
			sw.postMessage(msg)
		} else {
			navigator.serviceWorker.controller.postMessage(msg)
		}
		
	}
})();
