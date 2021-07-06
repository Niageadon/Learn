<template>
	<div>
		<h1>hello ts</h1>
		<my-checkbox
			:title="checkbox.title"
			:value="checkbox.value"
			v-model="checkbox.checked"
		>
		</my-checkbox>
		<Aop />
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import myCheckbox from "./myCheckbox.vue";
import Aop from "./aop/index.vue";
import Log from '../decorators/log'
@Component({
	components: {
		myCheckbox,
		Aop
	}
})
export default class HelloTs extends Vue {
	created() {
		console.log('hello-ts created')
	}
	beforeRouteEnter(to: any, from: any, next: any) {
		console.log('before route enter')
	}
	@Log()
	checkbox = {
		title: 'my checkbox',
		value: 'checkbox-id',
		checked: true
	}
}

</script>
