import { createApp } from 'vue'
import urql from '@urql/vue';
import Root from './App.vue'

const app = createApp(Root)

app.use(urql, {
    url: 'http://38.242.229.113:8055/graphql',
});

app.mount('#app')
