<template>
    <div class="kitchen">
        <header class="header">
            <span class="add-Icon"><van-icon name="plus" size="27px" /></span>
            <input type="text" class="input" placeholder="搜索菜谱、食材" @click="InputClick">
            <span class="ring-Icon" @click="MessagePush"><van-icon name="flower-o" size="27px"  /></span>
            <p class="input-icon"></p>
        </header>
        <nav class="navitem">
            <ul>
                <li class="navlist" v-for="(item,index) in navlist" :key="item.id" @click="clickAction(index)" :class="{active:selectIndex===index}">{{item.title}}</li>
            </ul>
        </nav>
        <keep-alive>
          <dinner ref="swipers" v-if="Swipershow"/>
        </keep-alive>
        <div class="swiper-container" ref="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <keep-alive>
                    <app-scroll v-if="selectIndex===0" ref="Iscroll">
                      <attention/>
                    </app-scroll>
                  </keep-alive>
                </div>
                <div class="swiper-slide">
                  <keep-alive>
                    <app-scroll v-if="selectIndex===1" ref="Iscroll">
                       <discover/>
                    </app-scroll>
                  </keep-alive>
                </div>
                <div class="swiper-slide">
                  <keep-alive>
                    <app-scroll v-if="selectIndex===2" ref="Iscroll">
                      <story/>
                    </app-scroll>
                  </keep-alive>
                </div>
            </div>
        </div>
        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import discover from '../discover/discover'
import attention from '../attention/attention'
import story from '../story/story'
import dinner from '../story/children/dinner'
export default {
  components:{
      discover,
      attention,
      story,
      dinner
  },
  data() {
    return {
      navlist: [
        { title: "关注", id: 1 },
        { title: "发现", id: 2 },
        { title: "故事", id: 3 }
      ],
      selectIndex: 1,
      Swipershow:false,
    };
  },
  computed:{
    GetWidth(){
        // console.log(document.body.getBoundingClientRect());
        return document.body.getBoundingClientRect().width;
    }
  },
  methods: {
    clickAction(index) {
      if(this.selectIndex != index){
         this.Swipershow = false;
      }
      this.selectIndex = index;
      this.$mySwiper.slideTo(index, 500, false);
    },
    SwiperInit(){
        this.$mySwiper = new Swiper(this.$refs.swiper,{
            observer:true,
            observeParents:true
        });
    },
    SwiperMove(){
      this.$refs.swiper.ontouchstart = (ev)=>{
        document.ontouchend = (ev)=>{
            this.selectIndex = this.$mySwiper.activeIndex;
        }
      }
    },
    ChangeSwipershow(){
      this.Swipershow = true;
    },
    NoneSwipershow(){
      this.Swipershow = false;
    },
    MessagePush(){
      this.$router.push('/kitchen/message');
    },
    InputClick(){
      // console.log(1);
      this.$router.push('/kitchen/search');
    },
    ChangeSelectIndex(val){
      this.selectIndex = val;
      this.$mySwiper.slideTo(this.selectIndex, 500, false);
    }
  },
  created(){
    this.$center.$on('ChangeSwipershow',this.ChangeSwipershow);
    this.$center.$on('NoneSwipershow',this.NoneSwipershow);
    this.$center.$on('ChangeSelectIndex',this.ChangeSelectIndex);
  },
  mounted(){
    this.SwiperMove();
    this.SwiperInit();
    this.$mySwiper.slideTo(this.selectIndex,500,false);
  },
/*   beforeDestroy(){
    this.$center.$off('ChangeSwipershow',this.ChangeSwipershow);
    this.$center.$off('NoneSwipershow',this.NoneSwipershow);
    this.$center.$off('ChangeSelectIndex',this.ChangeSelectIndex);
  } */
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 49px;
  position: absolute;
  left: 0;
  top: 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  span {
    width: 53px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input {
    flex: 1;
    height: 35px;
    border: none;
    background: #f2f2f0;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 27px;
    background-image: url(../../../assets/home/search.png);
    background-repeat: no-repeat;
    background-position: 9px 11px;
    background-size: 12px 12px;
  }
  .input-icon {
    background: url(../../../assets/home/mircel.png) no-repeat;
    height: 35px;
    width: 26px;
    position: absolute;
    right: 53px;
    top: 7px;
    background-position: 0px 8px;
    background-size: 13px 17px;
  }
}
.navitem {
  width: 100%;
  height: 44px;
  position: absolute;
  top: 44px;
  left: 0;
  display: flex;
  justify-content: center;
  ul {
    width: 153px;
    height: 44px;
    display: flex;
    justify-content: space-around;
    & > .navlist {
      height: 100%;
      line-height: 44px;
      font-size: 14px;
      color: #999999;
      box-sizing: border-box;
    }
    & > .navlist.active {
      border-bottom: 3px solid #f8664f;
      color: #383830;
    }
  }
}
.swiper-container{
    position: absolute;
    left: 0;
    width: 100%;
    top: 88px;
    bottom: 0px;
}
.swiper-slide{
  position: relative;
}
.app-scroll{
    width: 100%;
    height: 100%;
}
.content {
  width: 100%;
  position: absolute;
  top: 88px;
  bottom: 49px;
  left: 0;
  background: #eeeeee;
}
</style>


