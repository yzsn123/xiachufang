<template>
<div class="interest">
    <div class="interest-title">
        你可能感兴趣的厨友
    </div>
    <div class="interest-imgwall">
        <div class="swiper-container swiper" ref="swiper">
            <div class="swiper-wrapper">
                <slide v-for="(item,index) in interestList" :key="index" :data="item"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import slide from './children/slide'
export default {
    components:{
        slide,
    },
    computed:{
        interestList(){
            return this.$store.state.interest.interestList;
        }
    },
    methods:{
        SwiperInit(){
            this.$mySwiper = new Swiper(this.$refs.swiper,{
                observer:true,
                observeParents:true,
                slidesPerView: 'auto',
                freeMode: true
            });
        },
        CloseActive(){
            this.SlideShow = false;
        },
        recommendAction(index){
            // 关注未关注的切换
            console.log(1);
            if(this.recommendActive[index]){
                this.recommendContext[index] = '关注';
                this.recommendActive[index] = false;
            } else{
                this.recommendContext[index] = '已关注';
                this.recommendActive[index] = true;
            }
            
            // 关注的上传
        },

    },
    created(){
        this.$store.dispatch("interest/requestInterestData");
    },
    mounted(){
        this.SwiperInit();
    }
}
</script>

<style lang="scss" scoped>
.interest{
    width: 100%;
    height: 672px;
    background: #f2f2f2;
    &-title{
        width: 100%;
        height: 92px;
        margin-top: 16px;
        line-height: 92px;
        color: #333333;
        font-size: 30px;
        box-sizing: border-box;
        padding-left: 54px;
    }
    &-imgwall{
        width: 100%;
        height: 526px;
        .swiper-container{
            width: 100%;
            height: 100%;
        }
        .swiper{
            box-sizing: border-box;
            padding-left: 19px;
        }
    }
}
</style>

