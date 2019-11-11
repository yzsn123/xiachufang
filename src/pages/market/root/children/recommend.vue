<template>
  <div class="recommend-box">
    <div class="cell">
      <img :src="banner" alt />
      <div class="cell-content">
        <h3 class="name">必囤清单</h3>
        <p class="dec">
          贵财家五常稻香
          <span class="price">￥39.8</span>
          <span class="origin">￥80</span>
        </p>
      </div>
    </div>
    <div class="cell">
      <img :src="banner" alt />
      <div class="cell-content">
        <h3 class="name">必囤清单</h3>
        <p class="dec">
          贵财家五常稻香
          <span class="price">￥39.8</span>
          <span class="origin">￥80</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: require("../../../../assets/market/index/market-banner-01.jpg")
    };
  }
};
</script>

<style lang="scss" scoped>
.recommend-box {
  box-sizing: border-box;
  width: 100%;
  .cell {
    position: relative;
    overflow: hidden;
    margin: 40px 30px 0 30px;
    border-radius: 30px;
    .cell-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
      display: inline-block;
      width: 80%;
      .name {
        font-size: 100px;
        color: #16180b;
        font-weight: 700;
        padding-bottom: 30px;
      }
      .dec {
        background: #fff;
        border-radius: 30px;
        font-size: 70px;
        padding: 30px 0;
        color: #393a34;
        .price {
          font-weight: bold;
          color: #fb4128;
        }
        .origin {
          color: #919191;
          text-decoration: line-through;
          font-weight: normal;
          padding-left: 5px;
        }
      }
    }
    img {
      width: 100%;
    }
  }
}
</style>