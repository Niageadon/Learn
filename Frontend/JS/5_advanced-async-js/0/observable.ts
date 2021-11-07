interface IObserver {
	next: () => void
	complete: () => void
}

interface IObservableResponse {
	unsubscribe: () => void
}

class Observable {
	subscribe(observer: IObserver) {
		return this._subscribe(observer);
	}

	static timeout(time: number) {
		return new Observable(function subscribe(observer: IObserver): IObservableResponse {
			const delay = setTimeout(() => {
				observer.next();
				observer.complete();
			}, time);

			return {
				unsubscribe() {
					clearTimeout(delay);
				}
			}
		})
	}

	constructor(private _subscribe: (observer: IObserver) => IObservableResponse) {}
}

const obs = Observable.timeout(777);
obs.subscribe({
	next() {
		console.log('next', + new Date())
	},
	complete() {
		console.log('done', + new Date())
	}
})

obs.subscribe({
	next() {
		console.log('next', + new Date())
	},
	complete() {
		console.log('done', + new Date())
	}
})
