<template>
<div class="classify pages">
    <AppHeader :data="title" :IconShow="false"/>
    <div class="content">
        <Iscroll>
            <Title :title="hottitle"></Title>
            <Classify :content="hotcontent"/>
            <Title :title="titleType"></Title>
            <Classify :content="contentType"/>
            <Title :title="scenetitle"></Title>
            <Classify :content="sceneType"/>
            <Title :title="materialstitle"></Title>
            <Classify :content="materialsType"/>
            <Title :title="funtitle"></Title>
            <Classify :content="funType"/>
            <Title :title="culture"></Title>
            <Classify :content="cultureType"/>
        </Iscroll>
    </div>
</div>
</template>

<script>
import Title from './title';
import Classify from './content';
import Iscroll from '../../../../components/Iscroll'
import AppHeader from '../../message/children/header'
export default {
    components:{
        AppHeader,
        Iscroll,
        Title,
        Classify
    },
    data(){
        return{
            title:'菜谱分类',
            hottitle:'热门分类',
            hotcontent:[
                {name:'家常菜',picUrl:require('../../../../assets/classify/classify_03.jpg')},
                {name:'下饭菜',picUrl:require('../../../../assets/classify/classify_05.jpg')},
                {name:'烘焙',picUrl:require('../../../../assets/classify/classify_07.jpg')},
                {name:'肉类',picUrl:require('../../../../assets/classify/classify_09.jpg')},
                {name:'早餐',picUrl:require('../../../../assets/classify/classify_15.jpg')},
                {name:'蔬菜',picUrl:require('../../../../assets/classify/classify_16.jpg')},
                {name:'汤粥主食',picUrl:require('../../../../assets/classify/classify_17.jpg')},
                {name:'松下清厨房',picUrl:require('../../../../assets/classify/classify_23.jpg')},
                {name:'快手菜',picUrl:require('../../../../assets/classify/classify_24.jpg')},
                {name:'一人食',picUrl:require('../../../../assets/classify/classify_25.jpg')},
                {name:'金牌家宴',picUrl:require('../../../../assets/classify/classify_29.jpg')},
            ],
            titleType:'菜式',
            contentType:[
                {name:'素菜',picUrl:require('../../../../assets/classify/classify_30.jpg')},
                {name:'甜品饮品',picUrl:require('../../../../assets/classify/classify_31.jpg')},
                {name:'小吃',picUrl:require('../../../../assets/classify/classify_32.jpg')},
                {name:'零食',picUrl:require('../../../../assets/classify/classify_37.jpg')},
                {name:'懒人食谱',picUrl:require('../../../../assets/classify/classify_38.jpg')},
                {name:'下酒菜',picUrl:require('../../../../assets/classify/classify_39.jpg')},
                {name:'沙拉凉菜',picUrl:require('../../../../assets/classify/classify_43.jpg')},
            ],
            scenetitle:'场景',
            sceneType:[
                {name:'素菜',picUrl:require('../../../../assets/classify/classify_44.jpg')},
                {name:'甜品饮品',picUrl:require('../../../../assets/classify/classify_45.jpg')},
                {name:'小吃',picUrl:require('../../../../assets/classify/classify_46.jpg')},
                {name:'零食',picUrl:require('../../../../assets/classify/classify_51.jpg')},
                {name:'懒人食谱',picUrl:require('../../../../assets/classify/classify_52.jpg')},
                {name:'下酒菜',picUrl:require('../../../../assets/classify/classify_53.jpg')},
                {name:'沙拉凉菜',picUrl:require('../../../../assets/classify/classify_57.jpg')},
            ],
            materialstitle:'食材辅料',
            materialsType:[
                {name:'素菜',picUrl:require('../../../../assets/classify/classify_58.jpg')},
                {name:'甜品饮品',picUrl:require('../../../../assets/classify/classify_59.jpg')},
                {name:'小吃',picUrl:require('../../../../assets/classify/classify_60.jpg')},
                {name:'零食',picUrl:require('../../../../assets/classify/classify_65.jpg')},
                {name:'懒人食谱',picUrl:require('../../../../assets/classify/classify_66.jpg')},
                {name:'下酒菜',picUrl:require('../../../../assets/classify/classify_67.jpg')},
                {name:'沙拉凉菜',picUrl:require('../../../../assets/classify/classify_68.jpg')},
                {name:'沙拉凉菜',picUrl:require('../../../../assets/classify/classify_73.jpg')},
            ],
            funtitle:'趣味分类',
            funType:[
                {name:'素菜',picUrl:require('../../../../assets/classify/classify_74.jpg')},
                {name:'甜品饮品',picUrl:require('../../../../assets/classify/classify_75.jpg')},
                {name:'小吃',picUrl:require('../../../../assets/classify/classify_76.jpg')},
                {name:'零食',picUrl:require('../../../../assets/classify/classify_81.jpg')},
                {name:'懒人食谱',picUrl:require('../../../../assets/classify/classify_82.jpg')},
                {name:'下酒菜',picUrl:require('../../../../assets/classify/classify_83.jpg')},
                {name:'沙拉凉菜',picUrl:require('../../../../assets/classify/classify_87.jpg')},
            ],
            culture:'文化地标',
            cultureType:[
                {name:'素菜',picUrl:require('../../../../assets/classify/classify_88.jpg')},
                {name:'甜品饮品',picUrl:require('../../../../assets/classify/classify_89.jpg')},
                {name:'小吃',picUrl:require('../../../../assets/classify/classify_90.jpg')},
                {name:'零食',picUrl:require('../../../../assets/classify/classify_95.jpg')},
                {name:'懒人食谱',picUrl:require('../../../../assets/classify/classify_96.jpg')},
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
.pages{
    width: 100%;
    position: absolute;
    top: 0;
    bottom: -49px;
    background: white;
    z-index: 100;
}
.content{
    width: 100%;
    position: absolute;
    top: 49px;
    bottom: 0;
    overflow: hidden;
    left: 0;
    z-index:100;
}
</style>

