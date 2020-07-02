class Dom {
	$el: HTMLElement
	constructor(selector: string|HTMLElement) {
		this.$el = typeof selector === "string"
			? document.querySelector(selector)
			: selector

	}
}

export function $(selector) {
	return new Dom(selector)
}

$.create = (tagName: string, classes?: string): HTMLElement => {
	const el: HTMLElement = document.createElement(tagName)
	if(classes) {
		el.classList.add(classes)
	}
	return el
}
