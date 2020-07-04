import ExcelComponent from "@core/ExcelComponent.ts";
import {createTable} from "@/components/table/table.template.ts";
import {Dom} from "@core/dom.ts";

export default class Table extends ExcelComponent{
	constructor($root: Dom) {
		super($root, {
			name: 'Table',
			listeners: [
				'mousedown',
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
	onMousedown(event: any) {
		console.log('table-mousedown', event.target.getAttribute('data-resize'))
		if(event.target.dataset.resize) {
			
		}
	}

}
