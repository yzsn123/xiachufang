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
    
    <ProductList :GoodList='GoodList' /> 
    

  </div>
</template>

<script>
import Recommend from "./Recommend";
import ProductList from "./Product-list";
export default {
  props:{
    GoodList:{
      type:Array,
      required:true
    }
  },
  components: {
    Recommend,
    ProductList
  }
};
</script>

<style lang="scss" scoped>

</style>