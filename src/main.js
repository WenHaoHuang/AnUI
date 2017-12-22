// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import router from './router';
import fastclick from 'fastclick';
import VueLazyload from 'vue-lazyload';

fastclick.attach(document.body);

Vue.config.productionTip = false;

Vue.use(VueRouter);

Vue.use(VueLazyload, {
  // loading:require('/static/img/icon/loading.png')
});

import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueAwesomeSwiper);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
