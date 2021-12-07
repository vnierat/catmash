import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/ChooseCats.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'choose',
      component: Home,
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import( './components/Ranking.vue'),
    },
  ],
});
