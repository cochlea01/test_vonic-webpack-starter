import Vue from 'vue'
import Vonic from 'vonic'
import store from './store'

require('asset/scss/vonic/export.scss')
require('asset/scss/reset/export.scss')

// Routes
const routes = [{ 
    path: '/', 
    component: ()=> import('page/Index')
  },{ 
    path: '/ca',
    component: ()=>import('page/CA/Index')
  },{
    path:'/ca/idcard',
    component:()=>import('page/CA/Idcard.vue')
  },{
    path:'/ca/personal',
    component:()=>import('page/CA/Personal.vue')
  },{
    path:'/ca/profession',
    component:()=>import('page/CA/Profession.vue')
  },{
    path:'/ca/emergency',
    component:()=>import('page/CA/Emergency.vue')
  },{
    path:'/ca/bankcard',
    component:()=>import('page/CA/Bankcard.vue')
  }]

Vue.use(Vonic.app, {
  routes,
  store
})


