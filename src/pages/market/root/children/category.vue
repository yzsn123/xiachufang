<template>
  <div class="category-tabs">
    <ul class="tabs-list">
      <li v-for="item in data" :key="item.id" @click="goGoodsList(item.id,item.title)">
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
  data() {
    return {
      data: [
        {
          id: 1,
          title: "烘焙",
          img: require("../../../../assets/market/category_01.jpg")
        },
        {
          id: 2,
          title: "果蔬生鲜",
          img: require("../../../../assets/market/category_02.jpg")
        },
        {
          id: 3,
          title: "器具",
          img: require("../../../../assets/market/category_03.jpg")
        },
        {
          id: 4,
          title: "领劵",
          img: require("../../../../assets/market/category_04.jpg")
        },
        {
          id: 5,
          title: "方便食品",
          img: require("../../../../assets/market/category_05.jpg")
        },
        {
          id: 6,
          title: "饮品茶酒",
          img: require("../../../../assets/market/category_06.jpg")
        },
        {
          id: 7,
          title: "时令鲜食",
          img: require("../../../../assets/market/category_07.jpg")
        },
        {
          id: 8,
          title: "全部分类",
          img: require("../../../../assets/market/category_08.jpg")
        }
      ]
    };
  },
  methods:{
    goGoodsList(id,title){
      this.$router.push(`/market/foodcategory/${id}?title=${title}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.category-tabs {
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 60px;
  padding-bottom: 80px;
  border-bottom:1px #eee solid;
  .tabs-list {
    li {
      width: 25%;
      float: left;
      text-align: center;
      display: block;
      margin-top: 60px;
      .pic {
        width: 102px;
        border-radius: 50%;
        overflow: hidden;
        height: 91px;
        text-align: center;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        font-size: 36px;
        padding-top: 32px;
        color: #14130f;
      }
    }
  }
}
</style>