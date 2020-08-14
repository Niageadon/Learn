<template>
	<div>
		<button @click="click">click </button>
	</div>
</template>
<script lang="ts">
import { Vue, Component, Provide } from "vue-property-decorator";
import { afterMethod } from 'kaop-ts'
/*const bob = (..args) => afterMethod(meta => {
	console.log(123, meta)
})*/

@Component
export default class Aop extends Vue {
val = 123
@afterMethod(() => console.log('after-click'))
click() {
	console.log('click')
}
}

</script>
