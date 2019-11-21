<template>
    <div class="story" ref="container">
        <div class="swiper-container swiper" ref="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in BannerList" :key="index">
                    <img :src="item.picUrl" v-lazy="item.picUrl" alt="">
                </div>
            </div>
        </div>
        <dinner ref="swipers" />
        <div class="imgwall">
            <ul ref="leftData" class="left-ul">
                <li v-for="(item,index) in LeftStoryData" :key="index">
                    <div class="imgvessel" :style="{height:GetWidth(item.imageHeight)}"  @click="MenuDetail(index)">
                        <img :src="item.picUrl" alt="" v-lazy="item.picUrl">
                    </div>
                    <div class="imgdesc" ref="imgvessel">
                        {{item.title}}
                    </div>
                    <div class="imginfo">
                        <div class="userinfo">
                            <div class="userimg">
                                <img :src="item.userImg" alt="" v-lazy="item.userImg">
                            </div>
                            <div class="userdesc">{{item.username}}</div>
                        </div>
                        <div class="thumbs">
                            <div class="thumbs-num" @click="thumbsAction">
                                <van-icon name="like-o"/>
                                <span>{{GetNum(item.num)}}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <ul ref="rightData" class="right-ul">
                <li v-for="(item,index) in RightStoryData" :key="index">
                    <div class="imgvessel" :style="{height:GetWidth(item.imageHeight)}" @click="MenuDetail(index)">
                        <img :src="item.picUrl" alt="" v-lazy="item.picUrl">
                    </div>
                    <div class="imgdesc" ref="imgvessel">
                        {{item.title}}
                    </div>
                    <div class="imginfo">
                        <div class="userinfo">
                            <div class="userimg">
                                <img :src="item.userImg" alt="" v-lazy="item.userImg">
                            </div>
                            <div class="userdesc">{{item.username}}</div>
                        </div>
                        <div class="thumbs">
                            <div class="thumbs-num" @click="thumbsAction">
                                <van-icon name="like-o"/>
                                <span>{{GetNum(item.num)}}</span>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import offset from "../../../utils/offset.js";
import dinner from './children/dinner'
export default {
    components:{
        dinner
    },
    data(){
        return{
            SwiperShow:true,
            thumbsIndex:1,
        }
    },
    computed:{
        LeftStoryData() {
            return this.$store.state.story.LeftStoryData;
        },
        RightStoryData() {
            return this.$store.state.story.RightStoryData;
        },
        BannerList(){
            return this.$store.state.story.BannerList;
        }
    },  
    watch:{
        LeftStoryData:function(newVal,oldVal){
            this.$nextTick(()=>{
                this.$center.$emit('ChangeLoading');
                this.$center.$emit('ChangeLoadmore');
            })
        }
    },
    methods:{
        SwiperInit(){
            this.$mySwiper = new Swiper(this.$refs.swiper, {
                observer: true,
                observeParents: true,
                slidesPerView: "auto",
                freeMode: true
            });
        },
        async GetStoryData() {
            await this.$store.dispatch("story/requestStoryData", 0);
        },
        async GetMoreStoryData() {
            await this.$store.dispatch("story/requestStoryData", 1);
        },
        GetWidth(item) {
            let GetWidth = document.body.getBoundingClientRect().width;
            let ServiceWidth = GetWidth * 26 / 1080;
            let ImageWidth = (GetWidth - 3 * ServiceWidth) / 2;
            let ImageHeight = ImageWidth * parseInt(item) / 500 + "px";
            return ImageHeight;
        },
        GetNum(item) {
            if (item > 9999) {
                return (item = (item / 10000).toFixed(1) + "万");
            } else {
                return item;
            }
        },
        MenuDetail(index){
            this.$router.push(`/kitchen/detail/${index}`);
        },
        thumbsAction(ev){
            // console.log(ev);
            this.thumbsIndex = this.thumbsIndex + 1;
            if(this.thumbsIndex % 2){
                ev.path[1].lastChild.style.color="#999999";
                ev.path[1].firstChild.style.color="#999999";
            } else{
                ev.path[1].lastChild.style.color="#f8664f";
                ev.path[1].firstChild.style.color="#f8664f";
            }
        }
    },
    created(){
        this.GetStoryData();
    },
    mounted(){
        this.SwiperInit();
    }
}
</script>

<style lang="scss" scoped>
.swiper{
    width: 100%;
    height: 390px;
    box-sizing: border-box;
    padding-left: 52px;
    padding-right: 20px;
    .swiper-wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        .swiper-slide{
            width:470px;
            height: 323px;
            margin-right: 32px;
            img{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
    }
}
.active{
    color: #f8664f !important;
}
.imgwall {
  width: 100%;
  display: flex;
}
.imgwall ul {
  width: 50%;
  box-sizing: border-box;
  & > li {
    margin-bottom: 84px;
    .imgvessel {
      // width: 100%;
      width: 500px;
      img {
        width: 100%;
      }
    }
    .imgdesc {
      width: 100%;
      height: 106px;
      margin-top: 25px;
      color: #383830;
      font-size: 40px;
      line-height: 54px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .imginfo {
      display: flex;
      justify-content: space-between;
      height: 50px;
      width: 100%;
      margin-top: 30px;
      .userinfo {
        height: 100%;
        display: flex;
        .userimg {
          width: 50px;
          height: 50px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .userdesc {
          height: 50px;
          margin-left: 12px;
          font-size: 30px;
          line-height: 50px;
          color: #9a9a9a;
        }
      }
      .thumbs {
        width: 146px;
        height: 100%;
        box-sizing: border-box;
        .thumbs-num {
          width: 100%;
          height: 100%;
          display: flex;
          .van-icon {
            font-size: 36px;
            line-height: 50px;
          }
          span {
            font-size: 27px;
            line-height: 50px;
            color: #999999;
            margin-left: 15px;
          }
        }
      }
    }
  }
}
.left-ul > li {
  padding: 0 13px 0px 26px;
}
.right-ul > li {
  padding: 0 26px 0 13px;
}



.red{
    width: 100%;
    height: 100000px;
}
</style>

