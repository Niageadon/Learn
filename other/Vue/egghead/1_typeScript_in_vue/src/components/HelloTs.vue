<template>
	<h1>hello ts</h1>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component({})
export default class HelloTs extends Vue {
	created() {
		console.log('hello-ts created')
	}
	beforeRouteEnter(to: any, from: any, next: any) {
		console.log('before route enter')
	}
}

</script>
