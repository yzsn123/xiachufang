<template>
  <div class="Horizontal border-bottom" ref="Horizontal">
    <div class="Hwrap" ref="Hwrap">
      <ul class="listTab">
        <li
          v-for="(item,index) in kindList"
          :key="item.id"
          :index="index"
          :class="{selectTab : index == tabIndex}"
          @click="tabAction(index)"
          :ref="item.id"
        >{{item.kind}}</li>
      </ul>
    </div>
    <span></span>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    kindList: Array
  },
  data() {
    return {
      tabIndex: 0,
      left: null,
      preIndex: 0
    };
  },
  methods: {
    tabAction(index) {
      this.tabIndex = index;
      //获取外面容器的位置
      let HorizontalWidth = this.$refs.Horizontal.offsetWidth;
      let HwrapWidth = this.$refs.Hwrap.offsetWidth;
      //获取所有kindList的index
      for (var k in this.kindList) {
        //得到点击对应的index
        if (this.kindList[k].index == index) {
          //获取对应index的dom
          let id = this.kindList[k].id;
          //获取对应dom的offsetLeft
          let wleft = this.$refs[id][0].offsetLeft;
        
          let width = this.$refs[id][0].offsetWidth;
          //如果点击的点位于右半边，则
          if (wleft > HorizontalWidth / 2 && this.preIndex < index) {
              if(Math.abs(HorizontalWidth / 2 - wleft ) + HorizontalWidth - width < HwrapWidth)
                this.left = HorizontalWidth / 2 - wleft;
          }
          //如果点击的点位于左半边，则
          if (wleft - width < HorizontalWidth / 2 && this.preIndex > index) {
            //   console.log(wleft, HorizontalWidth / 2,HorizontalWidth / 2 - wleft)
            //     if(wleft == 0){
            //     }else if(wleft + width > HorizontalWidth / 2 && wleft < HorizontalWidth / 2){
            //         console.log('执行',HorizontalWidth / 2 - wleft - width)
            //         this.left = HorizontalWidth / 2 - wleft - (width / 2);
            //     }else{
                    
            //     }
                this.left = HorizontalWidth / 2 - wleft;
          }
        }
      }
      this.preIndex = index;
    }
  },
  watch: {
    left() {
      this.scroll = new BScroll(this.$refs.Horizontal, {
        tap: true,
        click: true,
        scrollX: true,
        probeType: 3,
        // bounce:false
      });
      // 如果需要滚动，先刷新滚动视图，就可以在可滚动范围内滚动
      this.scroll.on("beforeScrollStart", () => {
        this.scroll.refresh();
      });
    //   console.log(this.scroll.x,this.scroll.maxScrollX);
        this.scroll.scrollTo(this.left, 0, 300);
    }
  },
  mounted() {
    this.left = 0;

  },
};
</script>

<style lang="scss" scoped>
.Horizontal {
  width: 100%;
  height: 116px;
  position: fixed;
  left: 0;
  top: 124px;
  z-index: 99;
  background: white;
  overflow: hidden;
  .Hwrap {
    width: 132%;
    .listTab {
      width: 100%;
      height: 116px;
      line-height: 116px;
      color: #d2d2d2;
      font-size: 40px;
      overflow: hidden;
      li {
        float: left;
        padding: 0 40px;
      }
    }
    .selectTab {
      color: black;
    }
  }
  span{
      width: 10px;
      height: 100%;
      background: red;
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      right: 0;
      margin: auto;
  }
}
</style>