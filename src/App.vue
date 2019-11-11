<template>
<div id="app">

    <router-view></router-view>
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
#app,html,body{
    width: 100%;
    height: 100%;
}

</style>



