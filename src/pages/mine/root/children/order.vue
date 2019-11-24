<template>
  <div class="order">
    <div class="header">
      <span class="iconfont icon-fanhui" @click="backAction"></span>
      <h3>订单</h3>
    </div>

    <div class="content">
      <myScroll :name="myScroll">
        
          <div class="group" v-for="(item, index) in orderList" :key="index">
            <div class="product">
              <div class="center">
                <img :src="item.selectPic" alt />
              </div>
              <div class="right">
                <h1 class="name multiline">{{item.selectTit}}</h1>
                <p class="desc">{{item.selectInfo.join(' , ')}}</p>
                <p class="price-box">
                  <span class="price">
                    ￥{{item.currentPrice}}
                    <span class="origin">￥{{item.currentPrice+50}}</span>
                  </span>
                  <input type="text" :value="item.selectNum" class="ipt" disabled/>
                </p>
              </div>
            </div>
         
        </div>
      </myScroll>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backAction() {
      this.$router.back();
    }
  },
  data(){
      return{
          myScroll:'myScroll',
          orderList:[]
      }
  },
  created() {
    this.orderList = this.$store.state.marketOrder.buyedList;
    console.log(this.orderList);
  }
};
</script>

<style lang="scss" scoped>
.pages {
  .order {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    background: white;
    z-index: 9;
  }
  .header {
    width: 100%;
    height: 44px;
    position: absolute;
    left: 0;
    top: 0;
    text-align: center;
    line-height: 44px;
    h3 {
    font-size: 14px;
    font-weight: bold;
  }
  span {
    position: absolute;
    top: 0;
    left: 20px;
  }
  }
  
  .content{
      width: 100%;
      top: 44px;
      bottom: 0;
      position: absolute;
      overflow: hidden;
  }
}
.group {
    background: #fff;
    margin-bottom: 12px;
    .product {
      display: flex;
      justify-content: flex-start;
      padding: 25px 45px;
      .left {
        position: relative;
        width: 50px;
      }
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
  }
</style>