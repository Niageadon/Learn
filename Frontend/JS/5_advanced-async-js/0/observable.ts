interface IObserver {
	next: (v?: unknown) => void
	complete: () => void
	error?: (e?: unknown) => void
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

	static fromEvent(domEl: HTMLElement, eventName: string) {
		return new Observable((observer) => {
			const handler = (event: unknown) => {
				observer.next(event)
			}

			domEl.addEventListener(eventName, handler)
			return {
				unsubscribe() {
					domEl.removeEventListener(eventName, handler);
				}
			}
		})
	}

	static allNumbers() {
		return new Observable((observer) => {
			let num = 0;
			while (1) {
				observer.next(num++);
			}
			return {
				unsubscribe() {
				}
			}
		})
	}

	public map(projection: (v: unknown) => unknown) {
		return new Observable(observer => {
			const subscription = this.subscribe({
				next(v) {
					try {
						const value = projection(v);
						observer.next(value);
					}
					catch (e) {
						observer.error && observer.error(e);
						subscription.unsubscribe();
					}
				},
				complete() {
					observer.complete();
				},
				error(e) {
					observer.error && observer?.error(e);
					subscription.unsubscribe();
				}
			})
			return({
				unsubscribe() {
					subscription.unsubscribe();
				}
			})
		})
	}

	public concat(...observables: Observable[]): Observable {
		return new Observable((observer) => {
			const myObservables = [...observables];
			let sub: IObservableResponse = null;

			let processObservable = () => {
				if (!myObservables.length) {
					observer.complete();
				} else {
					let observable = observables.shift();
					sub = observable.subscribe({
						next(v) {
							observer.next(v)
						},
						error(e) {
							observer.error(e);
							sub.unsubscribe();
						},
						complete() {
							processObservable();
						},
					})
				}
			}

			processObservable();
			return {
					unsubscribe() {
						sub.unsubscribe();
					}
				}
		})
	}

	public filter(projection: (v: unknown) => unknown) {
		return new Observable(observer => {
			const subscription = this.subscribe({
				next(v) {
					try {
						const condition = projection(v);
						if (condition){
							observer.next(v);
						}
					}
					catch (e) {
						observer.error && observer.error(e);
						subscription.unsubscribe();
					}
				},
				complete() {
					observer.complete();
				},
				error(e) {
					observer.error && observer.error(e);
					subscription.unsubscribe();
				}
			})
			return({
				unsubscribe() {
					subscription.unsubscribe();
				}
			})
		})
	}

	constructor(private _subscribe: (observer: IObserver) => IObservableResponse) {}
}

/*
const btn = document.getElementById('btn');
const click$ = Observable.fromEvent(btn as HTMLElement, 'click');
click$.subscribe({
	next() {
		console.log('btn click next event')
	},
	complete() {}
})
*/

const obs = Observable.timeout(777);
obs.subscribe({
	next() {
		console.log('next', + new Date())
	},
	complete() {
		console.log('done', + new Date())
	}
})

const num$ = Observable.allNumbers();
num$.filter((el) => (el as number) < 1000).map(el => el as number * 2).subscribe({
	next(v) {
		console.log(33, v)
	},
	complete() {}
})
