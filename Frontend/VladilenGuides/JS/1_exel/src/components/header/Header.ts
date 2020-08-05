import ExcelComponent from "@core/ExcelComponent.ts";

export default class Header extends ExcelComponent {

	constructor(props) {
		super(props, {
			name: 'Header',
			listeners: [],
		});
	}
	static className = 'excel__header'

	getClassName(): string {
		return 'excel__header'
	}
	toHTML(): string {
		return `<input type="text" class="excel__header-input" value="new table"/>
		<div class="row">
			<div class="excel__header-button">
			<i class="material-icons">exit_to_app</i>
		</div>
		<div class="excel__header-button">
			<i class="material-icons">delete</i>
			</div>
		</div>`
	}
}
