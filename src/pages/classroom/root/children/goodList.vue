<template>
  <div class="goodList">
    <div class="list" v-for="(item,index) in allList" :key="index">
      <div class="listTitle">
        <h3>{{item.kind}}</h3>
        <span v-if="item.id == 'tejia'">
          <em>{{time}}</em>后结束
        </span>
      </div>
      <ul class="good">
        <li v-for="(ite,ind) in item.goodList" :key="ind">
          <div class="img">
            <img :src="ite.picUrl" alt />
          </div>
          <p>{{ite.userName}}</p>
          <h4>{{ite.title}}</h4>
          <!-- div. -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allList: null,
      guessList: null,
      time: null
    };
  },
  methods: {
    async getAll() {
      await this.$store.dispatch("Class/getAllList");
      this.allList = this.$store.state.Class.allList;
      // console.log(this.allList);
    },
    getTime() {
      console.log(this.$refs);
      setInterval(function() {
        var date = new Date();
        var h = 24 - date.getHours();
        var m = 60 - date.getMinutes();
        var s = 60 - date.getSeconds();
        if (h < 10) h = "0" + h;
        if (m < 10) m = "0" + m;
        if (s < 10) s = "0" + s;

        this.time = `${h}:${m}:${s} `;
      }.bind(this), 1000);
    }
  },
  watch: {},
  computed: {},
  created() {
    this.getAll();
    this.getTime();
  }
};
</script>

<style lang="scss" scoped>
.goodList {
  width: 100%;
  box-sizing: border-box;
  padding: 0 56px;
  .listTitle {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 64px;
    line-height: 64px;
    margin-top: 90px;
    h3 {
      font-size: 64px;
      font-weight: 550;
    }
    span {
      font-size: 40px;
      color: #fb664e;
      em {
        font-weight: 550;
      }
    }
  }
  .good {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 465px;
      margin-top: 64px;
      .img {
        width: 100%;
        height: 680px;
        overflow: hidden;
        border-radius: 5px;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      p {
        margin: 26px 0 8px 0;
        font-size: 36px;
        color: #333;
      }
      h4 {
        font-size: 44px;
        line-height: 58px;
        font-weight: 550;
        color: #333;
      }
    }
  }
}
</style>