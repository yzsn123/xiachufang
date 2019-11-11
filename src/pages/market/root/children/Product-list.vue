<template>
  <div class="product-list">
       <Item />

  </div>
</template>

<script>
import Item from "./Item";
export default {
  components:{
    Item
  }
}
</script>

<style lang="scss" scoped>
.product-list{
    margin:120px 0 0 80px;
    overflow: hidden;
}

</style>