<template>
  <div id="set">
    <Header>
      <h3>设置</h3>
    </Header>
    <div class="content">
      <myScroll :name="myScroll">
        <ul class="edit" @click="editAction">
          <img src="http://img2.imgtn.bdimg.com/it/u=1858160002,4087061516&fm=26&gp=0.jpg" alt />
          <div class="message">
            <span>手机用户</span>
            <em>手机号登录：{{tel}}</em>
          </div>
          <span class="editbtn">编辑</span>
        </ul>
        <ul>
          <li>
            <router-link to>账号管理</router-link>
          </li>
          <li>
            <router-link to>密码</router-link>
          </li>
          <li>
            <router-link to>收获地址</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to>播放地址</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to>统计</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to>好友</router-link>
          </li>
          <li>
            <router-link to>通知</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to>用户协议</router-link>
          </li>
          <li>
            <router-link to>隐私政策</router-link>
          </li>
          <li>
            <router-link to>联系我们</router-link>
          </li>
          <li>
            <router-link to>意见反馈</router-link>
          </li>
          <li>
            <router-link to>帮助中心</router-link>
          </li>
        </ul>
        <ul>
          <li>
            <router-link to>把下厨房告诉朋友</router-link>
          </li>
          <li>
            <router-link to>帮助下厨房评分</router-link>
          </li>
          <li>
            <router-link to>清除缓存</router-link>
          </li>
          <li>
            <router-link to>检查更新</router-link>
          </li>
        </ul>
        <div class="logout" @click="logoutAction">退出当前账号</div>
        <h5>版本号 7.1.5</h5>
      </myScroll>
    </div>
  </div>
</template>

<script>
import Header from '../component/Head'
export default {
  components:{
    Header
  },
  data() {
    return {
      tel: null,
      myScroll:'myScroll'
    };
  },
  methods: {
   
    editAction() {},
    async logoutAction(){
       let result = await this.$store.dispatch('mine/requestLogout');
       if(result == 0){
           this.$store.commit('setIsLogin',false);
           localStorage.setItem('user',false);
           this.$router.push('/mine/login');
       }
    }
  },
  created(){
      this.tel = this.$store.state.tel;
  }
};
</script>

<style lang="scss" scoped>
.pages {
  #set {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 9;
  }
  .content {
    width: 100%;
    position: absolute;
    left: 0;
    top: 44px;
    bottom: 0;
  }
}
#set {
  background: #fafaf8;
  
  ul {
    margin-top: 30px;
    li{
        height: 131px;
        line-height: 131px;
        width:100%;
        box-sizing: border-box;
        padding: 0 50px;
        font-size: 36px;
        color: #333;
        background: white;
    }
  }
  .edit {
    width: 100%;
    height: 184px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    img {
      width: 102px;
      height: 102px;
      border-radius: 50%;
      margin: 0 40px 0 50px;
    }
    .message {
      flex: 1;
      display: flex;
      flex-direction: column;
      span {
        font-size: 40px;
        color: #333;
        line-height: 66px;
      }
      em {
        font-size: 34px;
        color: #999;
      }
    }
    .editbtn {
      font-size: 12px;
      margin-right: 40px;
    }
  }
  .logout{
        width: 100%;
        text-align: center;
        color: #f8664f;
        font-size: 36px;
        margin:50px 0 30px 0;
        background: white;
        height: 106px;
        line-height: 106px;
    }
    h5{
        text-align: center;
        font-size: 34px;
        line-height: 80px;
        color: #aaa;
        height: 100px;
    }
}
</style>