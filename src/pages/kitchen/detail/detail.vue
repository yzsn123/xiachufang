<template>
<div class="detail pages">
    <LinkHeader/>
    <div class="content">
        <Iscroll>
            <div class="bannerimg">
                <img :src="detailList.picUrl" alt="">
            </div>
            <div class="title">{{detailList.title}}</div>
            <div class="desc-title border-bottom">
                <div class="collect">{{detailList.collectNum}}收藏</div>
                <span>·</span>
                <div class="browse">{{detailList.browseNum}}万次浏览</div> 
            </div>
            <div class="userinfo">
                <div class="user-desc">
                    <div class="user-img">
                        <img :src="detailList.headImg" alt="">
                    </div>
                    <div class="user-direction">
                        <div class="user-name">离开你</div>
                        <div class="user-time">{{detailTime}}</div>
                    </div>
                </div>
                <div class="command" @click="commandAction" :class="{commandActive:detailList.isAttention}">
                    {{detailIsAttention}}
                </div>
            </div>
            <div class="ingredient border-bottom">
                <div class="ingredient-title border-bottom">
                    用料
                </div>
                <ul class="list">
                    <li class="item border-bottom" v-for="(item,index) in detailList.ingredients" :key="index">
                        <div class="name">{{item.name}}</div>
                        <div class="dosage">{{item.dosage}}{{item.unit}}</div>
                    </li>
                </ul>
            </div>
            <ul class="course-desc">
                <li class="item border-bottom" v-for="item in detailList.course" :key="item.stepId">
                    <div class="item-title">步骤{{item.stepId}}</div>
                    <div class="item-desc">
                        <img :src="item.img" alt="">
                        <div class="item-content">
                            {{item.step}}
                        </div>
                    </div>
                </li>
            </ul>
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
        },
        detailTime(){
            let Time = this.$store.state.detail.detailList.publishTime;
            if(Time){
                let Month = Time.substring(5,7);
                let Day = Time.substring(8,10);
                return Month + '/' + Day;
            }
        },
        detailIsAttention(){
            let attention = this.$store.state.detail.detailList.isAttention;
            if(attention){
                return '已关注';
            } else{
                return '未关注';
            }
        }
    },
    methods:{
        commandAction(){
            // console.log(this.detailList);
            this.detailList.isAttention = !this.detailList.isAttention;
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
    top: 49px;
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
    padding-right: 53px;
    justify-content: space-between;
    .user-desc{
        width: 330px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .user-img{
            width: 158px;
            height: 158px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .user-direction{
            width: 172px;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: center;
            &>div{
                margin: 14px 0;
            }
        }
    }
    .command{
        width: 164px;
        height: 68px;
        box-sizing: border-box;
        border: 4px solid #fa654f;
        line-height: 60px;
        text-align: center;
        font-size: 34px;
        color:#ff846e;
        border-radius: 10px;
    }
    .commandActive{
        background: #383836;
        color: #eee;
        border: none;
    }
}
.ingredient{
    width: 100%;
    margin-top: 15px;
    &-title{
        width:950px;
        height: 170px;
        line-height: 170px;
        color: #383934;
        font-size: 48px;
        margin: 0 auto;
    }
    .list{
        width:950px;
        margin: 0 auto;
        .item{
            width: 100%;
            height: 130px;
            line-height: 130px;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            padding-right: 300px;
        }
    }
}
.course-desc{
    width: 100%;
    overflow: hidden;
    .item{
        width: 100%;
        overflow: hidden;
        .item-title{
            width: 100%;
            height: 112px;
            line-height: 112px;
            box-sizing: border-box;
            padding-left: 55px;
            color: #383934;
            font-size: 44px;
        }
        .item-desc{
            width: 950px;
            margin: 0 auto;
            img{
                width: 100%;
                height: 780px;
                display: block;
            }
            .item-content{
                width: 100%;
                margin-top: 64px;
                margin-bottom: 100px;
            }
        }
    }
}
</style>