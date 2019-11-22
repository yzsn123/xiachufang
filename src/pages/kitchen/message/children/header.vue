<template>
    <div class="header">
        <div class="icon" @click="BackAction">
            <van-icon name="arrow-left" size="20px" />
        </div>
        <div class="title">
            {{title}}
        </div>
        <div class="setting" v-show="iconShow" @click="SettingAction">
            <van-icon name="setting-o" size="20px" />
        </div>
    </div>
</template>

<script>
export default {
    props:{
        data:String,
        IconShow:Boolean
    },
    data(){
        return{
            title:this.data,
            iconShow:this.IconShow
        }
    },
    methods:{
        BackAction(){
            this.$router.back();
        },
        SettingAction(){
            this.$router.push('/kitchen/message/collect/setting')
        }
    }
}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
    .icon{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .setting{
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .title{
        width: 100%;
        height: 44px;
        text-align: center;
        line-height: 44px;
        font-size: 20px;
    }
}
</style>

