import ExcelComponent from "@core/ExcelComponent.ts";

export default class Header extends ExcelComponent {

	constructor() {
		super();
	}

	getClassName(): string {
		return 'excel__header'
	}
	toHTML(): string {
		return `<h1>header</h1>`
	}
}
