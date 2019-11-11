<template>
<div id="app">
    <router-view class="page"></router-view>
    <tab-bar></tab-bar>
</div>
</template>

<script>
import TabBar from './components/tab-bar'
export default {
    components: {
        [TabBar.name]: TabBar
    }
}
</script>

<style lang="scss">
html,body,#app{
    width:100%;
    height:100%;
}
.page{
    width:100%;
    height:100%;
}
</style>



