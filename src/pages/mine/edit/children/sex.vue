<template>
  <div class="sex">
    <van-popup
      v-model="showSex"
      :style="{ height: '25%',width:'60%'}"
      round
      :close-on-click-overlay="false"
    >
      <div class="sexBox">
        <span @click="sexSel('男')">男</span>
        <span @click="sexSel('女')">女</span>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Popup } from "vant";
export default {
  props: {
    showSex: Boolean,
    onSex: Function
  },
  components: {
    [Popup.name]: Popup
  },
  data() {
    return {
      sex: null
    };
  },
  methods: {
    sexSel(sex) {
      this.sex = sex;
      this.onSex(this.sex);
    }
  }
};
</script>

<style lang="scss" >
.sex {
  .sexBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 52px;
    align-items: center;

    span {
      width: 35%;
      border-radius: 10px;
      font-size: 36px;
      color: white;
      text-align: center;
      margin: 52px;
      padding: 25px 0;
      background: #f16855;
    }
  }
}
</style>