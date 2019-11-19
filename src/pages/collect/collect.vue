<template>
<div class="collect">
    <header class="header">
        <input type="text" class="input" placeholder="搜索我的收藏">
        <span class="ring-Icon"><van-icon name="bag-o" size="27px" /></span>
    </header>
    <div class="content">
      <van-tabs v-model="active">
        <van-tab title="菜单">
          <div class="black">
          </div>
          <div class="name">
            我的收藏
          </div>
        </van-tab>
        <van-tab title="课程">
          <div class="detail-content">
            <div class="title-name">你好像还未收藏过</div>
            <div class="title-desc">如果你需要某个故事,你只需要将它收藏,以后就可以在这里找到</div>
            <div class="link">去逛逛课程</div>
          </div>
        </van-tab>
        <van-tab title="故事">
          <div class="detail-content">
            <div class="title-name">你好像还未收藏过</div>
            <div class="title-desc">如果你需要某个故事,你只需要将它收藏,以后就可以在这里找到</div>
            <div class="link">去逛逛故事</div>
          </div>
        </van-tab>
        <van-tab title="作品">
          <div class="detail-content">
            <div class="title-name">你好像还未收藏过</div>
            <div class="title-desc">如果你需要某个作品,你只需要将它收藏,以后就可以在这里找到</div>
            <div class="link">去逛逛作品</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
</div>
</template>

<script>
import { Tab, Tabs } from 'vant';
export default {
  components:{
    [Tab.name]:Tab,
    [Tabs.name]:Tabs
  },
  data(){
    return{
      active: 2
    }
  }
}
</script>

<style lang="scss">
.collect{
    width: 100%;
    height: 100%;
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
  box-sizing: border-box;
  padding-left: 18px;
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
    background-image: url(../../assets/home/search.png);
    background-repeat: no-repeat;
    background-position: 9px 11px;
    background-size: 12px 12px;
  }
  .input-icon {
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
  position: absolute;
  top: 49px;
  bottom: 49px;
  left: 0;
  width: 100%;
  overflow: hidden;
}
.van-tabs__wrap{
  width: 100%;
  height: 160px !important;
}
.van-tab{
  line-height: 160px !important;
  font-size: 40px;
  font-weight: 600;
}
.van-tabs__content{
  width: 100%;
  height: 1660px;
}
.van-tab__pane{
  height: 100%;
}
.black{
  width: 974px;
  height: 557px;
  background: #ebebe1;
  margin: 38px auto 0;
}
.name{
  width: 100%;
  height: 96px;
  line-height: 96px;
  box-sizing: border-box;
  padding-left: 55px;
  font-size: 45px;
  color: #383933;
}
.detail-content{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.title-name{
  width: 100%;
  height: 68px;
  line-height: 68px;
  font-size: 68px;
  color: #383934;
  text-align: center;
}
.title-desc{
  width:958px;
  margin: 130px auto 0;
  font-size: 34px;
  line-height: 34px;
  color: #383934;
  text-align: center;
}
.link{
  width: 100%;
  height: 42px;
  line-height: 42px;
  font-size: 42px;
  color:#f8664f;
  text-align: center;
  margin-top: 125px;
}
</style>

