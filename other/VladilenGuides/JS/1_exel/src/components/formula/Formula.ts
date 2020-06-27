import ExcelComponent from "@core/ExcelComponent.ts";

export default class Formula extends ExcelComponent{
	toHTML(): string {
		return `<h1>formula</h1>`
	}
}
