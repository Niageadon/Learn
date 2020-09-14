<template>
	<ul>
		<li v-for="user in users" :key="user.id">{{user.name}}</li>
	</ul>
</template>
<script lang="ts">
import { Vue, Component, Inject } from "vue-property-decorator";
@Component({
})
export default class Child extends Vue {
	@Inject('myHttpModule') http: any
	users = []
	created() {
		this.http('https://jsonplaceholder.typicode.com/users')
		.then(re => re.json())
		.then(re => this.users = re)
	}
}

</script>
