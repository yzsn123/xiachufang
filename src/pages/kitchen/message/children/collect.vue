<template>
<div class="follow pages">
    <AppHeader :data="title" :IconShow="true"/>
    <AppContent :content="content"/>
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
        <router-view></router-view>
    </transition>
</div>
</template>

<script>
import AppHeader from './header'
import AppContent from './content'
export default {
    components:{
        AppHeader,
        AppContent
    },
    data(){
        return{
            title:'收藏',
            content:'赞与收藏'
        }
    }
}
</script>

<style lang="scss" scoped>
.pages{
    width: 100%;
    top:0;
    bottom: 0px;
    left: 0;
    background: white;
    position: absolute;
}
</style>
