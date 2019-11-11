<template>
  <div class="market">
    <!-- 头部 -->
    <Header />
    <app-scroll class="content">
      <!-- 标题分类   -->
      <Title />
      <!-- 精选特色美食 -->
      <Special />
      
      <!-- 推荐 -->
      <Recommend />
      
      <Category />

     <!-- 好店推荐 -->
      <StoreList />
      
      <Product />

      


    </app-scroll>
  </div>
</template>

<script>
import Header from "./children/Header";
import Title from "./children/Title";
import Special from "./children/Special";
import Recommend from "./children/Recommend";
import Category from "./children/Category";
import StoreList from "./children/StoreList";
import Product from "./children/Product";
export default {
  components: {
    Header,
    Title,
    Special,
    Recommend,
    Category,
    Product,
    StoreList
  }
};
</script>

<style lang="scss" scoped>
body,html{
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
 
</style>

<style lang="scss" >
.product-title {
    text-align: center;
    padding: 60px 0;
    color: #010101;
    .tit {
      border: 5px solid #010101;
      padding: 30px;
      border-radius: 50%;
      font-size: 80px;
      font-weight: bold;
      display: inline-block;
    }
  }

</style>
