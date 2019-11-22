<template>
    <div class="message pages">
        <AppHeader :data="title" :IconShow="false"/>
        <div class="content">
            <div class="message-line">
                <div class="line" @click="FollowAction">
                    <img src="../../../assets/kitchen/line1.jpg" alt="">
                    <div class="line-content">被跟做</div>
                </div>
                <div class="line" @click="CollectAction">
                    <img src="../../../assets/kitchen/line2.jpg" alt="">
                    <div class="line-content">赞与收藏</div>
                </div>
                <div class="line" @click="RecommendAction">
                    <img src="../../../assets/kitchen/line3.jpg" alt="">
                    <div class="line-content">评论和@</div>
                </div>
                <div class="line" @click="FansAction">
                    <img src="../../../assets/kitchen/line4.jpg" alt="">
                    <div class="line-content">新增粉丝</div>
                </div>
            </div>
            <div class="inform" @click="InformAction">
                <img src="../../../assets/kitchen/inform.jpg" alt="">
                <div class="inform-content">
                    <div class="inform-title">通知</div>
                    <div class="inform-text">没有新的通知</div>
                </div>
            </div>
        </div>
        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import AppHeader from './children/header'
export default {
    components:{
        AppHeader
    },
    data(){
        return{
            title:'消息'
        }
    },
    methods:{
        FollowAction(){
            this.$router.push('/kitchen/message/follow');
        },
        CollectAction(){
            this.$router.push('/kitchen/message/collect');
        },
        RecommendAction(){
            this.$router.push('/kitchen/message/recommend');
        },
        FansAction(){
            this.$router.push('/kitchen/message/fans');
        },
        InformAction(){
            this.$router.push('/kitchen/message/inform');
        }
    }
}
</script>

<style lang="scss" scoped>
.pages{
    width: 100%;
    top:0;
    bottom: -49px;
    left: 0;
    background: #fafaf8;
}
.content{
    width: 100%;
    position: absolute;
    top: 44px;
    bottom: 0;
}
.message{
    z-index: 200;
    .message-line{
        width: 100%;
        height: 308px;
        padding: 0 53px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-bottom: 3px solid #f2f2f2;
        background: white;
        .line{
            width: 162px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            img{
                width:126px;
                height: 126px;
                display: block;
            }
            .line-content{
                width: 100%;
                height: 128px;
                line-height: 128px;
                text-align: center;
            }
        }
    }
    .inform{
        width: 100%;
        height: 245px;
        background: white;
        box-sizing: border-box;
        padding:48px 53px 0;
        display: flex;
        align-items: center;
        img{
            width: 126px;
            height: 126px;
        }
        .inform-content{
            flex:1;
            margin-left: 44px;
            height: 196px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .inform-title{
                height: 56px;
                line-height: 56px;
                font-size: 38px;
                color:#383934;
            }
            .inform-text{
                height: 52px;
                line-height: 52px;
                font-size: 34px;
                color:#888888;
            }
        }
    }
}
</style>

