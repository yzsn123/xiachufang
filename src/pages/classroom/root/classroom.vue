<template>
  <div id="classrom">
    <Header></Header>

    <app-scroll class="content">
      <Banner></Banner>

      <Kind></Kind>

      <div class="myclass">
        <h3>我的课程</h3>
        <router-link to="/class/allMyclass">查看全部</router-link>
      </div>

      <GoodLsit></GoodLsit>
      
    </app-scroll>
  </div>
</template>

<script>
import Banner from "./children/banner";
import Header from "./children/header";
import Kind from "./children/kind";
import GoodLsit from "./children/goodList";
export default {
  components: {
    Header,
    Banner,
    Kind,
    GoodLsit
  }
};
</script>

<style lang="scss" scoped>
#classrom {
  .content {
    width: 100%;
    position: absolute;
    left: 0;
    top: 45px;
    bottom: 50px;
  }
  .myclass{
    width: 100%;
    box-sizing: border-box;
    padding: 0 56px;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    h3{
      font-size: 64px;
      line-height: 64px;
      font-weight: 550;
    }
    a{
      font-size: 48px;
      color: #fb664e;
    }
  }
}
</style>