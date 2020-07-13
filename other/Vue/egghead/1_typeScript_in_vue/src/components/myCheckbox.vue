<template>
	<div>
		<input
			type="checkbox"
			:checked="checked"
			:value="value"
			@change="change"
			placeholder="inp"
		>
		{{title}}
	</div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Model, Watch } from "vue-property-decorator";
@Component({})
export default class MyCheckbox extends Vue {
	@Prop() title: string | undefined
	@Prop() value: string | undefined
	@Prop()
	@Model('change') checked: boolean | undefined
	@Watch('checked'/*, {deep: true* for object fields/}*/)
	watchCount(to: boolean, from: boolean) {
		console.log('change value to:', to)
	}
	change(event: any) {
		this.$emit('change', event.target.checked)
	}
}

</script>
