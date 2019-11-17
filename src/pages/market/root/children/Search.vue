<template>
  <div class="search-container">
    <header class="header">
      <span class="header-btn header-btn-left" @click="backAction">
        <van-icon name="arrow-left" />
      </span>
      <div class="header-center search-box">
        <van-icon name="search" />
        <input type="text" class="search" placeholder="请输入要搜索的内容" />
      </div>
    </header>
    <app-scroll class="content">
      <div class="search-content">
        <h1 class="title">流行搜索</h1>
        <div class="search-menu border-top">
          <ul>
            <li v-for="item in data" :key="item.id" @click="goDetailAction(item.id,item.title)">{{item.title}}</li>
          </ul>
        </div>
      </div>    

    </app-scroll>
    


  </div>
</template>

<script>
export default {
  data(){
    return{
      data:[
        {id:0,title:'家常菜'},
        {id:1,title:'家常菜'},
        {id:2,title:'家常菜'},
        {id:3,title:'家常菜'},
        {id:4,title:'家常菜'},
        {id:5,title:'家常菜'},
        {id:6,title:'家常菜'},
        {id:7,title:'家常菜'},
        {id:8,title:'家常菜'},
        {id:9,title:'家常菜'}
      ]
    }
  },
  methods: {
    backAction() {
      this.$router.back();
    },
    goDetailAction(id,name){
      // this.$router.push(`/market/detail${id}?title=${name}`);
      // this.$router.push(`/market/foodcategory/${id}?title=${name}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.search-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: #fff;
  height: 100%;
  z-index: 99;
  .header {
    display: flex;
    height: 44px;
    align-content: center;
    justify-content: space-around;
    background: #fff;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 0 20px 0 0;

    .header-btn {
      padding: 0 15px;
      display: flex;
      align-items: center;
      flex-direction: column;
      .van-icon-location-o {
        color: #505044;
        font-size: 14px;
      }
      .van-icon-shopping-cart-o {
        color: #3b3b3b;
        font-size: 20px;
      }
      .name {
        font-size: 14px;
        color: #505044;
        padding-top: 5px;
      }
    }
    .header-center {
      flex: 1;
      background: #f2f2f0;
      line-height: 38px;
      border-radius: 4px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .van-icon {
        padding: 0 8px;
        color: #94958f;
        font-weight: bold;
      }
      .search {
        border: none;
        background: none;
        flex: 1;
        width: 100%;
        font-size: 15px;
      }
    }
  }
}
.content{
  background: #f9f9f7;
  bottom: 0;
}
.search-content{
  overflow: hidden;
  background: #fff;
  margin-top: 12px;
    font-size: 36px;
      border: 1px #f5f6f1 solid;

  .title{
    height: 110px;
    line-height: 110px;
    padding: 0 0 0 45px;
    color: #969696;
    font-size: 38px;
  }
  ul{
    li{
      width: 33.2%;
      float: left;
      line-height: 100px;
      border-bottom: 1px #f5f6f1 solid;
      border-right: 1px #f5f6f1 solid;
      text-align: center;
      color: #4f4f4f;
    }
  }
}
</style>