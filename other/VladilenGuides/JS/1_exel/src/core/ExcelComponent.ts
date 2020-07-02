import DOMListener from '@core/DOMListener.ts'
import {Dom} from "@core/dom";

export default class ExcelComponent extends DOMListener {
	className: string
	name: string
	constructor($root: Dom, options?: ComponentOptions) {
		super($root, options.listeners);
		this.name = options.name
	}
	static className = ''

	init() {
		this.initDomListeners()
	}
	toHTML(): string {
		return ''
	}
}

export interface ComponentOptions {
	name: string
	listeners: Array<string>
}
