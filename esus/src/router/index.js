import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/wel/Index')


// Test for dev demo view. If you are truly controller, it can be remove.

const Product = () => import("@/views/Product")
const GmtESeal = () => import("@/views/esrules/GmtESeal")
const GmtESign = () => import("@/views/esrules/GmtESign")
const Login = () => import("@/components/login")
const UserSearchHead = () => import("@/views/user/UserSearchHead")
const UserMain = () => import("@/views/user/UserMain")
const MonitorPopup = () => import("@/components/monitorPopup")


Vue.use(Router)

const router =  new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[


      ]


    },
    {
      path: '/user/userMain',
      name: 'userMain',
      component: UserMain
    },

    {
      path: '/user/userSearchHead',
      name: 'userSearchHead',
      component: UserSearchHead
    },



    {
      path: '/test/dialog',
      name: 'monitorPopup',
      component: MonitorPopup
    },


    {
      path: '/user/login',
      name: 'Login',
      component: Login
    },

    {
      path: '/product',
      name: 'Product',
      component: Product
    },

    {
      path: '/gmt/eseal',
      name: 'GmtESeal',
      component: GmtESeal
    },
    {
      path: '/gmt/esign',
      name: 'GmtESign',
      component: GmtESign
    },



  ]
});

export default router;

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/user/login') {
    next();


  }else if(to.path.match('^/gmt/')){// add other exclude


  } else {
    let token = localStorage.getItem('Authorization');

    if (token === 'null' || token === '') {
      next('/user/login');
    } else {
      next();
    }
  }
});
