<template>
  <div id="login">
    <div class="header">
      <span @click="backAction">取消</span>
      手机登录注册
    </div>

    <div class="phone">
      <label class="phone">
        手机号
        <input type="text" v-model="tel" />
      </label>
      <label class="psd">
        验证码
        <input type="text" />
        <button @click="codeAction">获取验证码</button>
      </label>
    </div>

    <p>
      登录注册即代表你同意下厨房
      <em>《用户协议》</em>和
      <em>《隐私政策》</em>
    </p>

    <button class="logbtn" @click="loginAction">点击登录</button>

    <p class="no">手机号不再使用？</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: null
    };
  },
  methods: {
    backAction() {
      this.$router.back();
    },
    loginAction() {},
    async codeAction() {
    //   console.log("发送验证码");
      if(this.tel){
        //   console.log(this.tel)
          let result = await this.$store.dispatch('mine/sendCode',this.tel);
          console.log(result);
      }else{
          console.log('请输入手机号');
      }
      
    }
  }
};
</script>

<style lang="scss" scoped>
.pages {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background: white;
}
#login {
  width: 100%;
  .header {
    width: 100%;
    height: 49px;
    line-height: 49px;
    font-size: 16px;
    font-weight: bold;
    color: #666;
    text-align: center;
    margin-bottom: 20px;
    span {
      position: absolute;
      left: 10px;
      padding: 0 10px;
      color: #f8664f;
      font-size: 12px;
      font-weight: normal;
    }
  }
  .phone {
    width: 100%;
    label {
      width: 100%;
      box-sizing: border-box;
      display: inline-block;
      padding: 0 46px;
      height: 130px;
      display: flex;
      align-items: center;
      border-top: 1px solid #eee;
      margin: 5px 0;
      font-size: 36px;
      color: #333;
      &:nth-of-type(2) {
        border-bottom: 1px solid #eee;
      }

      input {
        margin-left: 50px;
        height: 100px;
        flex: 1;
      }
      button {
        padding: 20px 20px;
        background: #f8664f;
        border-radius: 5px;
        color: white;
      }
    }
  }
  p {
    margin-top: 82px;
    font-size: 30px;
    text-align: center;
    em {
      color: #f8664f;
    }
  }
  .logbtn {
    width: 975px;
    margin: 60px 50px;
    height: 108px;
    line-height: 108px;
    text-align: center;
    font-size: 48px;
    color: white;
    background: #c6c6bc;
    letter-spacing: 5px;
  }
  .no {
    text-align: right;
    margin-top: 0;
    margin-right: 50px;
    color: #f8664f;
  }
}
</style>