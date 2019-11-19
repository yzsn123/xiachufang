<template>
  <div class="shopping-cart">
    <Header title="购物车" :hasLocation="false" />
    <div class="content">
    <myScroll :name="myScroll">
      <div class="shopping-wrap">
        <div class="group">
          <div class="title-box">
            <input type="checkbox" class="checkbox" />
            <h3 class="name">下厨房精选</h3>
          </div>
          <div class="product">
            <div class="left">
              <input type="checkbox" class="checkbox" />
            </div>
            <div class="center">
              <img
                src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=1745834138,3604086340&fm=85&s=599C679E5C43EAC25AAAC06B0300B06B"
                alt
              />
            </div>
            <div class="right">
              <h1 class="name multiline">标题标题标题标题标题标标题标题标题标标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h1>
              <p class="desc">选的规格</p>
              <p class="price-box">
                <span class="price">
                  ￥256
                  <span class="origin">￥300</span>
                </span>

                <input type="text" value="5" class="ipt" />
              </p>
            </div>
          </div>
          <div class="free">已享包邮</div>
        </div>
        <div class="group">
          <div class="title-box">
            <input type="checkbox" class="checkbox" />
            <h3 class="name">下厨房精选</h3>
          </div>
          <div class="product">
            <div class="left">
              <input type="checkbox" class="checkbox" />
            </div>
            <div class="center">
              <img
                src="https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=1745834138,3604086340&fm=85&s=599C679E5C43EAC25AAAC06B0300B06B"
                alt
              />
            </div>
            <div class="right">
              <h1 class="name multiline">标题标题标题标题标题标标题标题标题标标题标题标题标题标题标题标题标题标题标题标题标题标题标题</h1>
              <p class="desc">选的规格</p>
              <p class="price-box">
                <span class="price">
                  ￥256
                  <span class="origin">￥300</span>
                </span>
                <input type="text" value="5" class="ipt" />
              </p>
            </div>
          </div>
          <div class="free">已享包邮</div>
        </div>
      </div>
    </myScroll>
    </div>
    <div class="settlement border-top">
      <div class="all-box">
        <input type="checkbox" class="all" id="all" />
        <label for='all'>全选</label>
      </div>
      <div>
        <span class="money">实付款:￥621.8</span>
        <button class="payBtn">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  components: {
    Header
  },
  data(){
    return{
      myScroll:'myScroll'
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  background: #fafaf8;
}
.shopping-cart {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  height: 100%;
  z-index: 99;
  box-sizing: border-box;
  .group {
    background: #fff;
    margin-bottom: 12px;
    .checkbox {
      width: 48px;
      height: 48px;
      margin-right: 40px;
    }
    .title-box {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px #eae9e4 solid;
      height: 110px;
      line-height: 110px;
      font-size: 34px;
      color: #383934;
      padding: 0 34px;
    }
    .product {
      display: flex;
      justify-content: flex-start;
      padding: 25px 36px;

      .center {
        width: 236px;
        height: 236px;
        margin-right: 27px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
      .right {
        flex: 1;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        .name {
          color: #383934;
          font-size: 35px;
          line-height: 50px;
        }
        .desc {
          color: #94958f;
        }
      }
      .price-box {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: flex-end;
        .price {
          color: #383934;
          font-size: 32px;
          font-weight: 700;
          .origin {
            color: #94958f;
            text-decoration: line-through;
          }
        }
        .ipt {
          width: 98px;
          border: 1px #dddddd solid;
          text-align: center;
          color: #333;
        }
      }
    }
    .free {
      border-top: 1px #eae9e4 solid;
      height: 87px;
      line-height: 87px;
      padding-left: 128px;
    }
  }
}
.settlement {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f8664f;
  background: #fff;
  padding: 0 26px 0 35px;
  box-sizing: border-box;
  .all-box {
    align-items: center;
    display: flex;
    .all {
      width: 48px;
      height: 48px;
    }
    label{
      color: #333;
      font-size:50px;
    }
  }
  .payBtn {
    width: 214px;
    height: 116px;
    background: #f8664f;
    border-radius: 10px;
    margin: 0 20px;
    border: none;
    outline: none;
    font-size: 36px;
    color: #fff;
  }
}
</style>

