import {h} from 'vue'
const App = {
	render() {
		return this.list.map(el => h('div', { key: el.id }, el.text))
	}
}

// <div id="hello" v-for="el in list" :key="el.id">
//      {{el.text}}
// </div>
