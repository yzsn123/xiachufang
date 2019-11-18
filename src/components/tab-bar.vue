<template>
<nav class="tab-bar border-top">
  <router-link class="tab-item" v-for="item in tabList" :key="item.id" :to="item.path">
    <span class="iconfont" :class="item.icon"> </span>
    <span class="title">{{item.title}}</span>
  </router-link>
</nav>
</template>

<script>

export default {
  name: 'tab-bar',
  data(){
    return {
      tabList: [
        {id: 1, path: '/kitchen', title: '下厨房', icon: 'icon-shouye1'},
        {id: 2, path: '/market', title: '市集', icon: 'icon-shangdian'},
        {id: 3, path: '/classroom', title: '课堂', icon: 'icon-course'},
        {id: 4, path: '/collect', title: '收藏', icon: 'icon-ganxingqu'},
        {id: 5, path: '/mine', title: '我', icon: 'icon-wo'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.tab-bar{
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 49px;
  .tab-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    text-align: center;
    .iconfont{
      font-size: 20px;
      margin-bottom: 5px;
    }
    .title{
      font-size: 12px;
    }
    &.router-link-active{
      color: #F5053D;
    }
  }
}
</style>