<template>
  <div class="product-list">
       <Item :GoodList='GoodList' />

  </div>
</template>

<script>
import Item from "./Item";
export default {
   props:{
    GoodList:{
      type:Array,
      required:true
    }
  },
  components:{
    Item
  }
}
</script>

<style lang="scss" scoped>
.product-list{
    margin:30px 0 0 30px;
    overflow: hidden;
}

</style>