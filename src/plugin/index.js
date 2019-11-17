import { Icon,Lazyload  } from 'vant'

import AppScroll from '../components/app-scroll'
import myScroll from '../components/my-scroll.vue'

export default {
  install(Vue){
    // 使用vant的插件
    Vue.use(Icon);
    Vue.use(Lazyload);
    // 使用自定义的滚动组件
    Vue.component(AppScroll.name, AppScroll);
    Vue.component(myScroll.name,myScroll);
  }
}