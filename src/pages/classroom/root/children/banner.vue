<template>
  <div class="banner">
    <div class="banImg">
      <img src="../../../../assets/img/class_ban1.jpg" alt />
      <img src="../../../../assets/img/class_ban2.jpg" alt />
    </div>
    <div class="banNum">
      <span>
        <em></em>
      </span>
      <span>
        <em></em>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.banner {
    width: 100%;
    height: 580px;
    overflow: hidden;
    position:relative;
    .banImg {
      width: 200%;
      animation: bannerMove 6s linear infinite both;
      overflow: hidden;
      img {
        float: left;
        width: 50%;
        height: 100%;
      }
    }
    .banNum {
      width: 100%;
      height: 25px;
      position: absolute;
      left: 0;
      // top: 510px;
      bottom:50px;
      text-align: center;
      span {
        width: 40%;
        margin: 20px;
        display: inline-block;
        position: relative;
        height: 5px;
        background: #2b2831;
        em{
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 0;
            background: white;
        }
        &:nth-of-type(1) em {
          animation: bannerNum 6s linear infinite both;
        }
        &:nth-of-type(2) em {
          animation: bannerNum 6s linear 3s infinite both;
        }
      }
    }
  }

@keyframes bannerMove {
  0% {
    transform: translateX(0);
  }
  45% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-50%);
  }
  95% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes bannerNum {
  0% {
    width: 0;
  }
  45% {
    width: 100%;
  }
  45.1% {
    width: 0;
  }
}
</style>