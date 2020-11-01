// Dependency Inversion Principle
class Workplace {
	constructor(worker) {
		this.worker = worker
	}
	
	work() {
		this.worker.work()
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

class Worker{
}
class FrontendWorker extends Worker{
	constructor(){
		super();
		this.front = new Front()
	}
	
	work() {
		this.front.doFront()
	}
}
class BackendWorker extends Worker{
	constructor(){
		super();
		this.back = new Backend()
	}
	
	work() {
		this.back.doBack()
	}
}



const stol = new Workplace(new FrontendWorker())
stol.work()
