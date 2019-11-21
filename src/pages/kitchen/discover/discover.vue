<template>
<div class="discover">
    <img src="../../../assets/kitchen/banner.jpg" class="bannerimg" alt="">
    <div class="story">
        <div class="recommend">为你推荐</div>
        <div class="classify" @click="MenuClassify">菜谱分类</div>
    </div>
    <div class="imgwall">
        <ul ref="leftData" class="left-ul">
            <li v-for="(item,index) in LeftDiscoverData" :key="index">
                <div class="imgvessel" :style="{height:GetWidth(item.imageHeight)}" @click="MenuDetail(index)">
                    <img :src="item.picUrl" alt="" v-lazy="item.picUrl">
                </div>
                <div class="imgdesc" ref="imgvessel">
                    {{item.desc}}
                </div>
                <div class="imginfo">
                    <div class="userinfo">
                        <div class="userimg">
                            <img :src="item.headImg" alt="" v-lazy="item.headImg">
                        </div>
                        <div class="userdesc">{{item.username}}</div>
                    </div>
                    <div class="thumbs">
                        <div class="thumbs-num" @click="thumbsAction">
                            <van-icon name="like-o" ref="icon"/>
                            <span ref="span">{{GetNum(item.num)}}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <ul ref="rightData" class="right-ul">
            <li v-for="(item,index) in RightDiscoverData" :key="index">
                <div class="imgvessel" :style="{height:GetWidth(item.imageHeight)}" @click="MenuDetail(index)">
                    <img :src="item.picUrl" alt="" v-lazy="item.picUrl">
                </div>
                <div class="imgdesc" ref="imgvessel">
                    {{item.desc}}
                </div>
                <div class="imginfo">
                    <div class="userinfo">
                        <div class="userimg">
                            <img :src="item.headImg" alt="" v-lazy="item.headImg">
                        </div>
                        <div class="userdesc">{{item.username}}</div>
                    </div>
                    <div class="thumbs">
                        <div class="thumbs-num" @click="thumbsAction">
                            <van-icon name="like-o" ref="icon"/>
                            <span ref="span">{{GetNum(item.num)}}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    LeftDiscoverData() {
      return this.$store.state.kitchen.LeftDiscoverData;
    },
    RightDiscoverData() {
      return this.$store.state.kitchen.RightDiscoverData;
    }
  },
  data() {
    return {
      index: 0,
      thumbsActive:false,
      thumbsIndex:1,
    };
  },
  watch:{
      LeftDiscoverData:function(newVal,oldVal){
          this.$nextTick(()=>{
              this.$center.$emit('ChangeLoading');
              this.$center.$emit('ChangeLoadmore');
          })
      }
  },
  methods: {
    async GetDiscoverData() {
      await this.$store.dispatch("kitchen/requestDiscoverData", 0);
    },
    async GetMoreDiscoverData() {
      await this.$store.dispatch("kitchen/requestDiscoverData", 1);
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
    MenuClassify(){
      this.$router.push('/kitchen/classify')
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
  created() {
    this.GetDiscoverData();
  },
};
</script>

<style lang="scss" scoped>
.bannerimg {
  width: 974px;
  height: 380px;
  margin: 20px auto 0;
  display: block;
}
.story {
  width: 100%;
  height: 208px;
  box-sizing: border-box;
  padding: 0 64px;
  display: flex;
  justify-content: space-between;
  .recommend {
    height: 208px;
    line-height: 208px;
    font-size: 56px;
    color: #383830;
  }
  .classify {
    height: 208px;
    line-height: 208px;
    font-size: 40px;
    color: #999999;
  }
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
        width: 252px;
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
        width: 160px;
        height: 100%;
        box-sizing: border-box;
        .thumbs-num {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
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
.active{
    color: #f8664f !important;
}
.left-ul > li {
  padding: 0 13px 0px 26px;
}
.right-ul > li {
  padding: 0 26px 0 13px;
}
</style>

