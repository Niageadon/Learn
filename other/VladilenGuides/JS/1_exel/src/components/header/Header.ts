import ExcelComponent from "@core/ExcelComponent.ts";

export default class Header extends ExcelComponent{
	toHTML(): string {
		return `<h1>header</h1>`
	}
}
