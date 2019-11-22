<template>
  <div class="mycontent">
    <van-tabs v-model="active" sticky swipeable animated>
      <van-tab title="菜谱">
          <p class="noMenu">创建菜谱的人是厨房里的天使</p>
          <router-link to="" class="noMenuA">开始创建第一道菜谱</router-link>
      </van-tab>
      <van-tab title="作品">
          <p class="noPrograme">记录生活，生活因回忆更美丽</p>
          <router-link to="" class="noMenuA">分享我的美食作品</router-link>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";

export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss">
.mycontent {
  .van-tabs--line .van-tabs__wrap {
    height: 116px;
  }
  .van-tabs__nav{
      width: 40%;
  }
 .van-tabs__wrap{
     display: flex;
     justify-content: center;
 }
  .van-ellipsis {
    font-size: 48px;
    line-height: 116px;
  }
  .van-tabs__line {
    width: 100px !important;
  }
  .van-tab__pane {
    font-size: 40px;
  }
  .van-tab--active {
    span {
      font-weight: 550;
    }
  }
  .noMenu,.noPrograme{
      text-align: center;
      margin-top: 152px;
      font-size: 42px;
      color: #73746f;
  }
  .noMenuA,.noProgrameA{
      display: block;
      text-align: center;
      margin-top: 125px;
      font-size: 42px;
      color: #de705f;
  }
}
</style>