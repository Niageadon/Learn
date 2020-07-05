import ExcelComponent from "@core/ExcelComponent.ts";
import {createTable} from "@/components/table/table.template.ts";
import {Dom, $} from "@core/dom.ts";
import {CellBorder} from "./resize-stip-namespace"

export default class Table extends ExcelComponent{
	constructor($root: Dom) {
		super($root, {
			name: 'Table',
			listeners: [
				'mousedown',
			],
		});
	}
	static className = 'excel__table'

	getClassName(): string {
		return 'excel__table'
	}
	toHTML(): string {
		return createTable(100)
	}
	onMousedown(event: any) {
		const target = $(event.target);
		const type = event.target.dataset.resize
		//console.log('table-mousedown', $el.getAttribute('data-resize'))
		const border: CellBorder = {el: target.$el}
		const resizeStrip: CellBorder = {}

		if(type) {
			document.addEventListener('mouseup', mouseUp)
			document.addEventListener('mousemove', mousemove)
			addResizeStrip()
		}


		function addResizeStrip() {
			resizeStrip.el = document.createElement('div')
			resizeStrip.el.classList.add('excel__table-row-resize-strip')
			border.el.append(resizeStrip.el)
		}
		function clear() {
			document.removeEventListener('mouseup', mouseUp)
			document.removeEventListener('mousemove', mousemove)
			border.el.removeChild(resizeStrip.el)
		}
		function mouseUp() {
			clear()
		}
		function mousemove({screenX, screenY}) {
			border.position = screenX
		}
	}

}
