<template>
  <div id="classrom">
    <Header></Header>
 
    
    <!-- <HorizontalScroll :kindList="kindList" ></HorizontalScroll> -->

    <app-scroll class="content">
      <Banner></Banner>

      <Kind></Kind>

      <div class="myclass">
        <h3>我的课程</h3>
        <router-link to="/class/allMyclass">查看全部</router-link>
      </div>

      <GoodLsit :allList="allList"></GoodLsit>

    </app-scroll>

    <router-view></router-view>

  </div>
</template>

<script>
import Banner from "./children/banner";
import Header from "./children/header";
import Kind from "./children/kind";
import GoodLsit from "./children/goodList";
import HorizontalScroll from '../../../components/Horizontal-scroll'
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
      kindList:[],
      allList: null,
      guessList: null,
    };
  },
  methods: {
    async getAll() {
      await this.$store.dispatch("Class/getAllList");
      this.allList = this.$store.state.Class.allList;
      for(var k in this.allList){
        this.kindList.push({
          'kind':this.allList[k].kind,
          'id':this.allList[k].id,
          'index':parseInt(k)
          });
      }
      
    },
    async getGuess(){
      await this.$store.dispatch('Class/getGuessList');
      this.guessList = this.$store.state.Class.guessList.data.goodList;
      let i = this.allList.length - 1;
      for(var j in this.guessList){
        this.allList[i].goodList.push(this.guessList[j]);
      }
      // console.log(this.allList);
    },
    async GetMoreGuessData(){
      console.log('执行了')
      this.getGuess();
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