<template>
<div class="detail pages">
    <LinkHeader/>
    <div class="content">
        <Iscroll>
            <div class="bannerimg">
                <img :src="detailList.headImg" alt="">
            </div>
            <div class="title">{{detailList.title}}</div>
            <div class="desc-title border-bottom">
                <div class="collect">{{detailList.collectNum}}收藏</div>
                <span>·</span>
                <div class="browse">{{detailList.browseNum}}万次浏览</div> 
            </div>
            <div class="userinfo">
                <img src="" alt="">
            </div>
        </Iscroll>
    </div>
</div>
</template>

<script>
import Iscroll from '../../../components/Iscroll'
import LinkHeader from './header.vue'
export default {
    components:{
        LinkHeader,
        Iscroll
    },
    computed:{
        detailList(){
            return this.$store.state.detail.detailList;
        }
    },
    data(){
        return{
            headImg:'',
            course:[],
            collectNum:0,
            browseNum:0,
            ingredients:[],
            isAttention:0,
            publishTime:'',
            title:'',
            userId:''
        }
    },
    created(){
        this.$store.dispatch('detail/requestDetailData');
    }
}
</script>

<style lang="scss" scoped>
.pages{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: -49px;
    left: 0;
    background: white;
    z-index: 100;
}
.content{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
}
.bannerimg{
    width: 100%;
    height: 1349px;
    display: block;
    img{
        width:100%;
        height: 100%;
        display: block;
    }
}
.title{
    margin-top: 21px;
    width: 100%;
    height: 182px;
    line-height: 182px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.desc-title{
    width: 868px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #383836;
    margin: 0 auto;
    padding-bottom: 50px;
    span{
        margin-left: 10px;
        margin-right: 10px;
    }
}
.userinfo{
    width: 100%;
    height: 264px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 53px;
}
</style>