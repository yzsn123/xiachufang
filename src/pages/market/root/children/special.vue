<template>
  <div class="special-container">
    <div class="title-wrap">
      <div class="title-box">
        <h1>{{data.kind}}</h1>
        <span class="tips">{{data.tag}}</span>
      </div>
      <div class="all">查看全部</div>
    </div>
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(data,index) in showList" :key="index">
          <li v-for="(item,index) in data" :key="index" @click='goDetailAction(data.item,data.title)'>
            <div class="right">
              <img :src="item.picUrl" alt />
            </div>
            <div class="left">
              <div class="left-box">
                <h3 class="title ">{{item.title}}</h3>
                <div class="price">
                  <span>尝鲜价{{item.currentPrie}}元包邮，原价{{item.originPrice}}</span>
                </div>
              </div>
              <p class="txt">
                <span class="origin">来自:下厨房市集</span>
                <span class="sale">已售 9</span>
              </p>
            </div>
          </li>
        </div>
      </div>
      <!-- Add Pagination -->
      <!-- <div class="swiper-pagination"></div> -->
    </div>
  </div>
</template>

<script>
import marketService from "../../../../services/marketService";
export default {
  created() {
    this.initData();
  },
  data() {
    return {
      banner: require("../../../../assets/market/index/market-banner-01.jpg"),
      data: []
    };
  },
  methods: {
    async initData() {
      const {
        MarketFreshData: result
      } = await marketService.requestMarketNewData();
      this.data = result;
      this.$nextTick(() => {
        this.SwiperInit();
      });
      console.log(this.data);
    },
    SwiperInit() {
      var swiper = new Swiper(this.$refs.swiper, {
        pagination: ".swiper-pagination",
        slidesPerView: "auto",
        paginationClickable: true,
        spaceBetween: 10
      });
    },
    goDetailAction(id,name){
      this.$router.push(`/market/detail/${id}?title=${name}`);
    }

  },
  mounted() {
    this.SwiperInit();
  },
  computed: {
    showList() {
      //拷贝数组，保持数据单向流动
      let itemList = [...this.data.goodList];
      //创建空数组装临时数组
      let tmp = [];
      //切割数组，2组为一个
      while (itemList.length > 0) {
        tmp = [...tmp, itemList.splice(0, 3)];
      }
      console.log(tmp);

      //处理好的数组给组件使用
      return tmp;
    }
  },
  watch: {
    data() {}
  }
};
</script>

<style lang="scss" scoped>
.swiper-slide {
  display: flex;
  flex-direction: column;
  li {
    float: left;
    width: 100%;
    box-sizing: border-box;
    margin: 0 0 30px 0;
    border-right: 6px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    height: 100%;
    box-sizing: border-box;
    list-style: none;
    display: flex;

    .left {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      flex: 1;
      .title {
        font-size: 34px;
        color: #383830;
        padding: 0 0 15px 0;
        line-height: 50px;  
      }
      .txt {
        font-size: 28px;
        padding-bottom: 16px;
        color: #959595;
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      .price {
        font-size: 30px;
        color: #fc4027;
        .origin {
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
      width: 260px;
      height: 260px;
      margin: 0 30px 0 0;
      img {
        width: 100%;
        border-radius: 10px;
        height: 100%;
      }
    }
  }

  .special-container {
    margin-top: 20px;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    ul {
      margin: 0 0 0 20px;
      box-sizing: border-box;
    }
  }
}
.swiper-container {
  margin: 0 0 0 30px;
}

.swiper-slide {
  font-size: 18px;
  background: #fff;
  width: 80%;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
// .swiper-slide:nth-child(2n) {
//     width: 40%;
// }
// .swiper-slide:nth-child(3n) {
//     width: 20%;
// }
</style>