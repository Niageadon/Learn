import ExcelComponent from "@core/ExcelComponent.ts";
import {Dom} from "@core/dom";

export default class Formula extends ExcelComponent {
	constructor($root: Dom) {
		super($root, {
			name: 'Formula',
			listeners: ['input'],
		});
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
	onInput(event) {
		console.log('formula-on-input', event)
	}
}
