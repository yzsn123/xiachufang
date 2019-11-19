<template>
<div class="MenuList" title="more">
    <ul class="list">
        <li class="item" v-for="(item,index) in MoreDetailList" :key="index">
            <img :src="item.picUrl" alt="">
            <div class="menu-content">
                <div class="desc-title ellipse">
                    {{item.title}}
                </div>
                <div class="desc-info">
                    <div class="score">{{item.grad}}分</div>
                    <div class="number">{{item.done}}人做过</div>
                </div>
                <div class="user-info">
                    <img src="http://img1.imgtn.bdimg.com/it/u=3733171064,467894117&fm=26&gp=0.jpg" alt="">
                    <div class="user-name">{{item.username}}</div>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    computed:{
        MoreDetailList(){
            return this.$store.state.search.MoreDetailList;
        },
    },
}
</script>

<style lang="scss" scoped>
.MenuList{
    width: 100%;
    .list{
        width: 100%;
        box-sizing: border-box;
        padding: 30px 53px 0;
        .item{
            width: 100%;
            height: 315px;
            margin-bottom: 50px;
            display: flex;
            img{
                width: 315px;
                height: 315px;
                display: block;
                border-radius: 10px;
            }
            .menu-content{
                width: 600px;
                height: 315px;
                margin-left: 40px;
                .desc-title{
                    width: 650px;
                    height:  96px;
                    line-height: 96px;
                    margin-top: 38px;
                    color: #353535;
                }
                .desc-info{
                    width: 100%;
                    height: 60px;
                    display: flex;
                    .score{
                        height: 60px;
                        text-align: center;
                        color: #343434;
                        font-size: 30px;
                        line-height: 60px;
                    }
                    .number{
                        height: 60px;
                        line-height: 60px;
                        text-align: center;
                        color: #343434;
                        margin-left: 30px;
                    }
                }
                .user-info{
                    width: 100%;
                    height: 44px;
                    margin-top: 30px;
                    display: flex;
                    align-items: center;
                    img{
                        width: 44px;
                        height: 44px;
                        border-radius: 50%;
                    }
                    .user-name{
                        height: 44px;
                        margin-left: 15px;
                        color:#9a9a9a;
                        font-size: 27px;
                    }
                }
            }
        }
    }
}
</style>


