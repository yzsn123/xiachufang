<template>
<div class="detail-wrap">

  <div class="detail-container">
    <Header :hasLocation="false" :title="title" />
    <app-scroll class="content">
      <DetailBanner :detailBanner="detailBanner" />
      <div class="score-box">
        <ul>
          <p>评分</p>
          <span>4.9</span>
        </ul>
        <ul>
          <p>月销</p>
          <span>850件</span>
        </ul>
        <ul>
          <p>总销量</p>
          <span>10000件</span>
        </ul>
      </div>

      <!-- 商品详情 -->
      <div class="item-content">
        <p class="des text-overflow">{{detailData.desc}}</p>
        <h3 class="name multiline">{{detailData.title}}</h3>
        <div class="info">
          <div class="price-box">
            <div class="currentPrice">￥{{detailData.currentPrice}}</div>
            <div class="originPrice">￥ {{originPrice}}</div>
          </div>
          <span class="mail">包邮</span>
        </div>
        <div class="tag">{{detailData.tag}}</div>
      </div>
    </app-scroll>

    <!-- 加入购物车 -->
    <div class="tab-bar border-top">
      <div class="group one">
        <van-icon name="shop-o" />
        <span>店铺</span>
      </div>
      <div class="group one">
        <van-icon name="smile-comment-o" />
        <span>联系卖家</span>
      </div>
      <div class="group bg" @click="showAddCartAction">
        <span>加入购物车</span>
      </div>
      <div class="group bg" @click="showAddCartAction">
        <span>立即购买</span>
      </div>
    </div>

    <!-- 加入购物车 -->
    <SelectPanel
      v-if="showAddCart"
      v-model="showAddCart"
      :skuPic="detailBanner[0]"
      :skuDetail="detailData.sku"
      :data="detailData"
      @send="handleAction"
    />
   </div>

   <!-- 渲染订单页面 -->
  <transition class="" enter-active-class="slideInRight" leave-active-class="slideOutRight">
    <router-view></router-view>
  </transition>

  </div>
</template>

<script>
import Header from "../root/children/Header";
import DetailBanner from "./children/Banner";
import SelectPanel from "./children/selectPanel";
import marketService from "../../../services/marketService";
import { mapState } from 'vuex';
export default {
  components: {
    Header,
    DetailBanner,
    SelectPanel
  },
  data() {
    return {
      showAddCart: false,
      detailData: {},
      detailBanner: [],
    };
  },
  computed: {
    ...mapState({
      title:state=>state.marketOrder.title
    }),
    count(){
      console.log(this.$store.state.marketOrder.title);
      
    },

    //计算原价的价格
    originPrice: function() {
      
      return (
        this.detailData.currentPrice + this.detailData.originPrice
      ).toFixed(2);
    }
  },
  methods: {
    async initData() {
      const result = await marketService.requestDetailDate();
      this.detailData = result.detailData;
      this.detailBanner = result.detailData.bannerList;
    },
    showAddCartAction() {
      this.showAddCart = true;
      console.log(this.title);
      
    },
    handleAction(item) {}
  },
  created() {
    this.initData();
  }
};
</script>

<style lang="scss" scoped>
.detail-wrap {
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 200;
  width: 100%;
  height: 100%;
  .score-box {
    display: flex;
    margin: 0 20px;
    justify-content: space-between;
    font-size: 36px;
    padding: 30px 0;
    border-bottom: 1px #e9eae5 solid;
    ul {
      flex-direction: row;
      p {
        display: inline-block;
        color: #94958f;
        margin-right: 10px;
      }
      span {
        color: #f06955;
        display: inline-block;
      }
    }
  }
  .item-content {
    font-size: 20px;
    color: #94958f;
    padding: 0 20px;
    box-sizing: border-box;
    .name {
      padding: 30px 0;
      font-size: 40px;
      color: #383830;
      line-height: 60px;
      font-weight: 550;
      color: #383934;
    }
    .des {
      padding: 30px 0 0 0;
      font-size: 36px;
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0 20px 0;
      font-size: 50px;
      .price-box {
        display: flex;
        color: #df7164;
        align-items: flex-end;
        font-family: "Arial";
        .originPrice {
          font-size: 40px;
          color: #94958f;
          text-decoration: line-through;
          padding: 0 0 0 10px;
        }
      }
      .mail {
        font-size: 40px;
      }
    }

    .tag {
      background: #fb6650;
      border-radius: 10px;
      font-size: 36px;
      color: #fff;
      text-align: center;
      height: 40px;
      padding: 0 10px;
      display: inline-block;
      font-weight: 700;
      padding: 10px 20px;
    }
  }
  .tab-bar {
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 49px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .group {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-size: 12px;
        color: #959691;
      }
      .van-icon {
        padding: 4px 0;
        font-size: 18px;
      }
    }
    .group:nth-child(3) {
      border-right: 1px #fff solid;
    }
    .one {
      width: 60px;
    }
    .bg {
      background: #f8664f;
      text-align: center;
      height: 49px;
      line-height: 49px;
      span {
        color: #fff;
      }
    }
  }
}
</style>