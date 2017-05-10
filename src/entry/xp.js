//全局基本组件
import Vue from 'vue';
import xDivide from 'comp/basic/divide.vue';
import xPopup from 'comp/basic/popup.vue';
//基本组件以 x- 加组件名命名
Vue.component('x-divide',xDivide);
Vue.component('x-popup',xPopup);