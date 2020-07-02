import {Dom} from "@core/dom";

export default class DOMListener {
	$root: Dom
	listeners: Array<string>
	constructor($root: Dom, listeners: Array<string>) {
		this.$root = $root
		this.listeners = listeners
	}
	initDomListeners() {
		console.log(22, this.listeners)
	}
	removeDomListeners() {

	}
	getClassName(): string {
		return ''
	}
}
