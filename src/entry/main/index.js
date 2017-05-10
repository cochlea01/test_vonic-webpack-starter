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
    path:'/',
    redirect:'/loan/index'
  },{
    //借款-借款页面
    path: '/loan/index',
    name: 'loan_index',
    component: ()=> import('page/Loan/Index/Index.vue')
  },{
    //借款-认证中心
    path: '/loan/cacenter',
    name: 'loan_cacenter',
    component: ()=>import('page/Loan/CACenter/CACenter.vue')
  },{
    //用户-借款记录
    path:'/user/loanrecord',
    name:'user_loanrecord',
    component:()=>import('page/User/LoanRecord/LoanRecord.vue')
  },{
    //用户-优惠券
    path:'/user/privilege',
    name:'user_privilege',
    component:()=>import('page/User/Privilege/Privilege.vue')
  },{
    //系统-消息
    path:'/system/message',
    name:'system_message',
    component:()=>import('page/System/Message/Message.vue')
  }]

Vue.use(Vonic.app, {
  routes,
  store
})


