(function Home(){
	"use strict";
	
	let startStopBtn, fibsList, worker

	document.addEventListener("DOMContentLoaded",ready,false);


	// **********************************

	function ready() {
		startStopBtn = document.getElementById("start-stop-btn");
		fibsList = document.getElementById("fibs");

		startStopBtn.addEventListener("click",startFibs,false);
	}

	function renderFib(num,fib) {
		let p = document.createElement("div");
		p.innerText = `Fib(${num}): ${fib}`;
		if (fibsList.childNodes.length > 0) {
			fibsList.insertBefore(p,fibsList.childNodes[0]);
		}
		else {
			fibsList.appendChild(p);
		}
	}

	function startFibs() {
		startStopBtn.removeEventListener("click",startFibs,false);
		startStopBtn.addEventListener("click",stopFibs,false);

		startStopBtn.innerText = "Stop";
		fibsList.innerHTML = "";

		worker = new Worker('js/worker.js')
		worker.addEventListener('message', onMessage)
		worker.postMessage({ start: true })
	}

	function stopFibs() {
		startStopBtn.removeEventListener("click",stopFibs,false);
		startStopBtn.addEventListener("click",startFibs,false);

		startStopBtn.innerText = "Start";
		worker.terminate()
	}

	function onMessage(event) {
		console.log(event.data)
		//worker.postMessage('Hello from client')
		renderFib(event.data.index, event.data.fib)
	}
})();
