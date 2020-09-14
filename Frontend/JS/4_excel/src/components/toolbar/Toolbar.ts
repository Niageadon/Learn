import ExcelComponent from "@core/ExcelComponent.ts";
import {Dom} from "@core/dom.ts";

export default class Toolbar extends ExcelComponent{
	constructor($root: Dom) {
		super($root, {
			name: 'Toolbar',
			listeners: ['click'],
		});
	}
	static className = 'excel__toolbar'

	getClassName(): string {
		return 'excel__toolbar'
	}
	onClick(event: Event): void {
		console.log(event.target)
	}

	toHTML(): string {
		return `<div class="excel__header-button">
			<i class="material-icons">format_align_left</i>
		</div>
		<div class="excel__toolbar-button">
			<i class="material-icons">format_align_center</i>
		</div>
		<div class="excel__toolbar-button">
			<i class="material-icons">format_align_right</i>
		</div>
		<div class="excel__toolbar-button">
			<i class="material-icons">format_bold</i>
		</div>
		<div class="excel__toolbar-button">
			<i class="material-icons">format_italic</i>
		</div>
		<div class="excel__toolbar-button">
			<i class="material-icons">format_underlined</i>
		</div>`
	}
}
