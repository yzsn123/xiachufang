<template>
<div id="app">
    <router-view class="pages"></router-view>
    <tab-bar></tab-bar>
    <keep-alive>
        <div class="mark" :style="{width:Width,height:Height}" :class="{changeMark:Markshow}" @click="Mark" ref="mark">
            <img  alt="" ref="MarkSrc" class="MarkImg" :class="{ChangeImg:MarkImg}">
        </div>
    </keep-alive>
    <van-popup v-model="show" position="bottom">
        <Dialog>
            
        </Dialog>
    </van-popup>
    
</div>
</template>

<script>
import Dialog from './pages/kitchen/attention/children/dialog'
import TabBar from './components/tab-bar'
import { Popup } from 'vant';
export default {
    components: {
        [TabBar.name]: TabBar,
        Dialog,
        [Popup.name]:Popup,
    },
    data(){
        return{
            Markshow:false,
            MarkImg:false,
            show:false,
        }
    },
    computed:{
        Width(){
            return document.body.clientWidth + 'px';
        },
        Height(){
            return document.body.clientHeight + 'px';
        }
    },
    methods:{
        ChangeMark(value,src){
            this.$refs.MarkSrc.setAttribute('src',src);
            this.Markshow = value;
            this.MarkImg = true;
        },
        Mark(){
            this.Markshow = false;
            this.show = false;
            this.$center.$emit('showAction');
        },
        ChangeShow(){
            this.show = false;
        },
        ChangeOpacityMark(){
            this.show = true;
        },

    },
    created(){
        this.$center.$on('ChangeMarkshow', this.ChangeMark);
        this.$center.$on('ChangeOpacityMark',this.ChangeOpacityMark);
        this.$center.$on('ChangeShow',this.ChangeShow);
    },
    mounted(){
        this.$refs.MarkSrc.ontouchstart =(ev)=>{
            let MarkHeight = ev.targetTouches[0].clientY;
            this.$refs.MarkSrc.ontouchmove = (ev)=>{
                let ChangeMarkHeight = ev.targetTouches[0].clientY;
                if(ChangeMarkHeight > MarkHeight){
                    // 更改背景颜色，图片大小
                    let BodyHeight = document.body.clientHeight;
                    let rate = (ChangeMarkHeight - MarkHeight) / BodyHeight;                    this.$refs.mark.style.opacity = (1- rate);
                    this.$refs.MarkSrc.style.transform = `scale(${1-rate})`;
                    // 
                }
            }
            document.ontouchend = ()=>{
                this.$refs.mark.style.opacity = '';
                this.$refs.MarkSrc.style.transform = '';
            }
        }
    },
    beforeDestroy(){
        this.$center.$off('ChangeMarkshow',this.ChangeMark);
        this.$center.$off('ChangeOpacityMark',this.ChangeOpacityMark);
        this.$center.$off('ChangeShow',this.ChangeShow);
    }
}
</script>

<style lang="scss">
.pages{
   position: absolute;
   left: 0;
   top: 0px;
   bottom: 49px;
   width: 100%;
}
.mark{
    opacity: 0;
    z-index: -1;
    position: fixed;
    background: black;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .MarkImg{
        width: 100%;
        position: absolute;
        left: 0;
    }
}
.changeMark{
    opacity: 1;
    z-index: 200;
}
.slide-enter-active{
  animation: slideIn 0.5s;
}
.slide-leave-active{
  animation: slideOut 0.5s;
}



</style>
