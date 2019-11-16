<template>
<div class="pages">
    <AppHeader :data="title" :Iconshow="false"/>
    <div class="content">
        <div class="setting-desc">
            <div class="desc-title">赞与收藏消息提醒设置</div>
            <div class="desc-context">关闭消息提醒,APP内将不再收到新消息的次数提醒</div>
        </div>
        <div class="setting-title">
            赞
        </div>
        <div class="setting-info">
            <div class="line">
                <div class="line-text">
                    作品点赞
                </div>
                <div class="switch-btn">
                    <van-switch v-model="checked" active-color="#4ebc7f" inactive-color="#ffffff" size="21px" />
                </div>
            </div>
            <div class="line">
                <div class="line-text">
                    留言点赞
                </div>
                <div class="switch-btn">
                    <van-switch v-model="checked" active-color="#4ebc7f" inactive-color="#ffffff" size="21px" />
                </div>
            </div>
        </div>
        <div class="setting-title">
            收藏
        </div>
        <div class="setting-info">
            <div class="line">
                <div class="line-text">
                    菜谱收藏
                </div>
                <div class="switch-btn">
                    <van-switch v-model="checked" active-color="#4ebc7f" inactive-color="#ffffff" size="21px" />
                </div>
            </div>
            <div class="line">
                <div class="line-text">
                    课程收藏
                </div>
                <div class="switch-btn">
                    <van-switch v-model="checked" active-color="#4ebc7f" inactive-color="#ffffff" size="21px" />
                </div>
            </div>
        </div>
    </div> 
</div>  
</template>

<script>
import { Switch } from 'vant';
import AppHeader from './header'
export default {
    components:{
        AppHeader,
        [Switch.name]:Switch
    },
    data(){
        return{
            title:'消息提醒设置',
            checked:true,
        }
    }
}
</script>

<style lang="scss" scoped>
.pages{
    width: 100%;
    top:0;
    bottom: 0px;
    left: 0;
    background: #fbfbf9;
    position: absolute;
}
.content{
    width:100%;
    position: absolute;
    top: 44px;
    bottom: 0;
    left:0;
}
.setting-desc{
    width: 100%;
    height: 166px;
    background: white;
    box-sizing: border-box;
    padding-left: 54px;
    overflow: hidden;
    margin-top: 26px;
    .desc-title{
        height: 90px;
        line-height: 90px;
        color: black;
        font-size: 37px;
        margin-top: 15px;
        font-weight: 600;
    }
    .desc-context{
        height: 30px;
        line-height: 30px;
        color: black;
    }
}
.setting-title{
    width: 100%;
    height: 154px;
    box-sizing: border-box;
    padding-left: 56px;
    font-size: 43px;
    line-height: 154px;
    color: black;
    font-weight: 600;
}
.setting-info{
    width: 100%;
    height: 240px;
    background: white;
    .line{
        width: 100%;
        height: 120px;
        line-height: 120px;
        padding-left: 56px;
        padding-right: 53px;
        box-sizing: border-box;
        color: #333333;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .switch-btn{
            display: flex;
            align-items: center;
        }
    }
}
</style>

