import Component, { createDecorator } from 'vue-class-component'
export default (msg?: string) => {
	return createDecorator((component, key) => {
		console.log('component', component)
		console.log('key', key)
		console.log('msg', msg)
	})
}
