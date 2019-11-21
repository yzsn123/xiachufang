<template>
  <div id="myScroll" :ref="name">
    <div class="scrollWrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import "../lib/iscroll-probe";
export default {
  name: "myScroll",
  props: {
    refresh: Function,
    onload: Function,
    name: {
      type: String,
      required: true
    },
    canLoad: Boolean
  },
  mounted() {
    let myScroll = new IScroll(this.$refs[this.name], {
      bounce: true,
      tap: true,
      mouseWheel: true,
      probeType: 3
    });
    myScroll.on("beforeScrollStart", function() {
      myScroll.refresh();
    });

    myScroll.on("scroll", () => {
      if (Math.abs(myScroll.maxScrollY - myScroll.y) < 500) {
        if (this.canLoad && this.onload) {
          this.onload(true);
        }
      }
    });
  }
};
</script>

<style lang="scss" scoped>
#myScroll {
  width: 100%;
  // height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
</style>