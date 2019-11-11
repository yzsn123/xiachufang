<template>
<div class="item-list">
  <div class="item" v-for="item in itemList" :key="item.id">
    <div class="pic-box">
      <img
        src="http://i5.chuimg.com/196489be88ce11e6a9a10242ac110002_960w_939h.jpg@2o_50sh_1pr_1l_640w_520h_1c_1e_90q_1wh.jpg"
        alt
      />
      <p class="tips">限时特价</p>
    </div>
    <div class="item-content">
      <h3 class="name">{{item.name}}</h3>
      <p class="des">{{item.des}}</p>
      <div class="info">
        <span class="status">
          已售:
          <span class="sale">{{item.status}}</span>
        </span>
        <span class="mail">包邮</span>
      </div>
      <div class="price-box">
        <div class="currentPrice">￥{{item.currentPrice}}</div>
        <div class="originPrice">￥{{item.originPrice}}</div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
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
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: 50%;
  float: left;
  padding:0 70px 100px 0;
  box-sizing:border-box;
  .pic-box {
    width: 100%;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      border-radius: 40px;
    }
    .tips {
      position: absolute;
      top: 15px;
      left: 10px;
      background: #df2f2f;
      padding: 20px;
      border-radius: 20px;
      color: #fff;
      font-size: 28px;
    }
  }
  .item-content {
    font-size: 80px;
    color: #94958f;
    .name {
      padding: 50px 0 10px 0;
      font-size: 90px;
      color: #383830;
      line-height: 120px;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .des {
      padding: 60px 0;
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 0 50px 0;
    }
    .price-box {
      display: flex;
      color: #df7164;
      align-items: flex-end;
      font-weight: bold;
      .originPrice {
        font-size: 50px;
        color: #94958f;
        text-decoration: line-through;
        padding: 0 0 0 10px;
      }
    }
  }
}
</style>