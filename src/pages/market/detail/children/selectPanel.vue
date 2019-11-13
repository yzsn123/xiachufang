<template>
  <div class="detailSku">
    <div class="mask" @click="hideAction()"></div>
    <div class="skuBox">
      <div class="product-box">
        <div class="product">
          <div class="pic">
            <img
              :src="data.bannerList[0].picUrl"
              alt
              ref="goodspic"
            />
          </div>
          <div class="contect-box">
            <h3 class="title">
              {{data.title}}
            </h3>
            <div class="price-box">
              <span>价格:￥{{data.currentPrice}}</span>
              <!-- <span class="origin">￥165</span> -->
            </div>
            <!-- <div class="num">已选择:{{value}}</div> -->
          </div>
          <div @click="hideAction">
            <van-icon name="clear" />
          </div>
        </div>
        <div class="type" v-for="(item,index) in data.sku.tree"  :key="index">
          <h3 class="title">{{item.spec}}</h3>
          <div class="select" ref="option">
            <span v-for="item in item.kind" :key="item.id">
              {{item.kindName}}
            </span>
           
          </div>
        </div>
      </div>
      <div class="skuSpec">
        <h3 class="title">数量</h3>
        <div class="step">
          <span :class="{disabled:count<=1}" @click="handleCount(-1)" >-</span>
          <span>{{count}}</span>
          <span @click="handleCount(+1)"> + </span>
        </div>
      </div>
      <div class="detailBtn">确定</div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  props:{
    data:{
      type:Object,
      required:true
    },
    
  },
  components: {
    [Toast.name]:Toast
  },
  data() {
    return {
      count:1
    };
  },
  methods: {
    hideAction() {
      this.$emit("input", false);
    },
    handleCount(num){
      if ((this.count + num)<1) {
          Toast('不能再减少了，只有一件了');
      }else{
      this.count += num;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.detailSku {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  bottom: 45px;
  box-sizing: border-box;
  .mask {
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
  }
  .skuBox {
    background: #fff;
    border-radius: 30px 30px 0 0;
    position: fixed;
    left: 0;
    height: 60%;
    bottom: 0;
    right: 0;
    padding: 23px;
    overflow-y: auto;
    .product-box {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      font-size: 30px;
      .product {
        display: flex;
        align-items: flex-start;
        border-bottom: 1px #eee solid;
        padding: 0 0 24px 0;
        .pic {
          width: 140px;
          height: 140px;
          margin-right: 30px;
          border: 1px #eee solid;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .contect-box {
          flex: 1;
          font-size: 35px;
          .title {
            margin-bottom: 10px;
            color: #333;
            display: inline-block;
            padding: 0 4px;
            vertical-align: middle;
            font-weight: normal;
            border-radius: 2px;
            font-size: 40px;
            line-height: 56px;
          }
          .price-box {
            font-size: 30px;
            line-height: 30px;
            color: #cd7164;
            .origin {
              margin-left: 5px;
              color: #999;
              text-decoration: line-through;
              font-size: 24px;
            }
          }
          .num {
            font-size: 30px;
            color: #666;
          }
        }
        .van-icon {
          color: #92938b;
          font-size: 40px;
          padding: 0 10px;
        }
      }
      .type {
        padding-bottom: 20px;
        border-bottom: 1px #eee solid;
        width: 100%;
        .title {
          font-size: 34px;
          color: #353630;
          font-weight: normal;
          display: block;
          line-height: 90px;
        }
        .select {
          span {
            padding: 4px 10px;
            border: 1px #e7e9de solid;
            font-size: 30px;
            color: #3f3f3d;
            line-height: 65px;
            margin: 0 10px 6px 0;
            display: inline-block;
          }
          .active {
            border: 1px red solid;
            color: red;
          }
        }
      }
    }
    .skuSpec {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 34px;
        color: #555;
        font-weight: normal;
        margin: 10px 0;
      }
      .step {
        span {
          padding: 8px 20px;
          font-size: 50px;
          color: #666;
          border: 1px #dedede solid;
          text-align: center;
          display: inline-block;
          &.disabled{
            color: #dedede;
            border: 1px #dedede solid;
          }
        }
       
      }
    }
  }
  .detailBtn {
    text-align: center;
    height: 117px;
    position: fixed;
    line-height: 117px;
    font-size: 38px;
    color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px #eee solid;
    background: #fb6650;
    button {
      border: none;
      border: none;
      background: #fff;
    }
    .back {
      width: 80px;
    }
    .add {
      flex: 1;
    }
    .addCart {
      background: #dd1a21;
      color: #fff;
    }
  }
}
</style>
