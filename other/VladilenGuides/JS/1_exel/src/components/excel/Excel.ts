export default class Excel {
	$el: HTMLElement
	components: any[]

	constructor(selector: string, options: Options) {
		this.$el = document.querySelector(selector)
		this.components = options?.components ?? []
	}
	getRoot(): HTMLElement {
		const $root: HTMLElement = document.createElement('div')
		this.components.forEach(Component => {
			$root.insertAdjacentHTML('afterbegin', new Component().toHTML())
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
