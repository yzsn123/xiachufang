<template>
<div class="header">
    <div class="icon" @click="BackAction">
        <van-icon name="arrow-left" size="20px" />
    </div>
    <div class="icon">
        <van-icon name="chat-o" size="20px"/>
    </div>
    <div class="icon">
        <van-icon name="vip-card-o" size="20px"/>
    </div>
    <div class="icon" @click="operate">
        <van-icon name="ellipsis" size="20px"/>
    </div>
</div>
</template>

<script>
export default {
    methods:{
        BackAction(){
            this.$router.back();
        },
        operate(){
            this.$center.$emit('ChangeOpacityMark');
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 49px;
    position: absolute;
    left:0;
    top: 0;
    z-index: 200;
    display: flex;
    background: white;
    .icon{
        height: 100%;
        width: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 20px;
        // color: white;
    }
}
</style>

