<template>
  <div class="product-box">
    <div class="product-wrap">
      <Header :hasLocation="false" :title="$route.query.title" />
      <div class="content">
      <myScroll :name="myScroll">
        <FoodItem :GoodList="GoodList" />
      </myScroll>
      </div>
    </div>
       <!-- 渲染分类列表页面 -->
    <transition class="" enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import FoodItem from "./Food-Item";
import marketService from "../../../services/marketService";
import Header from "../../market/root/children/Header";
export default {
  components: {
    FoodItem,
    Header
  },
  data() {
    return {
      GoodList: [],
      myScroll:'myScroll'
    };
  },
  methods: {
    async initData() {
      const result = await marketService.requestMarketGoodListDate();
      this.GoodList = result.GoodListDate;
    }
  },
  created() {
    this.initData();
  }
};
</script>

<style lang="scss" scoped>
.product-box {
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  bottom: 0;
  width: 100%;
  height: 100%;
  right: 0;
  z-index: 99;
  .product-list {
    overflow: hidden;
  }
}
</style>