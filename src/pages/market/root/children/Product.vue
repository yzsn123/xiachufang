<template>
  <div class="product-box">
    <!-- 精选餐厨好物 -->
     <div class="title-wrap">
        <div class="title-box">
          <h1>猜你喜欢</h1>
        </div>
    </div>
    <ProductList :GoodList='GoodList' /> 
  </div>
</template>

<script>
import ProductList from "./Product-list";
export default {
  props:{
    GoodList:{
      type:Array,
      required:true
    }
  },
  components: {
    
    ProductList
  }
};
</script>

<style lang="scss" scoped>
.product-box{
  margin-top: 50px;
}

</style>