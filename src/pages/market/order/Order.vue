<template>
  <div class="order-market">
    <Header title="订单" :hasLocation="false" />
    <div class="content">
      <myScroll :name="myScroll">
        <div class="address">
          <ul>
            <li>
              <span>柳xx</span>
              <span>收货地址收货地址收货地址收货地址收货地址</span>
            </li>
            <li>
              <span class="tel">1557598294</span>
            </li>
          </ul>
        </div>
        <!-- 产品 -->
        <div class="group-box" v-for="(item,index) in buyNowList" :key="index">
          <div class="group order-product">
            <div class="name border-bottom">
              <van-icon name="shop-o" />
              <p>店铺标题</p>
            </div>

            <div class="product">
              <div class="pic">
                <img :src="item.selectPic" alt />
              </div>
              <div class="contect-box">
                <h3 class="title multiline">{{item.selectTit}}</h3>
                <div class="num">{{item.selectInfo.join(' , ')}}</div>
              </div>
              <div class="price-box">
                <span>￥{{item.currentPrice}}</span>
                <span>{{item.selectNum}}</span>
              </div>
            </div>
          </div>
          <div class="group cell border-bottom">
            <span>购买数量 :</span>
            <!-- <van-stepper v-model="value" /> -->
            <div class="step">
              <span :class="{disabled:item.selectNum<=1}" @click="handleCount(index,-1)">-</span>
              <span>{{item.selectNum}}</span>
              <span @click="handleCount(index,+1)">+</span>
            </div>
          </div>
          <div class="group cell border-bottom">
            <span>运费 :</span>
            <span>包邮</span>
          </div>
          <div class="group cell border-bottom">
            <span>合计 :</span>
            <span>￥{{unitPrice.toFixed(2)}}</span>
          </div>
          <div class="group cell">
            <textarea class="textarea" name placeholder="写留言"></textarea>
          </div>
        </div>

        <div class="payment">
          <div class="sale distance">
            <div class="left">
              <van-icon name="coupon-o" />
              <p class="tit">优惠</p>
              <span class="tips">无可用</span>
            </div>
          </div>
          <h3 class="pay-title">支付方式</h3>
          <div class="sale border-bottom">
            <div class="left">
              <van-icon name="alipay" />
              <p class="tit">支付宝</p>
            </div>
            <div class="select"></div>
          </div>
          <div class="sale">
            <div class="left">
              <van-icon name="wechat" />
              <p class="tit">微信</p>
            </div>
          </div>
        </div>
      </myScroll>
    </div>
    <div class="settlement border-top">
      <span class="money">实付款:￥{{totalPrice.toFixed(2)}}</span>
      <button class="payBtn">付款</button>
    </div>
  </div>
</template>

<script>
import { Stepper,Toast } from "vant";
import Header from "../../market/root/children/Header";
import { mapState } from "vuex";
export default {
  components: {
    Header,
    [Stepper.name]: Stepper,
    [Toast.name]: Toast,
  },
  data() {
    return {
      value: "",
      myScroll: "myScroll",
      count: 0,
    };
  },
  computed: {
    ...mapState({
      buyNowList: state => state.marketOrder.buyNowList
    }),
    // 计算单价
    unitPrice(){
      let unitMoney = 0;
      this.buyNowList.forEach(item =>{
        unitMoney = item.currentPrice * item.selectNum;
      })
      return unitMoney;
    },
    //总价
    totalPrice() {
      let totalMoney = 0;
      this.buyNowList.forEach(item => {
        totalMoney += item.currentPrice * item.selectNum;
      });
      return totalMoney;
    },
    countProduct(){
      this.buyNowList.forEach(item=>{
        this.count = item.selectNum;
      })
    }
  },
  methods:{
     //获取下标,找到相对应的数组进行加减
     handleCount(index,num) {
      if (this.buyNowList[index].selectNum + num < 1) {
        Toast("不能再减少了，只有一件了");
      } else {
        this.buyNowList[index].selectNum += num;        
      }
    },
  }
};
</script>
<style lang="scss" scoped>
.content {
  background: #fafaf8;
  bottom:70px;
}
.order-market {
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 99;
  bottom: 49px;
  width: 100%;
  height: 100%;
  .address {
    background: #fafaf8;
    padding: 0 0 32px 0;
    ul {
      display: flex;
      justify-content: space-between;
      // padding: 26px 0;
      background: #eff2f1;
      padding: 26px 60px 26px 23px;
      position: relative;
      &::before {
        width: 20px;
        height: 20px;
        border: 1px #b1b7b5 solid;
        border-left: none;
        border-bottom: none;
        transform: rotate(45deg) translate(-50%, 0);
        content: "";
        position: absolute;
        right: 24px;
        top: 50%;
      }
      li {
        display: flex;
        flex-direction: column;
        line-height: 60px;
        font-size: 33px;
        color: #3c4240;
        .tel {
          font-weight: 700;
          font-family: "Arial";
          font-size: 40px;
        }
      }
    }
  }
  .group-box {
    background: #fff;
    .cell {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 34px;
      padding: 40px 0;
      span {
        &:nth-of-type(1) {
          color: #323232;
        }
      }
      .textarea {
        background: #f2f2f0;
        border-radius: 10px;
        border: none;
        margin: 30px 0;
        height: 120px;
        line-height: 60px;
        padding: 0 10px;
        box-sizing: border-box;
        width: 100%;
        font-size: 32px;
      }
    }
    .group {
      margin: 0 22px;
    }
    .order-product {
      .name {
        display: flex;
        font-size: 16px;
        color: #3f3f3f;
        font-size: 32px;
        line-height: 92px;
        align-items: center;
        p {
          padding: 0 0 0 10px;
        }
      }
      .product {
        display: flex;
        align-items: flex-start;
        border-bottom: 1px #eee solid;
        padding: 24px 0 24px 0;
        overflow: hidden;
        .pic {
          width: 140px;
          height: 140px;
          margin-right: 22px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
        .contect-box {
          flex: 1;
          font-size: 35px;
          height: 140px;
          .title {
            color: #333;
            padding: 0 4px;
            vertical-align: middle;
            font-weight: normal;
            border-radius: 2px;
            font-size: 32px;
            line-height: 42px;
          }
          .num {
            font-size: 30px;
            color: #666;
            margin-top: 20px;
          }
        }
        .price-box {
          font-size: 30px;
          line-height: 40px;
          color: #cd7164;
          display: flex;
          flex-direction: column;
          justify-items: flex-end;
          align-items: flex-end;
          font-family: "Arial";
          color: #373735;
          margin-left: 30px;
          span {
            &:nth-of-type(2) {
              color: #949492;
            }
          }
          .origin {
            margin-left: 5px;
            color: #999;
            text-decoration: line-through;
            font-size: 24px;
          }
        }
        .van-icon {
          color: #92938b;
          font-size: 40px;
          padding: 0 10px;
        }
      }
    }
  }
  .payment {
    .sale {
      padding: 44px 25px 44px 25px;
      background: #fff;
      display: flex;
      align-items: center;
      position: relative;
      justify-content: space-between;
      .left {
        display: flex;
        align-items: center;
      }
      .select {
        width: 56px;
        height: 56px;
        background: #fb6650;
        color: #fff;
        border-radius: 50%;
        position: relative;
        &::before {
          width: 26px;
          height: 12px;
          border: 4px #fff solid;
          border-left: none;
          border-bottom: none;
          transform: rotate(130deg) translate(-50%, 0);
          content: "";
          position: absolute;
          right: 24px;
          top: 50%;
        }
      }
      .tit {
        padding: 0 0 0 10px;
      }
      .tips {
        width: 150px;
        height: 70px;
        line-height: 70px;
        background: #f89387;
        font-size: 36px;
        color: #fff;
        margin: 0 0 0 10px;
        text-align: center;
      }
      .van-icon {
        font-size: 50px;
      }
      .van-icon-alipay {
        color: #049ee4;
      }
      .van-icon-wechat {
        color: #01c700;
      }
    }
    .distance {
      margin: 38px 0 0 0;
      &::after {
        width: 20px;
        height: 20px;
        border: 1px #b1b7b5 solid;
        border-left: none;
        border-bottom: none;
        transform: rotate(45deg) translate(-50%, 0);
        content: "";
        position: absolute;
        right: 24px;
        top: 50%;
      }
    }
    .pay-title {
      height: 100px;
      line-height: 100px;
      padding: 0 0 0 24px;
      font-size: 38px;
      color: #333230;
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
  justify-content: flex-end;
  color: #f8664f;
  background: #fff;
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
.step {
  span {
    padding: 8px 20px;
    font-size: 50px;
    color: #666;
    border: 1px #dedede solid;
    text-align: center;
    display: inline-block;
    &.disabled {
      color: #dedede!important;
      border: 1px #dedede solid;
    }
  }
}
</style>