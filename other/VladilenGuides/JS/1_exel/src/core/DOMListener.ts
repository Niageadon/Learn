import {Dom} from "@core/dom.ts";
import {capitalize} from "@core/utils.ts";

export default class DOMListener {
	$root: Dom
	listeners: Array<string>
	name: string
	constructor($root: Dom, listeners: Array<string>) {
		this.$root = $root
		this.listeners = listeners
	}
	initDomListeners(): void {
		this.listeners.forEach(listener => {
			const method: string = getMethodName(listener)
			if(!this[method]) {
				throw new Error(`Method ${method} not exist in ${this.name}`)
			}
			console.log(321, this)
			this.$root.on(listener, this[method].bind(this))
		})
	}
	removeDomListeners() {

	}
}
function getMethodName(eventName: string): string {
	return 'on' + capitalize(eventName)
}
