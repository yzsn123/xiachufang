<template>
  <div class="product-box">
    <!-- 精选餐厨好物 -->
    <div class="product-title">
      <span class="tit">精</span>
      <span class="tit">选</span>
      <span class="tit">餐</span>
      <span class="tit">厨</span>
      <span class="tit">好</span>
      <span class="tit">物</span>
    </div>
    <!-- 推荐 -->
    <Recommend />
    
    <ProductList /> 
    

  </div>
</template>

<script>
import Recommend from "./Recommend";
import ProductList from "./Product-list";
export default {
  components: {
    Recommend,
    ProductList
  }
};
</script>

<style lang="scss" scoped>
.product-box {
  margin-top: 50px;
  // .product-title {
  //   text-align: center;
  //   padding: 60px 0;
  //   color: #010101;
  //   .tit {
  //     border: 5px solid #010101;
  //     padding: 30px;
  //     border-radius: 50%;
  //     font-size: 80px;
  //     font-weight: bold;
  //     display: inline-block;
  //   }
  // }
  
}
</style>