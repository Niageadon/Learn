import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class Parent extends Vue {
	decrement() {
		console.log('parent decrement')
	}
	parentClicked() {
		console.log('parent click')
	}
}
