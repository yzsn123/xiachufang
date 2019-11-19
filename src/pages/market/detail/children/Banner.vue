<template>
  <div class="detail-banner">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in detailBanner" :key="item.id">
        <img :src="item.picUrl" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
export default {
  props: {
    detailBanner:{
      type:Array,
      required:true
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  data() {
    return {
      bannerDate: {}
    };
  }
};
</script>

<style lang="scss">
.detail-banner {
  width: 100%;
  img {
    width: 100%;
  }
}
.van-swipe__indicator {
  width: 15px !important;
  height: 15px !important;
  margin: 0 10px 0 0;
}

</style>
