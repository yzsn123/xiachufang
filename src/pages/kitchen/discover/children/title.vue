<template>
<div class="title">
    {{data}}
</div>
</template>

<script>
export default {
    props:{
        title:String
    },
    data(){
        return{
            data:this.title,
        }
    }
}
</script>

<style lang="scss" scoped>
.title{
    width: 100%;
    height: 154px;
    font-size: 44px;
    line-height: 154px;
    color: #2b2823;
    box-sizing: border-box;
    padding-left: 42px;
}
</style>
