import ExcelComponent from "@core/ExcelComponent.ts";

export default class Table extends ExcelComponent{
	constructor(props) {
		super(props, {
			name: 'Formula',
			listeners: ['input'],
		});
	}
	static className = 'excel__table'

	getClassName(): string {
		return 'excel__table'
	}
	toHTML(): string {
		return `
				<div class="excel__table-row">
				<div class="excel__table-row-info"></div>
				<div class="excel__table-row-data">
					<div class="excel__table-column">A</div>
					<div class="excel__table-column">B</div>
					<div class="excel__table-column">C</div>
				</div>
			</div>
	
			<div class="excel__table-row">
				<div class="excel__table-row-info">1</div>
				<div class="excel__table-row-data">
					<div class="excel__table-cell selected" contenteditable>a1</div>
					<div class="excel__table-cell" contenteditable>b1</div>
					<div class="excel__table-cell" contenteditable>c1</div>
				</div>
			</div>
	
			<div class="excel__table-row">
				<div class="excel__table-row-info">1</div>
				<div class="excel__table-row-data">
					<div class="excel__table-cell" contenteditable>a2</div>
					<div class="excel__table-cell" contenteditable>b2</div>
					<div class="excel__table-cell" contenteditable>c3</div>
				</div>
			</div>
		`
	}
}
