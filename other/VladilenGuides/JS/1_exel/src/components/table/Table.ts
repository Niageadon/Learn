import ExcelComponent from "@core/ExcelComponent.ts";
import {createTable} from "@/components/table/table.template.ts";

export default class Table extends ExcelComponent{
	constructor(props) {
		super(props, {
			name: 'Table',
			listeners: [],
		});
	}
	static className = 'excel__table'

	getClassName(): string {
		return 'excel__table'
	}
	toHTML(): string {
		return createTable(100)
	}
}
