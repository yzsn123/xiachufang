<template>
  <div class="market-container">
    <div class="market">
      <!-- 头部 -->
      <Header title="首页" />
      <div class="content">
        <myScroll :name="myScroll" :onload="loadMore" :canLoad="canLoad">
          <!-- 菜单分类 -->
          <Category />

          <!-- 精选特色美食 -->
          <Special />

          <!-- 市集上新 -->
          <StoreList />

          <Product :GoodList="GoodList" />
        </myScroll>
      </div>
    </div>

    <!-- 渲染详情页面 -->
    <transition class enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "./children/Header";
import Special from "./children/Special";
import Category from "./children/Category";
import StoreList from "./children/storelist";
import Product from "./children/Product";
import marketService from "../../../services/marketService";
export default {
  components: {
    Header,
    Special,
    Category,
    Product,
    StoreList
  },
  data() {
    return {
      GoodList: [],
      myScroll: "myScroll",
      canLoad: true
    };
  },
  methods: {
    async initData() {
      const result = await marketService.requestMarketGoodListDate();
      this.GoodList = result.GoodListDate;
    },
    //加载更多
    async loadMore() {
      this.canLoad = false;
      const result = await marketService.requestMarketGoodListDate();
      const GoodListDate = result.GoodListDate;
      GoodListDate.forEach(item =>{
        this.GoodList.push(item);
      })
      this.$nextTick(() => {
        this.canLoad = true;
      });
    }
  },
  created() {
    this.initData();
  }
};
</script>

<style lang="scss" >
.market-container {
  bottom: 0;
  .content {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 44px;
    background: #fff;
  }
  .product-title {
    text-align: center;
    padding: 60px 0 40px 0;
    color: #010101;
    .tit {
      border: 5px solid #010101;
      padding: 16px;
      border-radius: 50%;
      font-size: 40px;
      font-weight: bold;
      display: inline-block;
    }
  }
  .title-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 40px;
    margin-bottom: 40px;
    padding-top: 60px;
    border-top: 1px #eee solid;
    .title-box {
      h1 {
        font-size: 63px;
        color: #313131;
        font-weight: 700;
        padding-bottom: 20px;
      }
      .tips {
        color: #959595;
        font-size: 36px;
      }
    }
    .all {
      font-size: 48px;
      color: #fb6650;
    }
  }
}
</style>
