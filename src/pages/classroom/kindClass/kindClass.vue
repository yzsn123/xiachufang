<template>
  <div id="kindClass">
    <div class="header">
      <span class="iconfont icon-fanhui" @click="backAction"></span>
      <h3>课堂</h3>
    </div>

    <div class="kindcontent">
      <van-tabs v-model="active" :sticky="true" :offset-top="44">
        <van-tab title="全部">
          <div class="kindWrap">
            <myScroll :onload="loadHandle" :name="myScroll" :canLoad="canLoad">
              <ul>
                <li v-for="(item,index) in allList" :key="index" @click="detailAction(item)">
                  <div class="img">
                    <img :src="item.picUrl" alt v-lazy="item.picUrl" />
                    <span>{{item.method}}</span>
                  </div>
                  <h2>{{item.username}}</h2>
                  <h3>{{item.title}}</h3>
                  <p>
                    <span>{{item.num}}人参与</span>
                    <em>收藏</em>
                  </p>
                </li>
              </ul>
            </myScroll>
          </div>
        </van-tab>

        <van-tab v-for="(item,index) in kindList" :key="index" :title="item.type">
          <div class="kindWrap">
            <myScroll :onload="loadHandle" :name="myScroll" :canLoad="canLoad">
              <ul>
                <li v-for="(ite,ind) in item.list" :key="ind" @click="detailAction(ite)">
                  <div class="img">
                    <img :src="ite.picUrl" alt v-lazy="ite.picUrl" />
                    <span>{{ite.method}}</span>
                  </div>
                  <h2>{{ite.username}}</h2>
                  <h3>{{ite.title}}</h3>
                  <p>
                    <span>{{ite.num}}人参与</span>
                    <em>收藏</em>
                  </p>
                </li>
              </ul>
            </myScroll>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs } from "vant";

export default {
  props: {
    id: String
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  data() {
    return {
      kindList: [],
      kindListMore: [],
      allList: [],
      myScroll: "myScroll",
      canLoad: true,
      active: 5
    };
  },
  watch: {
    allList() {},
    kindList() {}
  },
  methods: {
    backAction() {
      this.$router.back();
    },
    async getKind() {
      await this.$store.dispatch("Class/getKindList");
      this.allList = this.$store.state.Class.kindList.data.data.all;
      this.kindList = this.$store.state.Class.kindList.data.data.kindList;
      // console.log(this.kindList, this.allList);
    },
    async getKindMore() {
      await this.$store.dispatch("Class/getKindListMore");
      this.kindListMore = this.$store.state.Class.kindListMore.data.list;
      // console.log(this.kindListMore);
    },
    clone(array) {
      let arr = [];
      for (var i in array) {
        arr.push(array[i]);
      }
      return arr;
    },
    async loadHandle(val) {
      //防抖
      this.canLoad = false;

      await this.getKindMore();
      //判断active的值来加载不同的
      if (this.active == 0) {
        //拷贝
        let arr = this.clone(this.allList);
        for (var i in this.kindListMore) {
          arr.push(this.kindListMore[i]);
        }
        //全部数据同时改变
        this.allList = arr;
        //加载完成可以继续加载
        this.$nextTick(() => {
          this.canLoad = true;
        });
      } else {
        let arr = this.clone(this.kindList[this.active - 1]);
        for (var i in this.kindListMore) {
          arr.list.push(this.kindListMore[i]);
        }
        this.kindList[this.active - 1] = arr;

        this.$nextTick(() => {
          this.canLoad = true;
        });
      }
    },
    detailAction(item){
      this.$router.push(`/classroom/detail/${item.id}`);
    }
  },
  created() {
    this.getKind();
  }
};
</script>

<style lang="scss" >
.pages {
  #kindClass {
    background: white;
    position: absolute;
    z-index: 9;
    left: 0;
    top: 0;
    bottom: -49px;
    width: 100%;
  }
  .kindcontent {
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
  }
}
#kindClass {
  .header {
    position: absolute;
    left: 0;
    top: 0;
    height: 44px;
    width: 100%;
    text-align: center;
    font-size: 16px;
    line-height: 44px;
    font-weight: 550;
    span {
      position: absolute;
      left: 14px;
      top: 0;
      height: 100%;
    }
  }
  //改tab字体及样式
  .van-tabs--line .van-tabs__wrap {
    height: 116px;
  }
  .van-ellipsis {
    font-size: 34px;
    line-height: 116px;
  }
  .van-tab__pane {
    font-size: 40px;
  }
  .van-tab--active {
    span {
      color: #f96b55;
    }
  }
  .van-tabs {
    // position: absolute;
    height: 100%;
    width: 100%;
  }
  .kindWrap {
    position: absolute;
    height: 100%;
    width: 100%;
  }

  ul {
    width: 100%;
    box-sizing: border-box;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 25px;
    li {
      width: 465px;
      margin-bottom: 60px;
      .img {
        width: 465px;
        height: 680px;
        overflow: hidden;
        border-radius: 10px;
        position: relative;
        img {
          display: block;
          width: 100%;
        }
        span{
          position: absolute;
          padding: 15px;
          left: 28px;
          bottom: 28px;
          border-radius: 5px;
          font-weight: bold;
          font-size: 32px;
          background: #f8e71d;
        }
      }
      h2 {
        font-size: 34px;
        color: #333333;
        line-height: 70px;
      }
      h3 {
        font-size: 42px;
        font-weight: 550;
        color: #333;
        line-height: 64px;
      }
      p {
        font-size: 34px;
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        span {
          color: #999;
        }
        em {
          color: #fb6650;
        }
      }
    }
  }
}
</style>