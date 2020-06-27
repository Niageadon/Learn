import DOMListener from '@core/DOMListener.ts'

export default class ExcelComponent extends DOMListener {
	className: string
	constructor() {
		super();
	}

	toHTML(): string {
		return ''
	}
	getClassName(): string {
		return ''
	}
}
