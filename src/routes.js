import vue from 'vue';
import Router from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import task from './components/Task.vue';
import about from './components/About.vue';

vue.use(Router)

export default new Router({
    routes: [
        { 
            path: '/',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/about',
            component: about
        },
        {
            path: '/task',
            component: task
        }
    ]
});
