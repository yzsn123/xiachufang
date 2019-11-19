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
        <input type="text" v-model="code" />
        <button @click="codeAction" ref="code" :class="{red:codeFlag}">{{codeText}}</button>
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
      tel: null,
      code: null,
      codeText: "获取验证码",
      codeFlag: true,
      CODE: null
    };
  },
  methods: {
    backAction() {
      this.$router.back();
    },
    //手机号码验证
    checkPhone(tel) {
      if (!/^1[3456789]\d{9}$/.test(tel)) {
        this.$toast("请输入正确的手机号码");
        return false;
      }
    },
    //登录
    async loginAction() {
      //如果手机号码不为空
      if (this.tel) {
        //判断是否是正确的手机号码
        this.checkPhone(this.tel);
        //如果输入了验证码并且验证码正确
        if (this.code && this.code == this.CODE) {
          //登录(注册)
          let result = await this.$store.dispatch('mine/requestLogin',this.tel);
          if(result.code == 0){
            // console.log(this.$store.state.path);
            
            await localStorage.setItem('user',true);
            // this.$router.push('/mine');
            this.$router.push(`${this.$store.state.path}`)
          }
          // console.log(result);
        } else {
          this.$toast("请输入正确的验证码");
        }
      } else {
        this.$toast("请输入手机号");
        return false;
      }
    },
    //发送验证码
    async codeAction() {
      //如果发送验证码可以点击
      if (this.codeFlag) {
        //如果输入了电话号码
        if (this.tel) {
          this.codeFlag = false;
          //改变按钮样式
          // this.$refs.code.style.backgroundColor = "#aaa";
          let i = 10;
          this.codeText = i-- + "s";
          let time = setInterval(
            function() {
              this.codeText = i-- + "s";
              if (i < 0) {
                clearInterval(time);
                this.codeText = "重新获取验证码";
                // this.$refs.code.style.backgroundColor = "#f8664f";
                this.codeFlag = true;
              }
            }.bind(this),
            1000
          );
          //获取code验证码
          this.CODE = await this.$store.dispatch("mine/sendCode", this.tel);
          console.log(this.CODE);
        } else {
          this.$toast("请输入手机号");
        }
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
        height: 90%;
        flex: 1;
      }
      button {
        padding: 20px 20px;
        background: #aaa;
        border-radius: 5px;
        width: 300px;
        height: 100px;
        text-align: center;
        color: white;
      }
      .red{
        background: #f8664f;
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
    background: #f8664f;
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