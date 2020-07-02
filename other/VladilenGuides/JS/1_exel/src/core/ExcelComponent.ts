import DOMListener from '@core/DOMListener.ts'
import {Dom} from "@core/dom";

export default class ExcelComponent extends DOMListener {
	className: string
	constructor($root: Dom, options?: ComponentOptions) {
		super($root, options.listeners);
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
