<template>
<div class="classify-content">
    <ul class="list">
        <li class="item" @click="Search(item.name)" v-for="(item,index) in Classify" :key="index">
            <img :src="item.picUrl" alt="">
            <!-- <img src="../../../../assets/classify/classify_03.jpg" alt=""> -->
        </li>
    </ul>
</div>
</template>

<script>
export default {
    props:{
        content:Array,
    },
    data(){
        return{
            Classify:this.content,
        }
    },
    methods:{
        Search(name){
            this.$router.push(`/kitchen/search/detail/${name}`)
        }
    }
}
</script>

<style lang="scss" scoped>
.classify-content{
    width: 100%;
    box-sizing: border-box;
    padding-left: 40px;
    .list{
        overflow: hidden;
    }
    .item{
        width: 197px;
        height: 197px;
        margin-right: 62px;
        margin-bottom: 38px;
        float: left;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>

