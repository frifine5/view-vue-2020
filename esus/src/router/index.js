import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('@/wel/Index')


// Test for dev demo view. If you are truly controller, it can be remove.

const Product = () => import("@/views/Product")
const GmtESeal = () => import("@/views/esrules/GmtESeal")
const GmtESign = () => import("@/views/esrules/GmtESign")


Vue.use(Router)

export default new Router({
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
})
