<template>
  <div class="detailSku">
    <div class="mask" @click="hideAction()"></div>
    <div class="skuBox">
      <div class="product-box">
        <div class="product">
          <div class="pic">
            <img :src="selectImg" alt ref="goodspic" />
          </div>
          <div class="contect-box">
            <h3 class="title">{{data.title}}</h3>
            <div class="price-box">
              <span>价格:￥{{data.currentPrice}}</span>
              <!-- <span class="origin">￥165</span> -->
            </div>
            <!-- 因为是数组需要用join来拼接 有规格才显示-->
            <div class="num" v-if="this.data.sku.tree.length>0">已选择 : {{tip.join(',')}}</div>
          </div>
          <div @click="hideAction">
            <van-icon name="clear" />
          </div>
        </div>
        <!-- 规格选择 -->
        <selectItem
          :data="data"
          @select="handleSelect"
          v-for="(data,index) in data.sku.tree"
          :key="index"
        />
      </div>
      <div class="skuSpec">
        <h3 class="title">数量</h3>
        <div class="step">
          <span :class="{disabled:count<=1}" @click="handleCount(-1)">-</span>
          <span>{{count}}</span>
          <span @click="handleCount(+1)">+</span>
        </div>
      </div>
      <div class="detailBtn" @click="buyAction">确定</div>
    </div>
  </div>
</template>

<script>
import selectItem from "./select-item";
import { Toast } from "vant";
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  components: {
    [Toast.name]: Toast,
    selectItem
  },
  data() {
    return {
      count: 1,
      selectMap: {},
      selectImg: this.data.bannerList[0].picUrl
    };
  },
  computed: {
    tip() {
      //把对象转成数组的格式
      let mapArr = Object.entries(this.selectMap);
      //没有选择的时候
      if (mapArr.length <= 0) {
        return ["请选择规格数量"];
      } else {
        // 选择了
        let tmp = [];
        //遍历原数组里面的分类
        this.data.sku.tree.forEach(({ spec }) => {
          //判断是否有值
          if (this.selectMap[spec]) {
            //把里面的规格添加到数组里面
            tmp.push(this.selectMap[spec].kindName);
          }
        });
        // 返回数组
        return tmp;
      }
    }
  },
  methods: {
    hideAction() {
      this.$emit("input", false);
    },
    handleCount(num) {
      if (this.count + num < 1) {
        Toast("不能再减少了，只有一件了");
      } else {
        this.count += num;
      }
    },
    handleSelect(name, item) {
      //动态添加属性需要添加setter和getter函数
      this.selectMap = {
        ...this.selectMap,
        [name]: item
      };
      // 判断产品是否为真，修改选择的图片
      if (item.picUrl) {
        // 把当前规格的产品图片赋值
        this.selectImg = item.picUrl;
      }
    },
    buyAction() {
      // 取数组的长度
      console.log(Object.entries(this.selectMap).length);
      if (this.data.sku.tree.length > Object.entries(this.selectMap).length) {
        //  没有选择完整
        Toast('请选择规格数量');
      } else {
        this.$router.push('/home/detail');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.detailSku {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  bottom: 45px;
  box-sizing: border-box;
  .mask {
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
  }
  .skuBox {
    background: #fff;
    border-radius: 30px 30px 0 0;
    position: fixed;
    left: 0;
    height: 60%;
    bottom: 0;
    right: 0;
    padding: 23px;
    overflow-y: auto;
    .product-box {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      font-size: 30px;
      .product {
        display: flex;
        align-items: flex-start;
        border-bottom: 1px #eee solid;
        padding: 0 0 24px 0;
        .pic {
          width: 200px;
          height: 200px;
          margin-right: 30px;
          border: 1px #eee solid;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .contect-box {
          flex: 1;
          font-size: 35px;
          .title {
            margin-bottom: 10px;
            color: #333;
            display: inline-block;
            padding: 0 4px;
            vertical-align: middle;
            font-weight: normal;
            border-radius: 2px;
            font-size: 40px;
            line-height: 56px;
          }
          .price-box {
            font-size: 30px;
            line-height: 30px;
            color: #cd7164;
            .origin {
              margin-left: 5px;
              color: #999;
              text-decoration: line-through;
              font-size: 24px;
            }
          }
          .num {
            font-size: 30px;
            color: #666;
            margin-top: 20px;
          }
        }
        .van-icon {
          color: #92938b;
          font-size: 40px;
          padding: 0 10px;
        }
      }
    }
    .skuSpec {
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      .title {
        font-size: 34px;
        color: #555;
        font-weight: normal;
        margin: 10px 0;
      }
      .step {
        span {
          padding: 8px 20px;
          font-size: 50px;
          color: #666;
          border: 1px #dedede solid;
          text-align: center;
          display: inline-block;
          &.disabled {
            color: #dedede;
            border: 1px #dedede solid;
          }
        }
      }
    }
  }
  .detailBtn {
    text-align: center;
    height: 117px;
    position: fixed;
    line-height: 117px;
    font-size: 38px;
    color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px #eee solid;
    background: #fb6650;
    button {
      border: none;
      border: none;
      background: #fff;
    }
    .back {
      width: 80px;
    }
    .add {
      flex: 1;
    }
    .addCart {
      background: #dd1a21;
      color: #fff;
    }
  }
}
</style>
