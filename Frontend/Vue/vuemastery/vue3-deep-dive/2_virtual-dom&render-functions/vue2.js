
function render(h) {
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


