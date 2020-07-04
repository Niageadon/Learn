import ExcelComponent from "@core/ExcelComponent.ts";
import {createTable} from "@/components/table/table.template.ts";
import {Dom} from "@core/dom.ts";

export default class Table extends ExcelComponent{
	constructor($root: Dom) {
		super($root, {
			name: 'Table',
			listeners: [
				'click',
				'mousedown',
				'mousemove',
				'mouseup',
			],
		});
	}
	static className = 'excel__table'

	getClassName(): string {
		return 'excel__table'
	}
	toHTML(): string {
		return createTable(100)
	}
	onClick() {
		console.log('table-click')
	}
	onMousedown(event: Event) {
		console.log('table-mousedown', event.target)
	}
	onMousemove() {
		console.log('table-mousemove')
	}
	onMouseup() {
		console.log('table-mouseup')
	}

}
