import Vue from 'vue'
import Vonic from 'vonic'
import store from './store'
import util from 'service/util/index.js';

//全局基本组件
require('../xp.js')
require('asset/scss/vonic/export.scss')

/* 初始化项目 */
//setRem
util.rem();
window.addEventListener('resize',util.rem);

// Routes
const routes = [{ 
    path: '/',
    name: 'index',
    component: ()=> import('page/Index/Index.vue')
  },{ 
    path: '/ca',
    name: 'ca_index',
    component: ()=>import('page/CA/Index/Index.vue')
  },{
    path:'/ca/idcard',
    name: 'ca_idcard',
    component:()=>import('page/CA/Idcard.vue')
  },{
    path:'/ca/personal',
    name: 'ca_personal',
    component:()=>import('page/CA/Personal.vue')
  },{
    path:'/ca/profession',
    component:()=>import('page/CA/Profession.vue')
  },{
    path:'/ca/emergency',
    name: 'ca_emergency',
    component:()=>import('page/CA/Emergency.vue')
  },{
    path:'/ca/bankcard',
    name: 'ca_bankcard',
    component:()=>import('page/CA/Bankcard/Bankcard.vue')
  },{
    path:'/ca/operator',
    name: 'ca_operator',
    component:()=>import('page/CA/Operator.vue')
  },{
    //用户-借款记录
    path:'/user/loanrecord',
    component:()=>import('page/User/LoanRecord/LoanRecord.vue')
  }]

Vue.use(Vonic.app, {
  routes,
  store
})


