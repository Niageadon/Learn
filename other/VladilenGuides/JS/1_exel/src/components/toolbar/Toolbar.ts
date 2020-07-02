import ExcelComponent from "@core/ExcelComponent.ts";

export default class Toolbar extends ExcelComponent{
	constructor(props) {
		super(props, {
			name: 'Formula',
			listeners: ['input'],
		});
	}
	static className = 'excel__toolbar'

	getClassName(): string {
		return 'excel__toolbar'
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
