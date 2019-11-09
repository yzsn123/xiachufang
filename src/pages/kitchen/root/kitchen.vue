<template>
    <div class="kitchen">
        <header class="header">
            <span class="add-Icon"><van-icon name="plus" size="27px" /></span>
            <input type="text" class="input">
            <span class="ring-Icon"><van-icon name="flower-o" size="27px"  /></span>
            <p class="input-icon">
                
            </p>
        </header>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header{
    width: 100%;
    height: 49px;
    position:absolute;
    left:0;
    top: 0;
    background: #ffffff;
    display: flex;
    align-items: center;
    span{
        width: 53px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .input{
        flex: 1;
        height: 35px;
        border: none;
        background: #f2f2f0;
        border-radius: 5px;
        box-sizing: border-box;
        padding-left: 27px;
        background-image: url(../../../assets/home/search.png);
        background-repeat: no-repeat;
        background-position: 9px 11px;
        background-size: 12px 12px;
    }

}
</style>


