import ExcelComponent from "@core/ExcelComponent.ts";
import {$, Dom} from "@core/dom.ts";
type componentType = typeof ExcelComponent
console.log(22, typeof ExcelComponent, ExcelComponent)
export default class Excel {
	$el: Dom
	components: ExcelComponent[]
	componentsConstructors: Array<componentType>

	constructor(selector: string, options: Options) {
		this.$el = $(selector)
		this.componentsConstructors = options?.components ?? []
		this.components = []
	}
	getRoot(): Dom {
		const $root: Dom = $.create('div', 'excel')
		this.components = this.componentsConstructors.map(Component => {
			const $el: Dom = $.create('div', Component.className)
			const component = new Component($el)
			$el.html(component.toHTML())
			$root.append($el)
			return component
		})

		const node = document.createElement('h1')
		node.textContent = 'boba'
		return $root
	}
	render(): void {
		this.$el.append(this.getRoot())
		this.components.forEach(component => component.init())
	}
}

interface Options {
	components: componentType[]
}
