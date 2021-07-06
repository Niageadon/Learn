<template>
    <ul class="carusel" ref="carusel">
       <li class="carusel-item" v-for="(item) in list"
           :key="item.id"
           :ref="'carusel-item-' + item.id"
            @click="selectItem(item)"
       >
           {{item.title}}
           <div v-if="item.id == selectedItemId">{{item.text}}</div>
       </li>
    </ul>
</template>

<script>
export default {
    name: 'drum',
    props: {
        list: Array, // of{title: '', text: ''}
    },
    components: {
    },
    data() {
        return {
            selectedItemId: 0,
            prevItemHeight: 0,
        }
    },
    methods: {
        selectItem(item) {
            this.selectedItemId = item?.id;
        },
        scrollToCard() {
            this.$nextTick(() => {
                let wrapper = this.$refs['carusel'];
                let carusel = wrapper && wrapper.getBoundingClientRect()
                let item = this.$refs[`carusel-item-${this.selectedItemId}`][0]
                item = item && item.getBoundingClientRect()
                let options = {
                    behavior: 'smooth',
                };
                // Верхняя точка элемента - офсет карусели + текущий скролл -> получили верхную границу для скролла
                const y = item.y - carusel.y + wrapper.scrollTop;
                const middle = item.height / 2 - carusel.height / 2; // сместили верхнюю границу к центру элемента
                options.top = y + middle;
                wrapper.scrollTo(options);
            })
            //let selectedItem = carusel.querySelector(`.carusel-item-${this.selectedItemId}`);
            //let selectedItem = this.$refs[`carusel-item-${this.selectedItemId}`];
            //selectedItem = selectedItem.getBoundingClientRect();
        },
    },
    watch:{
        selectedItemId(to, from) {
            if((typeof to === 'number') && (to !== from)) {
                this.scrollToCard()
            }
        }
    },
    created() {
    }
}
</script>

<style scoped lang="scss">
    .carusel{
        overflow-y: scroll;
        height: 500px;
        width: 80%;
        max-width: 400px;
        margin: 0;
        position: relative;
        &-item{
            border: 1px solid black;
            list-style-type: none; /* Убираем маркеры */

            div{
                padding-left: 20px;
            }
        }
    }
</style>
