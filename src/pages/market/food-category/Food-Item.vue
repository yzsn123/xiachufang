<template>
<div class="item-list">
  <div class="item" v-for="item in GoodList" :key="item.id" @click="goDetail(item.id,item.title)">
    <div class="pic-box">
      <img :src="item.picUrl"  :alt='item.name' />
      <p class="tips">限时特价</p>
    </div>
    <div class="item-content">
      <h3 class="name multiline">{{item.title}}</h3>
      <p class="des text-overflow">{{item.desc}}</p>
      <div class="info">
        <span class="status">
          已售:
          <span class="sale">{{item.num}}</span>
        </span>
        <span class="mail">包邮</span>
      </div>
      <div class="price-box">
        <div class="currentPrice">￥{{item.currentPrice}}</div>
        <div class="originPrice">￥{{item.prePrice}}</div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
   props:{
    GoodList:{
      type:Array,
      required:true
    }
  },
  data() {
    return {
      itemList: [
        {
          id: 1,
          name:
            "老丁的私房菜-干锅花菜老花菜老丁的丁的私房菜-私房菜-干锅花菜干锅花菜",
          des: "详情介绍",
          status: "22222",
          currentPrice: "80",
          originPrice: "88.8"
        },
        {
          id: 2,
          name:
            "老丁的私房菜-干锅花菜老花菜老丁的丁的私房菜-私房菜-干锅花菜干锅花菜",
          des: "详情介绍",
          status: "22222",
          currentPrice: "56.5",
          originPrice: "88.8"
        },
        {
          id: 3,
          name:
            "老丁的私房菜-干锅花菜老花菜老丁的丁的私房菜-私房菜-干锅花菜干锅花菜",
          des: "详情介绍",
          status: "22222",
          currentPrice: "56.5",
          originPrice: "88.8"
        },
        {
          id: 4,
          name:
            "老丁的私房菜-干锅花菜老花菜老丁的丁的私房菜-私房菜-干锅花菜干锅花菜",
          des: "详情介绍",
          status: "22222",
          currentPrice: "56.5",
          originPrice: "88.8"
        },
        {
          id: 5,
          name:
            "老丁的私房菜-干锅花菜老花菜老丁的丁的私房菜-私房菜-干锅花菜干锅花菜",
          des: "详情介绍",
          status: "22222",
          currentPrice: "80",
          originPrice: "88.8"
        },
        {
          id: 6,
          name:
            "老丁的私房菜-干锅花菜老花菜老丁的丁的私房菜-私房菜-干锅花菜干锅花菜",
          des: "详情介绍",
          status: "22222",
          currentPrice: "56.5",
          originPrice: "88.8"
        },
        {
          id: 7,
          name:
            "老丁的私房菜-干锅花菜老花菜老丁的丁的私房菜-私房菜-干锅花菜干锅花菜",
          des: "详情介绍",
          status: "22222",
          currentPrice: "56.5",
          originPrice: "88.8"
        },
        {
          id: 8,
          name:
            "老丁的私房菜-干锅花菜老花菜老丁的丁的私房菜-私房菜-干锅花菜干锅花菜",
          des: "详情介绍",
          status: "22222",
          currentPrice: "56.5",
          originPrice: "88.8"
        }
      ]
    };
  },
  methods:{
    goDetail(id,name){
      this.$router.push(`/market/detail/${id}?title=${name}`);
    }
  }
};
</script>

<style lang="scss" scoped>
//要清除浮动，不要滚动条没有高度不会滚动
.item-list{
  overflow: hidden;
  padding:0 0 0 30px;
.item {
  width: 50%;
  float: left;
  padding:0 26px 53px 0;
  box-sizing:border-box;
  .pic-box {
    width: 100%;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      border-radius: 10px;
    }
    .tips {
      position: absolute;
      padding: 0 20px;
      top: 15px;
      left: 10px;
      background: #df2f2f;
      border-radius: 10px;
      color: #fff;
      font-size: 28px;
      height: 50px;
      line-height: 50px;
    }
  }
  .item-content {
    font-size: 40px;
    color: #94958f;
    .name {
      padding: 10px 0 0 0;
      font-size: 40px;
      color: #383830;
      line-height: 60px;
    }
    .des {
      padding: 25px 0;
      font-size: 32px;
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0 25px 0;
      font-size: 32px;
    }
    .price-box {
      display: flex;
      color: #df7164;
      align-items: flex-end;
        font-size: 40px;
      .originPrice {
        color: #94958f;
        text-decoration: line-through;
        padding: 0 0 0 10px;
      }
    }
  }
}
}

</style>