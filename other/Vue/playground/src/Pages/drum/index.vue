<template>
    <div id="app">
        <h1>Барабан</h1>
        <TheDrum :list="content"/>
    </div>
</template>

<script>
import TheDrum from './TheDrum'
export default {
    name: 'drum',
    components: {
        TheDrum
    },
    data() {
        return {
            content: [],
        }
    },
    created() {
        this.content = new Array(30).fill(null).map((value, index) => {
            let title = 'lorem';
            let text = 'lorem';
            while (Math.random() < 0.8) {
                title += ' lorem'
            }
            while (Math.random() < 0.97) {
                text += ' lorem'
            }
            return {title, text, id: index}
        })

    }
}
</script>

<style scoped lang="scss">

</style>
