<template>
  <div class="header border-bottom">
      <div class="search">
        <span class="iconfont icon-sousuo"></span>
        <input type="text" placeholder="想学点什么？" />
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    .search {
      width: 90%;
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