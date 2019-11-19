<template>
  <div class="store-box">
    <div class="store-list" v-for="(data,index) in data" :key="index">
      <div class="title-wrap">
        <div class="title-box">
          <h1>{{data.kind}}</h1>
          <span class="tips">{{data.tag}}</span>
        </div>
        <div class="all">查看全部</div>
      </div>
      <!-- Swiper -->
      <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in data.goodList"  :key="index" @click="goDetailAction(item.id,item.title)" >
            <div class="cell" >
              <div class="pic">
                <img :src="item.picUrl" />
                <div class="tips">
                  <p class="name">包邮</p>
                </div>
              </div>
              <div class="price">
                <h2 class="title">{{item.title}}</h2>
                <p class="tips">{{item.desc}}</p>
              </div>
              <div class="info">
                <div class="price-box">
                  <div class="currentPrice">￥{{item.currentPrie}}</div>
                  <div class="originPrice">￥ {{item.originPrice}}</div>
                </div>
                <span class="mail">包邮</span>
              </div>
            </div>
          </div>
        </div>
        <!-- Add Pagination -->
        <!-- <div class="swiper-pagination"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import marketService from '../../../../services/marketService'
// import {mapState} from 'vuex'
export default {
  data() {
    return {
      storeList: [
        { id: 1, title: "手工吐司1", name: "吐司1" },
        { id: 2, title: "手工吐司2", name: "吐司2" },
        { id: 3, title: "手工吐司3", name: "吐司3" },
        { id: 4, title: "手工吐司4", name: "吐司4" }
      ],
      data: []
    };
  },
  mounted() {
    this.SwiperInit();
  },
  created() {
    this.initData();
  },
  methods: {
    
    SwiperInit(){
      this.$swiper = new Swiper(this.$refs.swiper, {
            pagination: ".swiper-pagination",
            slidesPerView: "auto",
            paginationClickable: true,
            spaceBetween: 10,
            direction : 'horizontal',
            observer:true,
            observeParents:true
          });
    },
    goDetailAction(id,title){
      this.$store.commit('marketOrder/titleInfo',title);
      this.$router.push(`/market/detail/${id}`);
      // console.log(id);  
    },
    async initData() {
      const { MarketNewData: result } = await marketService.requestMarketNewData();
      this.data = result;
      this.$nextTick(()=>{
         this.SwiperInit();
      })
    }
  },
  // 监听data数据
  watch:{
    data(){
    }
  }
};
</script>

<style lang="scss" scoped>
.store-list {
  margin: 35px 0 0 10px;
  overflow: hidden;
  .cell {
    width: 100%;
    padding-right: 10px;
    padding-bottom: 20px;
    box-sizing: border-box;
    overflow: hidden;
    width: 415px;

    .pic {
      position: relative;
      width: 415px;
      height: 415px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
      .tips {
        top: 6%;
        left: 6%;
        transform: translate(-6%, -6%);
        position: absolute;
        text-align: center;
        color: #000000;
        background: #f8e71d;
        border-radius: 10px;
       
        .tit {
          font-weight: bold;
          padding-bottom: 10px;
          font-size: 40px;
        }
        .name {
          font-size: 32px;
          padding: 10px;
          height: 50px;
          line-height: 50px;
        }
      }
    }
    .price {
      .title {
        font-size: 42px;
        height: 82px;
        line-height: 82px;
        color: #313131;
      }
      .tips {
        color: #959595;
        font-size: 36px;
        padding-bottom: 20px;
      }
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0 20px 0;
      font-size: 32px;
      .price-box {
        display: flex;
        color: #fb6650;
        align-items: flex-end;
        font-family: "Arial";
        .originPrice {
          color: #959595;
          text-decoration: line-through;
          padding: 0 0 0 10px;
        }
      }
      .mail {
        font-size: 35px;
        color: #959595;
      }
    }
  }
}

.swiper-container {
  width: 100%;
  margin: 20px 0 20px 20px;
}
.swiper-slide {
  font-size: 18px;
  background: #fff;
  width: 40%;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>