<template>
<div class="content">
    <div class="message-content">
        <div class="message-title">
            还没有收到{{Textcontent}}消息哦
        </div>
        <div class="message-title">
            去别的地方看看吧
        </div>
    </div>
</div> 
</template>
<script>
export default {
    props:{
        content:String
    },
    data(){
        return{
            Textcontent:this.content
        }
    }
}
</script>

<style lang="scss" scoped>
.content{
    width: 100%;
    position: absolute;
    top:44px;
    left: 0;
    bottom: 0;
}
.message-content{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .message-title{
        font-size: 38px;
        line-height: 80px;
        height: 80px;
        width: 100%;
        text-align: center;
        color: #3a3a3a;
    }
}
</style>

