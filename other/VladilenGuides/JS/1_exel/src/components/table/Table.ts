import ExcelComponent from "@core/ExcelComponent.ts";

export default class Table extends ExcelComponent{
	constructor() {
		super();
	}

	getClassName(): string {
		return 'excel__table'
	}
	toHTML(): string {
		return `<h1>table</h1>`
	}
}
