// Dependency Inversion Principle
class Workplace {
	constructor(worker) {
		this.worker = worker
	}
	
	work() {
		this.worker.doFront()
		//this.worker.doBack
	}
}

class Front {
	doFront() {
		console.log('some front work')
	}
}

class Backend {
	doBack() {
		console.log('some back work')
	}
}
const stol = new Workplace(new Front())
stol.work()
