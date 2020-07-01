import DOMListener from '@core/DOMListener.ts'

export default class ExcelComponent extends DOMListener {
	className: string
	constructor($root) {
		super($root);
	}
	static className = ''

	toHTML(): string {
		return ''
	}
	getClassName(): string {
		return ''
	}
}
