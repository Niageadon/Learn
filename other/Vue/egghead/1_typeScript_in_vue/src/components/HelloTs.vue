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
	beforeRouteEnter(to, from ,next) {
		console.log('before route enter')
	}
}

</script>
