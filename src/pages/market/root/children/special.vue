<template>
  <div class="special-container">
    <ul>
      <li>
        <div class="left">
          <h3 class="title">精选特色美食</h3>
          <p class="txt">百洛菲牛奶</p>
          <div class="price">
            <span>￥49.9/10盒</span>
            <span class="origin">￥79</span>
          </div>
        </div>
        <div class="right">
          <img :src="banner" alt />
        </div>
      </li>
      <li>
        <div class="left">
          <h3 class="title">精选特色美食</h3>
          <p class="txt">百洛菲牛奶</p>
          <div class="price">
            <span>￥49.9/10盒</span>
            <span class="origin">￥79</span>
          </div>
        </div>
        <div class="right">
          <img :src="banner" alt />
        </div>
      </li>
      <li>
        <div class="left">
          <h3 class="title">精选特色美食</h3>
          <p class="txt">百洛菲牛奶</p>
          <div class="price">
            <span>￥49.9/10盒</span>
            <span class="origin">￥79</span>
          </div>
        </div>
        <div class="right">
          <img :src="banner" alt />
        </div>
      </li>
      <li>
        <div class="left">
          <h3 class="title">精选特色美食</h3>
          <p class="txt">百洛菲牛奶</p>
          <div class="price">
            <span>￥49.9/10盒</span>
            <span class="origin">￥79</span>
          </div>
        </div>
        <div class="right">
          <img :src="banner" alt />
        </div>
      </li>
    </ul>
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

.special-container {
  margin-top: 40px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  ul {
    margin: 0 0 0 50px;
    box-sizing: border-box;
    li {
      float: left;
      width: 48%;
      box-sizing: border-box;
      margin: 0 40px 30px 0;
      background: #f3f3f3;
      border-right: 6px;
      padding: 40px 0 40px 40px;
      border-radius: 60px;
      // display: flex;
      overflow: hidden;
      position: relative;
      height: 100%;
      box-sizing: border-box;
      .left {
        .title {
          font-size: 70px;
          height: 350px;
          font-weight: bold;
          color: #1a1a1a;
        }
        .txt {
          font-size: 34px;
          padding-bottom: 20px;
        }
        .price {
          font-size: 40px;
          color: #fc4027;
          font-weight: bold;
          .origin {
            font-size: 28px;
            color: #919191;
            font-weight: normal;
            text-decoration: line-through;
            padding-left: 10px;
          }
        }
      }
      .right {
        overflow: hidden;
        display: inline-block;
        position: absolute;
        right: -55%;
        top: 0;
        height: 100%;
        width: 100%;
        border-top-left-radius: 300px;
        border-bottom-left-radius: 300px;
        height: 100%;
        img {
          height: 100%;
        }
      }
    }
  }
}
</style>