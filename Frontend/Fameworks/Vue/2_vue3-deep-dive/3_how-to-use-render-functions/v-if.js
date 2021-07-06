import {h} from 'vue'
const App = {
	render() {
		return this.ok
		? h('div', {id: 'hello',}, [h('span', 'world')])
		: h('p', 'other branch')
	}
}

// <div id="hello" v-if=of> <span>world</span> </div>
// <p v-else>other branch</p>
