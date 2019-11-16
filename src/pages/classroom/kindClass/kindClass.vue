<template>
  <div id="kindClass">
      <div class="header">
          <span class="iconfont icon-fanhui" @click="backAction"> </span>
          <h3>课堂</h3>
      </div>

  </div>
</template>

<script>
export default {
  props: {
    id: String
  },
  methods:{
      backAction(){
          this.$router.back();
      }
  }
};
</script>

<style lang="scss" scoped>
.pages {
  #kindClass {
    background: white;
    position: absolute;
    z-index: 9;
    left: 0;
    top: 0;
    bottom: -49px;
    width: 100%;
  }
}
#kindClass{
    .header{
        position: absolute;
        left: 0;
        top: 0;
        height: 44px;
        width: 100%;
        text-align: center;
        font-size: 16px;
        line-height: 44px;
        font-weight: 550;
        span{
            position: absolute;
            left: 28px;
            top: 0;
            height: 100%;
        }
    }
}
</style>