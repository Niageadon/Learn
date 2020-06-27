import ExcelComponent from "@core/ExcelComponent.ts";

export default class Formula extends ExcelComponent {
	constructor() {
		super();
	}

	getClassName(): string {
		return 'excel__formula'
	}
	toHTML(): string {
		return `<h1>formula</h1>`
	}
}
