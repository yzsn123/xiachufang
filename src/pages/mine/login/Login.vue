<template>
  <div id="login">
    <div class="header">{{title}}</div>
    <div class="title">
      <div>
        <h3>把美食与爱保存下来</h3>
        <h4>没人生下来就是好厨师，轻点收藏，将你最喜欢的菜谱保存下来，为你的下一顿私房红烧肉做好准备。</h4>
      </div>
    </div>

    <button class="weixin">使用微信登录</button>
    <button class="phone">手机登录注册</button>
    <p>
      登录注册即代表你同意下厨房
      <em>《用户协议》</em>和
      <em>《隐私政策》</em>
    </p>
    <h3 class="other">其他登录选项</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path: null,
      title:null
    };
  },
  created() {
    if (window.location.pathname == "/mine") {
      this.path = "mine";
      this.title = '我'
    } else if (window.location.pathname == "/collect") {
      this.path = "collect";
      this.title = '收藏'
    }
    console.log(window.location.pathname);
  }
};
</script>

<style lang="scss" scoped>
#login {
    .header{
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        font-size: 20px;
        line-height: 44px;
        height: 44px;
    }
  width: 100%;
  box-sizing: border-box;
  padding: 0 50px;
  text-align: center;
  .title {
    margin-top: 500px;
    h3 {
      font-size: 68px;
      color: #1d1d1b;
    }
    h4 {
      line-height: 58px;
      font-size: 36px;
      color: #424242;
      margin: 126px 0 70px 0;
    }
  }
  button {
    width: 100%;
    height: 108px;
    line-height: 108px;
    color: white;
    font-size: 46px;
    margin: 25px 0;
  }
  .weixin {
    background: #70bd53;
  }
  .phone {
    background: #f8664f;
  }
  p {
    margin-top: 30px;
    font-size: 24px;
    color: #3c3c3c;
    em {
      color: #ff8d9b;
    }
  }
  .other {
    margin-top: 120px;
    font-size: 40px;
    color: #e96b76;
  }
}
</style>