<template>
  <div id="edit">
    <Header>
      <h3>编辑个人资料</h3>
      <em @click="saveInfo">保存</em>
    </Header>

    <label class="upLoadImg">
      <img src="http://img2.imgtn.bdimg.com/it/u=1858160002,4087061516&fm=26&gp=0.jpg" alt />
      <span>上传头像</span>
      <input type="file" />
    </label>

    <ul class="message">
      <li>
        <span>用户名</span>
        <input type="text" placeholder="手机用户" v-model="tel" />
      </li>
      <li @click="sexClick">
        <span>性别</span>
        <input type="text" placeholder="性别" v-model="sex" />
      </li>
      <li @click="dateAction">
        <span>生日</span>
        <input type="text" placeholder="生日" disabled v-model="date" />
      </li>
      <li>
        <span>职业</span>
        <input type="text" placeholder="职业" v-model="job" />
      </li>
      <li @click="areaClick('hometown')">
        <span>家乡</span>
        <input type="text" placeholder="家乡" v-model="area" disabled />
      </li>
      <li @click="areaClick('oftenLive')">
        <span>常居地</span>
        <input type="text" placeholder="常居地" v-model="oftenLive" />
      </li>
      <li>
        <span>个人简介</span>
        <input type="text" placeholder="添加个人简介，让厨友更了解你" v-model="signature" />
      </li>
    </ul>

    <!-- 性别组件 -->
    <sexCom :showSex="showSex" :onSex="SexAction"></sexCom>

    <!-- 时间组件 -->
    <dateCom :showData="showData" :onDate="DateAction"></dateCom>

    <!-- 地址组件 -->
    <areaCom :showArea="showArea" :onArea="AreaAction"></areaCom>
  </div>
</template>

<script>
import dateCom from "./children/date";
import Header from "../component/Head";
import areaCom from "./children/area.vue";
import sexCom from "./children/sex";
export default {
  props: {
    onUpdate: Function
  },
  components: {
    Header,
    dateCom,
    areaCom,
    sexCom
  },
  data() {
    return {
      showData: false,
      showArea: false,
      showSex: false,
      //家乡或者长居地
      areaFlag: null,
      //每个input对应的值
      area: null,
      date: null,
      tel: null,
      sex: null,
      job: null,
      oftenLive: null,
      signature: null
    };
  },
  methods: {
    //显示日期
    dateAction() {
      this.showData = true;
    },
    //显示地址栏选择
    areaClick(type) {
      this.showArea = true;
      this.areaFlag = type;
    },
    //显示性别
    sexClick() {
      this.showSex = true;
    },

    //响应日期选中状态
    DateAction(val) {
      if (val) {
        this.date = val;
      }
      this.showData = false;
    },
    //响应地址选中状态
    AreaAction(val) {
      if (val) {
        //清空之前的城市选项
        let area = "";
        //组合选中的地址数据
        for (var k in val) {
          if (val[k]) {
            area += `${val[k].name} `;
          }
        }
        //如果选中的是家乡
        if (this.areaFlag == "hometown") {
          this.area = area;
        }
        //如果选中的是常居地
        else if (this.areaFlag == "oftenLive") {
          this.oftenLive = area;
        }
      }
      this.showArea = false;
    },
    //响应性别选中状态
    SexAction(val) {
      this.sex = val;
      this.showSex = false;
    },
    //点击保存按钮
    async saveInfo() {
      let userInfo = {
        username: this.tel,
        sex: this.sex,
        birth: this.date,
        hometown: this.area,
        oftenLive: this.oftenLive,
        signature: this.signature,
        job: this.job
      };
      let result = await this.$store.dispatch("mine/requestAddInfo", userInfo);

      if (result.data.code == 0) {
        this.$toast("保存成功");
      }

      this.onUpdate(true);
      this.$router.back();
    },
    async reqInfo() {
      let result = await this.$store.dispatch("mine/requestSearchInfo");
      let info = result.data.data[0];
      if (info) {
        this.birdth = info.birdth;
        this.area = info.hometown;
        this.job = info.job;
        this.oftenLive = info.oftenLive;
        this.sex = info.sex;
        this.signature = info.signature;
        this.tel = info.username;
      }
    }
  },
  created() {
    this.reqInfo();
  }
};
</script>

<style lang="scss" scoped >
.pages {
  #edit {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: white;
    width: 100%;
    z-index: 9;
    em {
      color: #f16855;
      font-size: 14px;
      position: absolute;
      right: 20px;
    }
  }
}
#edit {
  .upLoadImg {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 96px;
    height: 326px;
    img {
      width: 192px;
      height: 192px;
      border-radius: 50%;
    }
    span {
      color: #666;
      font-size: 34px;
      margin-top: 40px;
    }
    input {
      opacity: 0;
      height: 0;
    }
  }
  ul {
    padding: 0 50px;
    li {
      width: 100%;
      display: flex;
      justify-content: center;
      color: #a9a9a9;
      height: 125px;
      line-height: 125px;
      font-size: 42px;
      border-bottom: 1px solid #f2f2f2;
      span {
        width: 240px;
        display: inline-block;
      }
      input {
        flex: 1;
        color: #333;
        background: transparent;
      }

      ::-webkit-input-placeholder {
        color: #a9a9a9;
      }
    }
  }
}
</style>