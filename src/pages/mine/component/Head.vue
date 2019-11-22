<template>
  <div class="header">
    <span class="iconfont icon-fanhui" @click="backAction"></span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  methods: {
    backAction() {
      this.$router.back();
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    background: white;
    width: 100%;
    justify-content: center;
    line-height: 44px;
    height: 44px;
    font-size: 16px;
    color: #333;
    h3 {
      font-weight: bold;
    }
    span {
      position: absolute;
      top: 0;
      padding: 0 15px;
      left: 0;
    }
  }
</style>