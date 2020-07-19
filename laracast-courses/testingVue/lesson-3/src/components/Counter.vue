<template>
    <div>
        <span class="count" v-text="count"></span>
        <button @click="count++" class="inc">Increment</button>
        <button @click="count--" class="dec">Increment</button>
    </div>
</template>

<script>
	export default {
		data () {
			return {
				count: 0
			};
		}
	}
</script>
