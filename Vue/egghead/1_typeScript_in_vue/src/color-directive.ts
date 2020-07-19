import {DirectiveOptions} from "vue";

const directive: DirectiveOptions = {
	inserted(el, node) {
		el.style.backgroundColor = node.value.background
		el.style.color = node.value.color
		console.log('hello from directive')
	}
}
export default directive
