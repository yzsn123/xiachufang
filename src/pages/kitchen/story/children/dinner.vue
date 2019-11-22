<template>
<div class="swiper-container dinner" ref="swipers">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in dinnerList" :key="item" @click="LinkSearch(item)">
            {{item}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            dinnerList:['午餐','早餐','晚餐','瘦身','母婴','家务','好物','萌宠'],
        }
    },
    methods:{
        SwiperInit(){
            this.$mySwiper = new Swiper(this.$refs.swipers, {
                observer: true,
                observeParents: true,
                slidesPerView: "auto",
                freeMode: true
            });
        },
        LinkSearch(item){
            this.$router.push(`/kitchen/search/detail/${item}`);
        }
    },
    mounted(){
        this.SwiperInit();
    }
}
</script>

<style lang="scss" scoped>
.dinner{
    width: 100%;
    height: 151px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding-left: 53px;
    padding-right: 40px;
    position: relative;
    z-index: 400;
    background: white;
    .swiper-wrapper{
        width:100%;
        height: 100%;
        display: flex;
        align-items: center;
        .swiper-slide{
            width: 138px;
            height: 77px;
            margin-right: 13px;
            line-height: 71px;
            box-sizing: border-box;
            border: 3px solid #ebebe1;
            border-radius: 20px;
            text-align: center;
            font-size: 35px;
            color:#383830;
        }
    }
}
</style>

