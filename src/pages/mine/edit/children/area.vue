<template>
  <div class="area">
    <van-popup
      v-model="showArea"
      position="bottom"
      :style="{ height: '50%' }"
      round
      :close-on-click-overlay="false"
    >
      <van-area :area-list="areaList" :columns-placeholder="['请选择', '请选择', '请选择']" title="家乡" @confirm="areaAction" @cancel="cancelAction"/>
    </van-popup>
  </div>
</template>

<script>
import { Area, Popup } from "vant";
import area from "./area";
export default {
  props: {
    showArea: Boolean,
    onArea:Function
  },
  components: {
    [Area.name]: Area,
    [Popup.name]: Popup
  },
  data() {
    return {
      areaList: area
    };
  },
  methods:{
      areaAction(val){
          this.onArea(val);
      },
      cancelAction(){
          this.onArea(false);
      }
  }
};
</script>

<style lang="scss">
.area {
  .van-picker__toolbar {
    height: 110px;
    button {
      font-size: 40px;
      color: #f16855;
      padding: 0 25px;
    }
  }
  .van-picker-column__item {
    font-size: 36px;
  }
  .van-picker__title{
      font-size: 40px;
      line-height: 110px;
  }
}
</style>