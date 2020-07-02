export class Dom {
	$el: HTMLElement
	constructor(selector: string|HTMLElement) {
		this.$el = typeof selector === "string"
			? document.querySelector(selector)
			: selector

	}
	html(html?: string): string|Dom {
		if(typeof html === 'string') {
			this.$el.innerHTML = html
			return this
		} else {
			return this.$el.outerHTML.trim()
		}
	}
	clear(): Dom {
		this.html('')
		return this
	}
	append({ $el }: Dom): Dom {
		if(Element.prototype.append) {
			this.$el.append($el)
		} else {
			this.$el.appendChild($el)
		}
		return this
	}
}

export function $(selector: string|HTMLElement|undefined): Dom {
	return new Dom(selector)
}

$.create = (tagName: string, classes?: string): Dom => {
	const el: HTMLElement = document.createElement(tagName)
	if(classes) {
		el.classList.add(classes)
	}
	return $(el)
}
