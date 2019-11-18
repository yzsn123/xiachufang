<template>
    <div class="dialog">
        <div class="share-line border-bottom">
            <div class="swiper-container" ref="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="share-img">
                            <img src="../../../../assets/kitchen/vx.jpg" alt="">
                        </div>
                        <div class="share-name">
                            微信好友
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="share-img">
                            <img src="../../../../assets/kitchen/vx.jpg" alt="">
                        </div>
                        <div class="share-name">
                            朋友圈
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="share-img">
                            <img src="../../../../assets/kitchen/vx.jpg" alt="">
                        </div>
                        <div class="share-name">
                            微博
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="share-img">
                            <img src="../../../../assets/kitchen/vx.jpg" alt="">
                        </div>
                        <div class="share-name">
                            QQ
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="share-img">
                            <img src="../../../../assets/kitchen/vx.jpg" alt="">
                        </div>
                        <div class="share-name">
                            QQ空间
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="share-img">
                            <img src="../../../../assets/kitchen/vx.jpg" alt="">
                        </div>
                        <div class="share-name">
                            知乎
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="share-img">
                            <img src="../../../../assets/kitchen/vx.jpg" alt="">
                        </div>
                        <div class="share-name">
                            微信好友
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="share-img">
                            <img src="../../../../assets/kitchen/vx.jpg" alt="">
                        </div>
                        <div class="share-name">
                            微信好友
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="share-img">
                            <img src="../../../../assets/kitchen/vx.jpg" alt="">
                        </div>
                        <div class="share-name">
                            微信好友
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="share-img">
                            <img src="../../../../assets/kitchen/vx.jpg" alt="">
                        </div>
                        <div class="share-name">
                            微信好友
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="operate-line border-bottom">
            <div class="item">
                <img src="../../../../assets/kitchen/copy.jpg" alt="">
                <div class="item-content">拷贝链接</div>
            </div>
            <div class="item">
                <img src="../../../../assets/kitchen/report.jpg" alt="">
                <div class="item-content">举报</div>
            </div>
        </div>
        <div class="cancel-line" @click="CancelAction">
            取消
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    SwiperInit() {
      this.$mySwiper = new Swiper(this.$refs.swiper, {
        observer: true,
        observeParents: true,
        slidesPerView: "auto",
        freeMode: true
      });
    },
    CancelAction(){
        this.$center.$emit('ChangeShow');
    }
  },
  mounted() {
    this.SwiperInit();
  }
};
</script>

<style lang="scss" scoped>
.dialog {
  width: 100%;
  height: 777px;
  bottom: 0;
  left: 0;
  background: white;
  .share-line {
    height: 315px;
    width: 100%;
    .swiper-container {
      width: 100%;
      height: 100%;
    }
    .swiper-wrapper {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding-left: 38px;
    }
    .swiper-slide {
      height: 100%;
      width: 178px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .share-img {
        width: 126px;
        height: 126px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .share-name {
        width: 100%;
        height: 136px;
        line-height: 136px;
        text-align: center;
        color: #383934;
        font-size: 34px;
      }
    }
  }
  .operate-line{
      width:100%;
      height: 315px;
      box-sizing: border-box;
      padding-left: 38px;
      display: flex;
      .item{
          width: 178px;
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          box-sizing: border-box;
          padding-top: 53px;
          img{
              width: 126px;
              height: 126px;
              display: block;
          }
          .item-content{
              width: 100%;
              height: 136px;
              line-height: 136px;
              text-align: center;
              color: #383934;
          }
      }
  }
  .cancel-line{
      width: 100%;
      height: 145px;
      line-height: 145px;
      text-align: center;
      color: #383934;
      font-size: 47px;
  }
}
</style>

