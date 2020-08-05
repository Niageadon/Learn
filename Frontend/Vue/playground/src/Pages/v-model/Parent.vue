<template>
    <div id="app">
        <child v-model="message"/>
    </div>
</template>

<script>
import child from './Child.vue'

export default {
    name: 'App',
    data() {
        return {
            message: 'boba'
        }
    },
    components: {
        child
    }
}
</script>

<style>
</style>
