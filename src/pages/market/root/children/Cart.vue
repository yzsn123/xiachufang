<template>
  <div class="shopping-cart">
    <Header title="购物车" :hasLocation="false" />
    <div class="content">
    <myScroll :name="myScroll">
      <div class="shopping-wrap">
        <div class="group" v-for="(item, index) in addCartList" :key="index">
          <div class="title-box">
            <div class='left' @click='selectProduct(item)'>
              <span class="checkbox checked " ></span>
            </div>
            <h3 class="name">下厨房精选</h3>
          </div>
          <div class="product">
            <div class="left" @click='selectProduct(item)'>
              <span class="checkbox" ></span>
            </div>
            <div class="center">
              <img
                :src="item.selectPic"
                alt
              />
            </div>
            <div class="right">
              <h1 class="name multiline">{{item.selectTit}}</h1>
              <p class="desc">{{item.selectInfo}}</p>
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
      <div class="all-box" @click='checkAllAction' >
        <span  class="all" id="all"></span>
        <label >全选</label>
      </div>
      <div>
        <span class="money" >实付款:￥{{totalMoney}}</span>
        <button class="payBtn">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import {mapState} from 'vuex'
export default {
  components: {
    Header
  },
  data(){
    return{
      myScroll:'myScroll',
      totalMoney:0,
      checkAllFlag:false

    }
  },
  computed:{
    ...mapState({
      addCartList:state =>state.marketOrder.addCartList
    }),
    
  },
  methods:{
    calcTotalPrice(){
      var _this = this;
      this.totalMoney = 0;
      this.addCartList.forEach(item =>{
        if (item.checked) {
           _this.totalMoney += item.currentPrice * item.selectNum; 
        }
      })
    },
    selectProduct(item){
      //点击选中
      if (typeof item.checked == 'undefined') {
        this.$set(item,'checked',true);
        console.log(this.addCartList);
      // 再点击取消
      }else {
        item.checked = !item.checked;
        console.log(this.addCartList);
      }
      //计算价格
      this.calcTotalPrice();
    },
    // 全选
    checkAllAction(){
       this.addCartList.forEach(item=>{
         //筛选没有选中的全部选中
         if (typeof item.checked == 'undefined' ) {
           this.$set(item,'checked',true)
         }else{
          //  取消全选就反选
           item.checked = !item.checked;
         }
       })
      this.calcTotalPrice();
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
     .left{
       width:50px;
       position:relative;

     }
    }
    .product {
      display: flex;
      justify-content: flex-start;
      padding: 25px 45px;
      .left{
        position:relative;
        width:50px;
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
.checkbox {
      width: 48px;
      height: 48px;
      border:2px #eee solid;
      border-radius:50%;
      display: inline-block;
      position:absolute;
      top:32%;
      left:0;
      transform:translate(-32%,0);
    }
</style>

