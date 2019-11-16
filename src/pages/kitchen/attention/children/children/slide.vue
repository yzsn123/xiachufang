<template>
    <div class="swiper-slide" v-show="SlideShow">
        <div class="close" @click="CloseActive">
            <van-icon name="cross" size="16px"/>
        </div>
        <div class="imgwall-img">
            <img :src="item.userImg" alt="">
        </div>
        <div class="imgwall-title">
            {{item.userName}}
        </div>
        <div class="imgwall-desc ellipse">
            {{item.desc}}
        </div>
        <button @click="recommendAction" class="imgwall-recommend" :class="{active:recommendActive}" >{{recommendContext}}</button>
    </div>
</template>

<script>
export default {
    props:{
        data:Object
    },
    data(){
        return{
            item:this.data,
            recommendActive:false,
            recommendContext:'关注',
            recommendIndex:1,
            SlideShow:true,
        }
    },
    methods:{
        recommendAction(){
            if(this.recommendIndex % 2 == 1){
                this.recommendContext = '已关注';
            } else{
                this.recommendContext = '关注';
            }
            this.recommendIndex = this.recommendIndex + 1;
            this.recommendActive = !this.recommendActive;
        },
        CloseActive(){
            this.SlideShow = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
    width: 405px;
    height: 526px;
    margin: 0 13px;
    background: white;
    position: relative;
    .close{
        position: absolute;
        right: 32px;
        top: 32px;
    }
    .imgwall-img{
        width: 220px;
        height: 220px;
        margin: 40px auto 0;
        border-radius: 50%;
        overflow: hidden;
        img{
            width:100%;
            height: 100%;
        }
    }
    .imgwall-title{
        width: 100%;
        height: 80px;
        line-height: 80px;
        font-size: 35px;
        color: #333333;
        text-align: center;
    }
    .imgwall-desc{
        width: 100%;
        height: 27px;
        line-height: 27px;
        font-size: 27px;
        text-align: center;
        color:#999999;
    }
    .imgwall-recommend{
        width: 354px;
        height: 74px;
        line-height: 74px;
        text-align: center;
        color: #fffefd;
        font-size: 30px;
        background: #f8664f;
        margin: 34px auto 0;
        display: block;
        border-radius: 10px;
        padding: 0;
        border: none;
        outline: none;
    }
    .imgwall-recommend.active{
        background: #c0c0c0;
        color: #383836;
    }
}
</style>

