<template>
  <div id="mine">
    <Header></Header>

    <myScroll class="content" :name="myScroll">
      <div class="userImg box-size">
        <h3>{{username}}</h3>
        <img src="http://img2.imgtn.bdimg.com/it/u=1858160002,4087061516&fm=26&gp=0.jpg" alt />
      </div>
      <h4 class="box-size">2019-11-07加入</h4>
      <h4 class="box-size">{{signature}}</h4>
      <div class="edit">
        <div>
          <p>
            <em>0</em>
            <span>关注</span>
          </p>
          <p>
            <em>0</em>
            <span>粉丝</span>
          </p>
        </div>
        <button @click="editAction">编辑资料</button>
      </div>
      <div class="favorite">
        <p>
          <span class="iconfont icon-shizhong"></span>
          <em>浏览历史</em>
        </p>
        <p>
          <span class="iconfont icon-shujia"></span>
          <em>课程·书架</em>
        </p>
        <p  @click="orderAction">
          <span class="iconfont icon-dingdan"></span>
          <em>订单</em>
        </p>
        <p>
          <span class="iconfont icon-xiaozhu"></span>
          <em>钱包</em>
        </p>
      </div>

      <myContent></myContent>
    </myScroll>

    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
      <router-view :onUpdate="updateInfo"></router-view>
    </transition>
  </div>
</template>

<script>
import Header from "./children/Header";
import myContent from "./children/mycontent";
import "../../../style/market.scss";
export default {
  components: {
    Header,
    myContent
  },
  data() {
    return {
      username: null,
      active: 0,
      myScroll: "myScroll",
      signature: null,
      info: null
    };
  },
  methods: {
    editAction() {
      this.$router.push("/mine/edit");
    },
    //请求个人资料
    async reqInfo() {
      //请求
      let result = await this.$store.dispatch("mine/requestSearchInfo");
      let info = result.data.data[0];
      this.$store.commit("mine/setUserInfo", info);
     if(info){
       //改变信息
      if (info.signature != null) {
        this.signature = info.signature;
      } else {
        this.signature = "添加个人简介，让厨友了解你";
      }

      if(info.username != null){
        this.username = info.username;
      }else{
        this.username = '手机用户';
      }
     }else{
       this.signature = "添加个人简介，让厨友了解你";
       this.username = '手机用户';
     }
      
    },
    //更新
    updateInfo(val){
      if (val) {
        this.reqInfo();
      }
    },
    orderAction(){
      this.$router.push('/mine/order');
    }
  },
  created() {
    this.reqInfo();
  }
};
</script>

<style lang="scss" scoped>
#mine {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  .content {
    width: 100%;
    position: absolute;
    left: 0;
    top: 45px;
    bottom: 49px;
  }
  .box-size {
    box-sizing: border-box;
    padding: 0 48px;
  }
  .userImg {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    height: 214px;
    overflow: hidden;
    display: flex;
    margin: 64px 0 38px 0;
    h3 {
      font-size: 66px;
      font-weight: 550;
      color: #333;
    }
    img {
      display: block;
      border-radius: 50%;
      width: 214px;
      height: 214px;
    }
  }
  h4 {
    font-size: 32px;
    line-height: 64px;
    color: #383934;
  }
  .edit {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      flex-wrap: nowrap;
      margin: 42px 0 50px 48px;

      p {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-right: 78px;
        em {
          font-size: 28px;
          font-weight: 550;
          color: #333;
          margin-bottom: 20px;
        }
        span {
          font-size: 28px;
          color: #383836;
        }
      }
    }
    button {
      color: #f8664f;
      background: transparent;
      font-size: 34px;
      line-height: 90px;
      border-radius: 10px;
      width: 200px;
      height: 90px;
      border: 2px solid #f8664f;
      margin-right: 48px;
    }
  }
  .favorite {
    display: flex;
    width: 100%;
    height: 236px;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    p {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      span {
        color: #373737;
        font-size: 58px;
      }
      em {
        margin-top: 42px;
        font-size: 30px;
        color: #3c3d38;
      }
    }
  }
}
</style>