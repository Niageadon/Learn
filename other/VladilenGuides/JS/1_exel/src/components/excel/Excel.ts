import ExcelComponent from "@core/ExcelComponent";
import {$} from "@core/dom.ts";

export default class Excel {
	$el: HTMLElement
	components: Array<any>//ExcelComponent[]
	constructor(selector: string, options: Options) {
		this.$el = document.querySelector(selector)
		this.components = options?.components ?? []
	}
	getRoot(): HTMLElement {
		const $root: HTMLElement = $.create('div', 'excel')
		this.components.forEach(Component => {
			const $el: HTMLElement = $.create('div', Component.className)
			const component = new Component($el)
			$el.innerHTML = component.toHTML()
			$root.append($el)
		})

		const node = document.createElement('h1')
		node.textContent = 'boba'
		return $root
	}
	render(): void {
		this.$el.append(this.getRoot())
	}
}

interface Options {
	components: any[]
}
