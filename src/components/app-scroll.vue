<template>
<div class="app-scroll" ref="scroll">
  <div class="scoll-wrap" ref="scrollwrap">
    <div class="loading"></div>
      <slot/>
    <div class="loadmore">
      <van-loading size="40px"></van-loading>
    </div>
  </div>
</div>
</template>

<script>
import { Loading } from 'vant';
import '../lib/iscroll-probe.js'
export default {
  name: 'app-scroll',
  components:{
    [Loading.name]:Loading
  },
  data(){
    return{
      loading:true,
      loadmore:true,
    }
  },
  methods:{
    refreshData(){
      if(this.$children[0].GetDiscoverData){
        this.$children[0].GetDiscoverData();
      }
      if(this.$children[0].GetAttentionData){
        this.$children[0].GetAttentionData();
      }
      if(this.$children[0].GetStoryData){
        this.$children[0].GetStoryData();
      }
    },
    loadMoreData(){
      if(this.$children[0].GetMoreDiscoverData){
        this.$children[0].GetMoreDiscoverData();
      }
      if(this.$children[0].GetMoreAttentionData){
        this.$children[0].GetMoreAttentionData();
      }
      if(this.$children[0].GetMoreStoryData){
        this.$children[0].GetMoreStoryData();
      }
      if(this.$parent.GetMoreGuessData){
        this.$parent.GetMoreGuessData();
      }
    }
  },
  mounted(){
    console.log(this.$children);
    console.log(this.$parent)
    this.$nextTick(()=>{
      this.scroll = new IScroll(this.$refs.scroll, {
        probeType: 3,
      })

      this.scroll.scrollTo(0,-90,0);
      
      this.scroll.on('beforeScrollStart', ()=>{
        this.scroll.refresh();
      });

      this.scroll.on('scrollEnd',()=>{
        let y = this.scroll.y;
        let maxY = this.scroll.maxScrollY;
        let minY = maxY + 90;
        if(y>=0){
          console.log('触发刷新');
          if(this.loading){
            this.loading = false;
            this.refreshData();
            this.scroll.refresh();
            this.loading = true;
            this.scroll.scrollTo(0,-90,300);
          } else{
            this.scroll.scrollTo(0,-90,300);
          }
        } else if(y<0 && y>-90){
          this.scroll.scrollTo(0,-90,300);
        }
        let MmaxY = Math.abs(maxY);
        let MY = Math.abs(y);
        let MinY = Math.abs(minY);

        if(MY >= MmaxY - 70){
          if(this.loadmore){
             this.loadmore = false;
             this.loadMoreData();
             this.scroll.refresh();
             this.scroll.scrollTo(0,minY,300);
             this.loadmore = true;
          } else{
            this.scroll.scrollTo(0,minY,300);
          }
        } else if(MY > MinY && MY < MmaxY){
          this.scroll.scrollTo(0,minY,300);
        } else{
        }
      })
    })
  },
};
</script>

<style scoped lang="scss">
.app-scroll{
  overflow: hidden;
}
.loading{
  width: 100%;
  height: 90px;
  background: url(../assets/home/loading.png);
  background-size: contain;
  background-position: center;
}
.loadmore{
  width:100%;
  height: 70px;
  .van-loading{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 70px;
  }
}
</style>