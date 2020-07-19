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
		const table = document.querySelector('.excel__table')
		//console.log('table-mousedown', $el.getAttribute('data-resize'))
		const border: CellBorder = {
			el: target.$el,
			//position: target.$el.getClientRects()[0].x,
			info: target.$el.getClientRects()[0],
		}
		const resizeStrip: CellBorder = {}
		if(type) {
			document.addEventListener('mouseup', mouseUp)
			document.addEventListener('mousemove', mousemove)
			addResizeStrip()
		}


		function calcNewSize(targetBorder: CellBorder, newPos: number): void {
			const target: HTMLElement = targetBorder.el.parentElement
			const targetInfo: DOMRect = target.getClientRects()[0]
			const width: number = newPos - targetBorder.info.x + targetInfo.width
			target.style.width = width + 'px'
		}
		function addResizeStrip() {
			resizeStrip.el = document.createElement('div')
			resizeStrip.el.classList.add('excel__table-row-resize-strip')
			resizeStrip.el.style.left = `${border.info.x}px`
			table.append(resizeStrip.el)
		}
		function clear() {
			document.removeEventListener('mouseup', mouseUp)
			document.removeEventListener('mousemove', mousemove)
			table.removeChild(resizeStrip.el)
		}
		function mouseUp() {
			calcNewSize(border, resizeStrip.position)
			clear()
		}
		function mousemove({screenX, screenY}) {
			resizeStrip.el.style.left = `${screenX}px`
			resizeStrip.position = screenX
		}
	}

}
