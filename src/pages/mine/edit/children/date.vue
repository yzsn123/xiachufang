<template>
  <div class="date">
    <van-popup
      v-model="showData"
      round
      :style="{ height: '50%',width:'85%'}"
      :close-on-click-overlay="false"
    >
      <van-datetime-picker
        class="date"
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        @confirm="dataConfirm"
        @cancel="dateCancel"
      />
    </van-popup>
  </div>
</template>

<script>
import { DatetimePicker, Popup } from "vant";
export default {
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup
  },
  props: {
    showData: Boolean,
    onDate: Function
  },
  data() {
    return {
      currentDate: new Date(),
      minDate: new Date(1919, 1, 1)
    };
  },
  methods: {
    dataConfirm(val) {
      let date = new Date(val);
      let y = date.getFullYear();
      let m = date.getMonth() + 1;
      let d = date.getDate();
      this.onDate(`${y} / ${m} / ${d}`);
    },
    dateCancel() {
      this.onDate(false);
    }
  }
};
</script>

<style lang="scss" >
.date {
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
}
</style>