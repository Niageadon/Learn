import ExcelComponent from "@core/ExcelComponent.ts";

export default class Toolbar extends ExcelComponent{
	constructor() {
		super();
	}

	getClassName(): string {
		return 'excel__toolbar'
	}
	toHTML(): string {
		return `<h1>toolbar</h1>`
	}
}
