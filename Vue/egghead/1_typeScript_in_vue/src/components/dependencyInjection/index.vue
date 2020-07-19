<template>
	<div>
		<Child/>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import myCheckbox from "./myCheckbox.vue";
import Child from "./Child.vue";
@Component({
	components: {
		Child
	}
})
export default class Parent extends Vue {
	@Provide('myHttpModule') http: any = (...args) => fetch(...args)
}

</script>
