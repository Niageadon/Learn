import ExcelComponent from "@core/ExcelComponent";

export default class Excel {
	$el: HTMLElement
	components: ExcelComponent[]

	constructor(selector: string, options: Options) {
		this.$el = document.querySelector(selector)
		this.components = (options?.components ?? []).map(el => {
			const $el = document.createElement('div')
			const component = new el($el)
			$el.innerHTML = el.getClassName()
			return new el($el)
		})
	}
	getRoot(): HTMLElement {
		const $root: HTMLElement = document.createElement('div')
		$root.classList.add('excel')
		this.components.forEach(Component => {
			console.log(Component.getClassName())

			$root.insertAdjacentHTML('afterbegin', Component.toHTML())
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
