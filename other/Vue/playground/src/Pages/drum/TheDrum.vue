<template>
    <ul class="carusel" ref="carusel">
       <li class="carusel-item" v-for="(item) in list"
           :key="item.id"
           :ref="'carusel-item-' + item.id"
            @click="selectItem(item)"
       >
           {{item.title}}
           <div v-show="item.id == selectedItemId">{{item.text}}</div>
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
            selectedItemId: 0
        }
    },
    methods: {
        selectItem(item) {
            this.selectedItemId = item?.id;
            this.scrollToCard()
        },
        scrollToCard() {
            // Если в квери есть выбранная активити, то скроллимся к неё, в противном случае ищем "активную" сами
            let wrapper = this.$refs['carusel'];
            let carusel = wrapper && wrapper.getBoundingClientRect()
            let item = this.$refs[`carusel-item-${this.selectedItemId}`][0]
            item = item && item.getBoundingClientRect()
            this.$nextTick(() => {
                let options = {
                    behavior: 'smooth'
                };
                options.top = item.y - carusel.height / 2 + item.height / 2 + carusel.top;
                wrapper.scrollTo(options);
                console.log(carusel, item, options)

            })
            //let selectedItem = carusel.querySelector(`.carusel-item-${this.selectedItemId}`);
            //let selectedItem = this.$refs[`carusel-item-${this.selectedItemId}`];
            //selectedItem = selectedItem.getBoundingClientRect();
        },

    },
    created() {
    }
}
</script>

<style scoped lang="scss">
    .carusel{
        overflow: hidden;
        height: 500px;
        width: 80%;
        max-width: 400px;
        &-item{
            border: 2px solid black;
            div{
                padding-left: 20px;
            }
        }
    }
</style>
