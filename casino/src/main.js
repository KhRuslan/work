import { createApp } from 'vue'
import urql from '@urql/vue';
import Root from './App.vue'

const app = createApp(Root)

app.use(urql, {
    url: 'http://localhost:8055/graphql',
});

app.mount('#app')
