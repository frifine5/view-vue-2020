import Vue from 'vue'
import Router from 'vue-router'
import Watermark from '@/assets/js/watermark';
import JSignature from '@/assets/js/jSignature.min'
import JSignatureNF from '@/assets/js/jSignature.min.noconflict'




const Index = () => import('@/wel/Index')


// Test for dev demo view. If you are truly controller, it can be remove.

const Product = () => import("@/views/Product")
const GmtESeal = () => import("@/views/esrules/GmtESeal")
const GmtESign = () => import("@/views/esrules/GmtESign")
const Login = () => import("@/components/login")
const UserSearchHead = () => import("@/views/user/UserSearchHead")
const UserMain = () => import("@/views/user/UserMain")
const MonitorPopup = () => import("@/components/monitorPopup")

const PersonHome = () => import("@/views/ps/PersonMain")
const PersonSeal = () => import("@/views/ps/PersonSeal")

const PdfDemo = () => import("@/views/pdf/pdfDemo")

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
      path: '/person/personHome',
      name: 'personHome',
      component: PersonHome
    },

    {
      path: '/person/personSeal',
      name: 'personSeal',
      component: PersonSeal
    },

    {
      path: '/pdf/pdfDemo',
      name: 'pdfDemo',
      component: PdfDemo
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
    let token = localStorage.getItem("token")
    if(token){
      next();
    }else{
      next({
        path: '/user/login',
        query: { redirect: to.fullPath } // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
      });
    }

  }
});


router.afterEach((to) => {
  /* 路由发生变化修改页面title */
  // Watermark.set(store.state.user.userId);

  // Watermark.set("用户名：某某某; 吾生尔有涯而知也无涯");
  // Watermark.set(localStorage.getItem("userStore"));
  let username = localStorage.getItem('username')
  if(username == null) username = '用户登录'
  Watermark.set(username);

});




