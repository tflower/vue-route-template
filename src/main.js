import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    // debugger;
    //    	if (['/login'].indexOf(to.path) !== -1) { 
    //        next()
    //     } else {
    //        next('/login')
    //     }
    next()
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
