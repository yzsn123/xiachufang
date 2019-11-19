<template>
  <div class="market-container">
    <div class="market">
      <!-- 头部 -->
      <Header title="首页" />
      <div class="content">
        <myScroll :name="myScroll">
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
import Special from "./children/special";
import Category from "./children/category";
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
      myScroll: "myScroll"
    };
  },
  methods: {
    async initData() {
      const result = await marketService.requestMarketGoodListDate();
      this.GoodList = result.GoodListDate;
      //  console.log( this.GoodList);
    }
  },
  created() {
    this.initData();
  }
};
</script>

<style lang="scss" >
body,
html {
  width: 100%;
  height: 100%;
}
.content {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 49px;
  top: 44px;
  background: #fff;
}
body,
html {
  width: 100%;
  height: 100%;
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
  padding: 0 30px;
  margin-bottom: 40px;
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
</style>
