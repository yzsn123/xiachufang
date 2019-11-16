<template>
  <div class="category-tabs">
    <ul class="tabs-list">
      <li v-for="item in data" :key="item.id">
        <div class="pic">
          <img :src="item.img" alt />
        </div>
        <p class="title">{{item.title}}</p>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      data:[
        {id:1,title:'秋冬暖饮',img: require("../../../../assets/market/category_01.jpg")},
        {id:2,title:'销魂素食',img: require("../../../../assets/market/category_02.jpg")},
        {id:3,title:'肉肉肉',img: require("../../../../assets/market/category_03.jpg")},
        {id:4,title:'日系餐具',img: require("../../../../assets/market/category_04.jpg")},
        {id:5,title:'减肥必备',img: require("../../../../assets/market/category_05.jpg")},
        {id:6,title:'快手早餐',img: require("../../../../assets/market/category_06.jpg")},
        {id:7,title:'人气零时',img: require("../../../../assets/market/category_07.jpg")},
        {id:8,title:'厨房小工具',img: require("../../../../assets/market/category_08.jpg")}
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.category-tabs {
  overflow: hidden;
  box-sizing: border-box;
  .tabs-list {
    li {
      width: 25%;
      float: left;
      text-align: center;
      display: block;
      margin-top: 60px;
      .pic {
        width: 200px;
        border-radius: 50%;
        overflow: hidden;
        height: 200px;
        text-align: center;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        font-size: 40px;
        padding-top: 32px;
        color: #14130f;
      }
    }
  }
}
</style>