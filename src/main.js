import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Editor from '@tinymce/tinymce-vue'

Vue.component('editor', Editor); //注册全局组件
Vue.use(ElementUI);

import myToast from 'easytoast-f-vue'
// 这里也可以直接执行 toastRegistry()
Vue.use(myToast)

//测试组件
// import toastRegistry from './components/toastjs'
// Vue.use(toastRegistry)

Vue.config.productionTip = false
axios.defaults.withCredentials=true
Vue.prototype.axios=axios;

//路由守卫登录
//全局守卫写在main中
//router对象调用  
//.beforeEach((进入到哪一个路由,从哪一个路由离开,对应的函数)=>{}) 
router.beforeEach((to,form,next) =>{
  //如果进入到的路由是登录页或者注册页面，则正常展示
  if(to.path == '/login' || to.path == '/' ){     
      next();
  }else if( !(sessionStorage.getItem('usern')) ){
      alert("还没有登录，请先登录！");
      next('/login');     //转入login登录页面，登录成功后会将usern存入sessionStorage
  }else{
      next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

