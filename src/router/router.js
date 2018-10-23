import Index from '@/components/index'
const red = {
    template: '<div style="background-color:#de5b5b;color:#fff; font-size:30px;line-height:100px;text-align:center;">red页面</div>'
  }
  const yellow = {
    template: '<div style="background-color:#dee066;color:#fff; font-size:30px;line-height:100px;text-align:center;">yellow页面</div>'
  }
  const blue = {
    template: '<div style="background-color:#6680e0;color:#fff; font-size:30px;line-height:100px;text-align:center;">blue页面</div>'
  }

 const powerRouter = [
    {
      path: '/blue',
      name: 'blue',
      component: Index,
      children:[
        {
          path:'',
          redirect:'/blue/blue1'
        },
        {
          title:'蓝色title',  
          name:'blue1',  
          path:'blue1',
          component:red
        },
        {
          name:'blue2',  
          path:'blue2',
          component:blue
        }
      ]
    },
    {
      path: '/red',
      name: 'red',
      component: Index,
      children:[
        {
          name: 'red1',
          path:'red1',
          component:red
        },
        {
          name:'red2',
          path:'red2',
          component:yellow
        }
      ]
    },
    {
      path:'/*',
      redirect:'/login'
    }
  ]

  export default powerRouter;