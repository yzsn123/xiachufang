<template>
<div class="attention">
    <div class="title">
        <div class="userinfo border-bottom">
            <img src="../../../assets/kitchen/luna2.jpeg" alt="">
            <div class="username">
                茶米chami
            </div>
            <div class="flag">
                <img src="../../../assets/kitchen/flag.jpg" alt="">
            </div>
        </div>
        <div class="userimg">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3750211471,3151515749&fm=26&gp=0.jpg" alt="" @click="imgAction" ref="userimgs">
        </div>
    </div>
    <thumbs :data="indexList"/>
    <interest/>
    <div class="main-content" v-for="(item,index) in attentionList" :key="index">
        <div class="title">
            <div class="userinfo border-bottom">
                <img src="../../../assets/kitchen/luna2.jpeg" alt="">
                <div class="username">
                    {{item.userName}}
                </div>
                <div class="flag">
                    <img src="../../../assets/kitchen/flag.jpg" alt="">
                </div>
            </div>
            <div class="userimg">
                <img :src="item.picUrl" alt="" @click="imgAction(index)" ref="userimg">
            </div>
        </div>
        <thumbs :data="item"/>
    </div>

</div>
</template>

<script>
import thumbs from './children/thumbs'
import interest from './children/interest'
export default {
    components:{
        thumbs,
        interest
    },
    data(){
        return{
            Markshow:true,
            indexList:{
                date:"2019-11-15 08:44:55",
                desc:"11.9入冬的压冬饭,当早饭",
                recount:919,
                thumbs:570,
            }
        }
    },
    watch:{
        attentionList:function(newVal,oldVal){
            this.$nextTick(()=>{
                this.$center.$emit('ChangeLoading');
                this.$center.$emit('ChangeLoadmore');
            })
        }
    },
    computed:{
        attentionList(){
            return this.$store.state.attention.attentionList;
        }
    },
    methods:{
        imgAction(index){
            if(!isNaN(index)){
                // console.log(this.$refs.userimg);
                var imgSrc = this.$refs.userimg[index].getAttribute('src');
                this.$refs.userimg[index].style.opacity = 0;
            } else{
                console.log(this.$refs.userimgs);
                var imgSrc = this.$refs.userimgs.getAttribute('src');
                this.$refs.userimgs.style.opacity = 0;
            }
            this.$center.$emit('ChangeMarkshow',true,imgSrc);
        },
        ShowImgAction(){
            console.log('执行了');
            if(this.$refs.userimg){
                this.$refs.userimg.forEach((item,index)=>{
                    item.style.opacity = '';
                })
            }
            this.$refs.userimgs.style.opacity = '';
        },
        async GetAttentionData(){
            await this.$store.dispatch("attention/requestAttentionData",0);
        },
        async GetMoreAttentionData(){
            await this.$store.dispatch("attention/requestAttentionData",1);
        }
    },
    created(){
        this.$center.$on('showAction',this.ShowImgAction);
    },
    mounted(){
        this.$nextTick(()=>{
            this.$center.$emit('ChangeLoading');
            this.$center.$emit('ChangeLoadmore');
        })
    }
}
</script>
<style lang="scss" scoped>
.main-content{
    width: 100%;
}
.title{
    width: 100%;
    .userinfo{
        width: 100%;
        height: 157px;
        box-sizing: border-box;
        padding-left: 53px;
        display: flex;
        align-items: center;
        img{
            width: 79px;
            height: 79px;
            display: block;
            border-radius: 50%;
        }
        .username{
            font-size: 35px;
            line-height: 157px;
            color:#383934;
            margin-left: 27px;
        }
        .flag{
            width: 36px;
            height: 34px;
            margin-left: 30px;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
    .userimg{
        width: 100%;
        height: 1350px;
        transition: 1s;
        img{
            width:100%;
            height: 100%;
            display: block;
        }
    }
}

</style>

