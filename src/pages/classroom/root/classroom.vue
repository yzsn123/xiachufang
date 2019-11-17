<template>
  <div id="classrom">
    <Header></Header>

    <!-- <HorizontalScroll :kindList="kindList" ></HorizontalScroll> -->
    <div class="content">
      <myScroll :onload="loadHandle" :name="myScroll" :canLoad="canLoad">
        <Banner></Banner>

        <Kind></Kind>

        <div class="myclass">
          <h3>我的课程</h3>
          <router-link to="/class/allMyclass">查看全部</router-link>
        </div>

        <GoodLsit :allList="allList"></GoodLsit>
      </myScroll>
    </div>

      <router-view></router-view>
    
  </div>
</template>

<script>
import Banner from "./children/banner";
import Header from "./children/header";
import Kind from "./children/kind";
import GoodLsit from "./children/goodList";
import HorizontalScroll from "../../../components/Horizontal-scroll";
export default {
  components: {
    Header,
    Banner,
    Kind,
    GoodLsit,
    HorizontalScroll
  },
  data() {
    return {
      kindList: [],
      allList: [],
      guessList: null,
      myScroll: "myScroll",
      canLoad: null
    };
  },
  methods: {
    async getAll() {
      //取出所有的列表
      await this.$store.dispatch("Class/getAllList");
      this.allList = this.$store.state.Class.allList;
      for (var k in this.allList) {
        this.kindList.push({
          kind: this.allList[k].kind,
          id: this.allList[k].id,
          index: parseInt(k)
        });
      }
    },
    async getGuess() {
      //取出猜你喜欢的列表，并加入全部的列表 里
      await this.$store.dispatch("Class/getGuessList");
      this.guessList = this.$store.state.Class.guessList.data.goodList;
      let i = this.allList.length - 1;
      for (var j in this.guessList) {
        this.allList[i].goodList.push(this.guessList[j]);
      }
      this.$nextTick(() => {
        this.canLoad = true;
      });
      // console.log(this.allList);
    },
   
    loadHandle(val) {
      this.canLoad = false;
      this.getGuess();
    },

    
  },
  watch: {
    allList() {
      // console.log("监听到allList发生改变");
    }
  },
  created() {
    this.getAll();
    this.getGuess();
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
    bottom: 0;
  }
  .myclass {
    width: 100%;
    box-sizing: border-box;
    padding: 0 56px;
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    h3 {
      font-size: 64px;
      line-height: 64px;
      font-weight: 550;
    }
    a {
      font-size: 48px;
      color: #fb664e;
    }
  }
}
</style>