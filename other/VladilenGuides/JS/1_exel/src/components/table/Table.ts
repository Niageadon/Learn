import ExcelComponent from "@core/ExcelComponent.ts";

export default class Table extends ExcelComponent{
	toHTML(): string {
		return `<h1>table</h1>`
	}
}
