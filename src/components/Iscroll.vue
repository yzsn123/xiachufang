<template>
<div class="app-scroll" ref="scroll">
  <div class="scoll-wrap" ref="scrollwrap">
      <slot/>
  </div>
</div>
</template>

<script>
import '../lib/iscroll-probe.js'
export default {
    name:'Appscroll',
    mounted(){
        this.$nextTick(()=>{
            this.scroll = new IScroll(this.$refs.scroll, {
                probeType: 3,
            })
            this.scroll.on('beforeScrollStart', ()=>{
                this.scroll.refresh();
            });
        })
    }
}
</script>

<style lang="scss" scoped>
.app-scroll{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>

