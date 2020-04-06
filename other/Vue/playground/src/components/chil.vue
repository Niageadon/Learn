<template>
    <div>
        <input type="text" :value="msg" @input="onInput">
    </div>
</template>

<script>

export default {
    name: 'App',
    model: {
        prop: 'msg',
        event: 'change'
    },
    props: {
        msg: {}
    },
    methods: {
        onInput(event) {
            console.log(event)
            this.$emit('change', event.target.value)
        }
    }
}
</script>

<style>
</style>
