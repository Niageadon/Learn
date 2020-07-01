import ExcelComponent from "@core/ExcelComponent.ts";

export default class Formula extends ExcelComponent {
	constructor(props) {
		super(props);
	}
	static className = 'excel__formula'
	getClassName(): string {
		return 'excel__formula'
	}
	toHTML(): string {
		return `
			<div class="excel__formula-info">fx</div>
			<div class="excel__formula-input"
			     contenteditable spellcheck="false"
			>ff</div>
		`
	}
}
