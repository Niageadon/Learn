<!-- src/components/HelloDecorator.vue -->
<!-- This is an alternative way to define the Hello component using decorators -->
<template>
    <div>
        <div class="greeting">Hello {{exclamationMarks}}</div>
        <button @click="decrement">-</button>
        <button @click="increment">+</button>
        <button @click="parentClicked">parent click</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Parent from "./Parent";

@Component
export default class HelloDecorator extends Parent {
    @Prop() name?: string;
    @Prop() initialEnthusiasm?: number;

    enthusiasm = this.initialEnthusiasm || 2;

    increment() {
        this.enthusiasm++;
    }
    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }

    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }
}
</script>

<style>
.greeting {
    font-size: 20px;
}
</style>
