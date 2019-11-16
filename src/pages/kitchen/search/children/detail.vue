<template>
<div class="pages">
    <header class="header">
        <span class="add-Icon"><van-icon name="plus" size="27px" /></span>
        <input type="text" class="input" placeholder="搜索菜谱、食材" ref="input">
        <p class="input-icon"></p>
        <span class="ring-Icon"><van-icon name="filter-o" size="27px"  /></span>
    </header>
    
</div>
</template>

<script>
export default {
    props:{
        name:String,
    },
    data(){
        return{
            InputValue:this.name
        }
    },
    mounted(){
        this.$refs.input.value = this.InputValue;
    }
}
</script>

<style lang="scss" scoped>
.pages{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: white;
}
.header {
  width: 100%;
  height: 49px;
  position: absolute;
  left: 0;
  top: 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  span {
    width: 53px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input {
    flex: 1;
    height: 35px;
    border: none;
    background: #f2f2f0;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 27px;
    background-image: url(../../../../assets/home/search.png);
    background-repeat: no-repeat;
    background-position: 9px 11px;
    background-size: 12px 12px;
  }
  .input-icon {
    background: url(../../../../assets/home/mircel.png) no-repeat;
    height: 35px;
    width: 26px;
    position: absolute;
    right: 53px;
    top: 7px;
    background-position: 0px 8px;
    background-size: 13px 17px;
  }
}
</style>

