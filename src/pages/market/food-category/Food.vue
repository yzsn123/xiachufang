<template>
  <div class="product-box">
    <Header :hasLocation='false' :title="$route.query.title" />
    <app-scroll class="content">
        <FoodItem :GoodList ='GoodList'  />
    </app-scroll>

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
      GoodList: []
    };
  },
  methods: {
    async initData() {
      const result = await marketService.requestMarketGoodListDate();
      this.GoodList = result.GoodListDate;
      // console.log( this.GoodList);
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
  width:100%;
  height:100%;
  right: 0;
  z-index: 99;
  .product-list {
    overflow: hidden;
  }
}
</style>