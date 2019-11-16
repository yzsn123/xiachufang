<template>
<div class="follow pages">
    <AppHeader :data="title" :IconShow="false"/>
    <AppContent :content="title"/>
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
            title:'被跟做',
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

