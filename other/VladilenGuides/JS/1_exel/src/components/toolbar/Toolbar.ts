import ExcelComponent from "@core/ExcelComponent.ts";

export default class Toolbar extends ExcelComponent{
	toHTML(): string {
		return `<h1>toolbar</h1>`
	}
}
