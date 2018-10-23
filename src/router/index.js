import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import powerRouter from './router'
import { filterList } from '../api/tool'

Vue.use(Router)


let route = new Router({
  routes: [{
    path: '/login',
    name: 'Login',
    component: Login
  }]
});


const mainMenuShowArry = ['blue','red'];
//商品菜单的二级菜单
let hiddenSubRoute = ['red2'];

let backMenu = ['blue','red'];
let backSubMenu = ['blue1','red1'];
filterList(powerRouter,'name',mainMenuShowArry,hiddenSubRoute,backMenu,backSubMenu)
console.log(powerRouter)
//登录后获取用户权限+本地入口管控==》过滤出可见路由
setTimeout(()=>{
  route.addRoutes(powerRouter.concat([
    {
      path:'/*',
      redirect:'/login'
    }
  ]))
},5000)

export default route;
