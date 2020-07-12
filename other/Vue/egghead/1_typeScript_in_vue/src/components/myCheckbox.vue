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
import { Vue, Component, Prop, Model } from "vue-property-decorator";
@Component({})
export default class MyCheckbox extends Vue {
	@Prop() title: string | undefined
	@Prop() value: string | undefined
	@Prop()
	@Model('change') checked: boolean | undefined
	change(event: any) {
		this.$emit('change', event.target.checked)
	}
}

</script>
