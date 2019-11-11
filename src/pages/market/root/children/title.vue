<template>
  <div class="market-title">
    <ul class="title-list">
      <li v-for="item in data" :key="item.id">
        <img :src="item.img" alt />
      </li>
    </ul>
    <div class="market-banner">
      <img :src="banner" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          title: "食材",
          img: require("../../../../assets/market/index/market-title-01.jpg")
        },
        {
          id: 2,
          title: "器具",
          img: require("../../../../assets/market/index/market-title-02.jpg")
        },
        {
          id: 3,
          title: "烘焙",
          img: require("../../../../assets/market/index/market-title-03.jpg")
        },
        {
          id: 4,
          title: "生鲜",
          img: require("../../../../assets/market/index/market-title-04.jpg")
        }
      ],
      banner: require("../../../../assets/market/index/market-banner-01.jpg")
    };
  }
};
</script>

<style lang='scss' scoped>
.market-title {
  width: 100%;
  .title-list {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 60px 0;
    li {
      flex: 1;
      margin: 0 48px;
      img {
        width: 100%;
      }
    }
  }
  .market-banner {
    img {
      width: 100%;
    }
  }
}
</style>