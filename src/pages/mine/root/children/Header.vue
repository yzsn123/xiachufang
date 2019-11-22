<template>
  <div class="header" >
      <span class="iconfont icon-iconfront-"> </span>
      <div class="search">
        <span class="iconfont icon-sousuo"></span>
        <input type="text" placeholder="搜索我的菜谱" />
      </div>
      <span class="iconfont icon-xinyonghu"> </span>
      <span class="iconfont icon-shezhi" @click="setAction"> </span>
  </div>
</template>

<script>
export default {
  methods:{
    //跳转到设置
    setAction(){
      this.$router.push('/mine/set');
    }
  }
}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    height: 44px;
    background: white;
    display: flex;
    font-size: 24px;
    position: absolute;
    left: 0;
    top: 0;
    .search {
      width: 70%;
      height: 35px;
      line-height: 35px;
      display: flex;
      font-size: 12px;
      color: #999;
      border-radius: 5px;
      background: #f2f2f0;
      span {
        color: #93948e;
        width: 32px;
        text-align: center;
      }
      input {
        flex: 1;
        background: transparent;
      }
      ::-webkit-input-placeholder {
        color: #b7b8b3;
      }
    }
}
</style>