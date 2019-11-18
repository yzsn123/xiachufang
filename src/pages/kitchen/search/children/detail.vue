<template>
<div class="pages">
    <header class="header">
        <span class="add-Icon" @click="BackAction"><van-icon name="arrow-left" size="27px"/></span>
        <input type="text" class="input" placeholder="搜索菜谱、食材" ref="input">
        <p class="input-icon"></p>
        <span class="ring-Icon"><van-icon name="filter-o" size="27px"  /></span>
    </header>
    <div class="content">
        <div class="tabs-title">
            <div class="tab-title" @click="ChangeIndex(index)" v-for="(item,index) in TitleList" :class="{active:selectIndex===index}" :key="index">{{item}}</div>
        </div> 
        <div class="tabs-content">
            <Appscroll>
                <components :is="pageName"></components>
            </Appscroll>
        </div>

        
    </div>
</div>
</template>

<script>
import intelligent from './children/intelligent'
import highest from './children/highest'
import more from './children/more'
import videoMenu from './children/videoMenu'
import { Tab, Tabs } from 'vant';
export default {
    props:{
        name:String,
    },
    components:{
        [Tab.name]:Tab,
        [Tabs.name]:Tabs,
        intelligent,
        highest,
        more,
        videoMenu,
    },
    computed:{
        pageName(){
            switch (this.selectIndex) {
                case 0:
                return 'intelligent'; break
                case 1:
                return 'highest';break
                case 2:
                return 'more';break
                case 3:
                return 'videoMenu';break
            }
        }
    },
    data(){
        return{
            InputValue:this.name,
            active: 0,
            TitleList:['智能排序','评分最高','做过更多','视频菜谱'],
            selectIndex:0,
        }
    },
    methods:{
        ChangeIndex(index){
            this.selectIndex = index;
        },
        BackAction(){
            this.$router.back();
        }
    },
    created(){
        console.log(1);
        this.$store.dispatch('search/requestSearchData',this.InputValue);
    },
    mounted(){
        this.$refs.input.value = this.InputValue;
    }
}
</script>

<style lang="scss">
.pages{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0 !important;
    left: 0;
    background: white;

}
.header {
  width: 100%;
  height: 49px;
  position: absolute;
  left: 0;
  top: 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  span {
    width: 53px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .input {
    flex: 1;
    height: 35px;
    border: none;
    background: #f2f2f0;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 27px;
    background-image: url(../../../../assets/home/search.png);
    background-repeat: no-repeat;
    background-position: 9px 11px;
    background-size: 12px 12px;
  }
  .input-icon {
    background: url(../../../../assets/home/mircel.png) no-repeat;
    height: 35px;
    width: 26px;
    position: absolute;
    right: 53px;
    top: 7px;
    background-position: 0px 8px;
    background-size: 13px 17px;
  }
}
.content{
    width: 100%;
    position: absolute;
    top: 49px;
    bottom: 0px;
    overflow: hidden;
    .tabs-title{
        width: 100%;
        height: 44px;
        display: flex;
        position: relative;
        z-index: 100;
        .tab-title{
            flex:1;
            display: flex;
            align-items: center;
            justify-content: center;
            color:#989898;
            box-sizing: border-box;
        }
        .active{
            color: #33342f;
            border-bottom: 1px solid #fc6947;
        }
    }
    .tabs-content{
        width: 100%;
        top: 44px;
        bottom: 0;
        left: 0;
        overflow: hidden;
        position: absolute;
    }
}
</style>

