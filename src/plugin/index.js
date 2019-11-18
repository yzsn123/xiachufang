import { Icon,Lazyload  } from 'vant'
import { Toast } from 'vant';

import AppScroll from '../components/app-scroll'
import myScroll from '../components/my-scroll.vue'
Toast.setDefaultOptions({ duration: 2000 ,className:'Toast'});
export default {
  install(Vue){
    // 使用vant的插件
    Vue.use(Icon);
    Vue.use(Lazyload);
    Vue.use(Toast);
    // 使用自定义的滚动组件
    Vue.component(AppScroll.name, AppScroll);
    Vue.component(myScroll.name,myScroll);
  }
}