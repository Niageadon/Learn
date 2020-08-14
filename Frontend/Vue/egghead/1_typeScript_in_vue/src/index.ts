import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";
import router from "./router/index"
import './hooks'
let v = new Vue({
    el: "#app",
    router,
    template: `
    <div>
        Name: <input v-model="name" type="text">
        <!--<h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="5" />-->
        <router-link :to="{name: 'Hello'}">to hello</router-link>
        <router-link :to="{name: 'HelloTs'}">to helloTs</router-link>
        <router-link :to="{name: 'dependencyInjection'}">to dependencyInjection</router-link>
        <router-view></router-view>
        <!--<h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />-->
    </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent,
        HelloDecoratorComponent,
    }
});
