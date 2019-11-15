<template>
  <div>
    <div class="type" >
      <h3 class="title">{{data.spec}}</h3>
      <div class="select" ref="option">
        <span
          :class="{active:selectIndex === index }"
          v-for="(item,index) in data.kind"
          :key="item.id"
          @click="selectAction(item,index)"
        >{{item.kindName}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectIndex: -1,

    };
  },
  methods: {
    selectAction(item,index) {
      this.selectIndex = index;
      this.$emit('select',this.data.spec,item);
    }
  },
  created() {
    
  }
};
</script>

<style lang="scss" scoped>
.type {
  padding-bottom: 20px;
  border-bottom: 1px #eee solid;
  width: 100%;
  .title {
    font-size: 34px;
    color: #353630;
    font-weight: normal;
    display: block;
    line-height: 90px;
  }
  .select {
    span {
      padding: 4px 10px;
      border: 1px #e7e9de solid;
      font-size: 30px;
      color: #3f3f3d;
      line-height: 65px;
      margin: 0 10px 6px 0;
      display: inline-block;
    }
    .active {
      border: 1px red solid;
      color: red;
    }
  }
}
</style>