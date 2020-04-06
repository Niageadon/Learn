<template>
    <div id="app">
        <chil v-model="message"/>
    </div>
</template>

<script>
import chil from './components/chil.vue'

export default {
    name: 'App',
    data() {
        return {
            message: 'boba'
        }
    },
    components: {
        chil
    }
}
</script>

<style>
</style>
