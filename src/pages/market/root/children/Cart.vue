<template>
  <div class="shopping-cart">
    <Header title="购物车" :hasLocation="false" />
    <div class="content">
      <myScroll :name="myScroll">
        <div class="shopping-wrap">
          <div class="tips-box" v-if="addCartList.length==0">
            <van-icon name="shopping-cart-o" />
            <p>购物车空空如也，赶紧去购物吧！</p>
          </div>
          <div class="group" v-for="(item, index) in addCartList" :key="index">
            <div class="title-box">
              <div class="left" @click="selectProduct(item)">
                <span class="checkbox" :class="{checked:item.checked}"></span>
              </div>
              <h3 class="name">下厨房精选</h3>
            </div>
            <div class="product">
              <div class="left" @click="selectProduct(item)">
                <span class="checkbox" :class="{checked:item.checked}"></span>
              </div>
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
                  <input type="text" :value="item.selectNum" class="ipt" />
                </p>
              </div>
            </div>
            <div class="free">已享包邮</div>
          </div>
        </div>
      </myScroll>
    </div>
    <div class="settlement border-top">
      <div class="all-box" @click="checkAllAction">
        <div class="left">
          <span class="checkbox" :class="{checked:this.checkAllFlag}"></span>
        </div>
        <label>全选</label>
      </div>
      <div class="right-box">
        <span class="money">实付款:￥{{totalMoney.toFixed(2)}}</span>
        <button class="payBtn" @click="settlementAction">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import { mapState } from "vuex";
export default {
  components: {
    Header
  },
  data() {
    return {
      myScroll: "myScroll",
      totalMoney: 0,
      checkAllFlag: false,
      count:0
    };
  },
  computed: {
    ...mapState({
      addCartList: state => state.marketOrder.addCartList
    })
  },
  methods: {
    calcTotalPrice() {
      var _this = this;
      this.totalMoney = 0;
      this.addCartList.forEach(item => {
        if (item.checked) {
          _this.totalMoney += item.currentPrice * item.selectNum;
        }
      });
    },
    selectProduct(item) {
      //点击选中
      let len = this.addCartList.length;
        if (!item.checked) {
          this.$set(item, "checked", true);
          this.count += 1;
        } else {
          item.checked = !item.checked;
          this.count -= 1;
        }
        if (len == this.count) {
          this.checkAllFlag = true;
        }else{
          this.checkAllFlag = false;
        }
        this.calcTotalPrice();
    },
    // 全选
    checkAllAction() {
      this.checkAllFlag = !this.checkAllFlag;
      this.addCartList.forEach(item => {
        //筛选没有选中的全部选中
        if (typeof item.checked == "undefined") {
          this.$set(item, "checked", this.checkAllFlag);
        } else {
          //  取消全选就反选
          item.checked = this.checkAllFlag;
        }
      });
      this.calcTotalPrice();
    },
    //结算
    settlementAction(){
      this.$router.push({name:'order'});
      var arrlist = [];
      this.addCartList.forEach(item=>{
        if (item.checked) {
          arrlist.push(item)
        }
      })
      this.$store.commit('marketOrder/selectProduct',arrlist);
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
    .title-box {
      display: flex;
      justify-content: flex-start;
      border-bottom: 1px #eae9e4 solid;
      height: 110px;
      line-height: 110px;
      font-size: 34px;
      color: #383934;
      padding: 0 45px;
      .left {
        width: 50px;
        position: relative;
      }
    }
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
  justify-content: space-between;
  color: #f8664f;
  background: #fff;
  padding: 0 26px 0 45px;
  box-sizing: border-box;
  .all-box {
    display: flex;
    line-height: 160px;
    .left {
      width: 50px;
      position: relative;
    }
    .all {
      width: 48px;
      height: 48px;
    }
    label {
      color: #333;
      font-size: 50px;
    }
  }
  .right-box {
    display: flex;
    align-items: center;
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
.checkbox {
  width: 48px;
  height: 48px;
  border: 2px #eee solid;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  top: 32%;
  left: 0;
  transform: translate(-32%, 0);
}
.checked {
  background: #f8664f;
  &::before {
    width: 24px;
    height: 10px;
    border: 4px #fff solid;
    border-left: none;
    border-bottom: none;
    transform: rotate(130deg) translate(-50%, 0);
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
  }
}
.tips-box{
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 46px;
  color: #94958f;
  margin-top: 450px;
  .van-icon{
    font-size: 100px;
    padding: 0 0 30px 0;
  }
}
</style>

