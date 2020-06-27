import {h} from 'vue'

function render() {
	// type, data&props, child's
	return h('div', {
		attrs: {
			id: foo
		},
		on: {
			click: this.onClick
		}
	}, 'hello')
}


