<template>
  <div id="detail">
    <div class="header">
      <span class="iconfont icon-fanhui" @click="backAction"></span>
      <span class="iconfont icon-wechat"></span>
      <span class="iconfont icon-pengyouquan"></span>
      <span class="iconfont icon-sandian"></span>
    </div>
    <div class="content">
      <myScroll :name="myScroll">
        <div class="banner">
          <van-swipe :autoplay="3000" indicator-color="white" style="height:100%">
            <van-swipe-item v-for="(item,index) in detailInfo.bannerList" :key="index">
              <img :src="item.picUrl" alt />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="info">
          <h3>{{detailInfo.title}}</h3>
          <div class="userInfo">
            <div class="userImg">
              <img :src="detailInfo.userImg" alt />
              <span>{{detailInfo.userName}}</span>
            </div>
            <em>关注</em>
          </div>
          <p>
            <span class="iconfont icon-shizhong-mianxing"></span>
            总时长{{detailInfo.hour}}小时{{detailInfo.mini}}分钟
          </p>
          <p>
            <span class="iconfont icon-user"></span>
            {{detailInfo.num}}人参与
          </p>
          <p>
            <van-rate v-model="value" allow-half void-icon="star" void-color="#eee" />
            {{detailInfo.grade}}分<em>{{detailInfo.count}}人评分</em>
          </p>
        </div>
      </myScroll>
    </div>
    <div class="footer">
        <span class="iconfont icon-ganxingqu"> 收藏</span>
        <div class="btn" @click="buyClass">￥{{detailInfo.price}}.9购买课程</div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant";
import { Rate } from "vant";
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Rate.name]: Rate
  },
  props: {
    id: String
  },
  data() {
    return {
      detailInfo: {},
      myScroll: "detailScroll",
      value: null,
    };
  },
  methods: {
    async getDetail() {
      await this.$store.dispatch("Class/getDetail", this.id);
      this.detailInfo = this.$store.state.Class.detailInfo.data.data;
      this.value = (this.detailInfo.grade) / 2;
    },
    backAction(){
        this.$router.back();
    },
    buyClass(){
        var arr = [];
        let info = {
          selectId:this.detailInfo.id,
          selectPic: this.detailInfo.bannerList[0].picUrl,
          selectTit: this.detailInfo.title,
          selectNum: 1,
          selectInfo: [],
          currentPrice: `${this.detailInfo.price}.9`,
          selectInput:false,
          checked:false,
        }
         arr.push(info);
         this.$store.commit("marketOrder/selectProduct", arr);
         this.$router.push(`/market/detail/${this.detailInfo.id}/order`);
    }
  },
  created() {
    this.getDetail();
  }
};
</script>

<style lang="scss" scoped>
.pages {
  #detail {
    width: 100%;
    position: absolute;
    top: 0;
    bottom: -49px;
    background: white;
    z-index: 9;
  }
  .header {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: 44px;
    line-height: 44px;
    color: white;
    font-size: 16px;
    z-index: 9;

    background: transparent;
    span {
      padding: 0 10px;
    }
  }
  .content {
    width: 100%;
    top: 0;
    bottom: 49px;
    position: absolute;
  }
  .footer {
    width: 100%;
    left: 0;
    bottom: 0;
    height: 49px;
    position: absolute;
  }
}
#detail {
  .banner {
    width: 100%;
    height: 1000px;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
    }
  }
  .info {
    width: 100%;
    box-sizing: border-box;
    padding: 60px 45px;
    h3 {
      line-height: 80px;
      font-size: 50px;
      font-weight: bold;
      color: #333;
    }
    .userInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 84px;
      margin-top: 50px;
      .userImg {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 84px;
          height: 84px;
          border-radius: 50%;
          margin-right: 20px;
        }
        span {
          font-size: 36px;
          color: #383933;
        }
      }
      em {
        display: inline-block;
        padding: 25px 40px;
        border-radius: 5px;
        border: 2px solid #d17566;
        color: #d17566;
        font-size: 36px;
      }
    }
    p {
      margin-top: 64px;
      font-size: 34px;
      color: #383933;
      span {
        margin-right: 30px;
      }
      em{
          color: #aaa;
          margin-left: 10px;
      }
    }
  }
  .footer{
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      span{
          font-size: 45px;
          color:#ed7565;
      }
      .btn{
          width: 845px;
          text-align: center;
          background: #ed7565;
          color: white;
          height: 115px;
          line-height: 115px;
          border-radius: 10px;
      }
  }
}
</style>