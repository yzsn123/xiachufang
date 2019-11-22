<template>
  <div class="kind">
    <ul class="kindList" :class="{unfold: !moreFlag}">
      <li v-for="(item,index) in kindList" :key="index" @click="kindAction(item)">
          <img :src="item.picUrl" :ref="item.id"/>
          <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kindList: [
        {
          picUrl: require("../../../../assets/img/class_03.jpg"),
          title: "面包",
          link: "/classroom/kind/mianbao"
        },
        {
          picUrl: require("../../../../assets/img/class_05.jpg"),
          title: "蛋糕",
          link: "/classroom/kind/dangao"
        },
        {
          picUrl: require("../../../../assets/img/class_07.jpg"),
          title: "甜点",
          link: "/classroom/kind/tiandian"
        },
        {
          picUrl: require("../../../../assets/img/class_09.jpg"),
          title: "录播课",
          link: "/classroom/kind/luboke"
        },
        {
          picUrl: require("../../../../assets/img/class_11.jpg"),
          title: "饮品",
          link: "/classroom/kind/yinping"
        },
        {
          picUrl: require("../../../../assets/img/class_18.jpg"),
          title: "点心面食",
          link: "/classroom/kind/dianxin"
        },
        {
          picUrl: require("../../../../assets/img/class_19.jpg"),
          title: "中式料理",
          link: "/classroom/kind/liaoli"
        },
        {
          picUrl: require("../../../../assets/img/class_20.jpg"),
          title: "健康减脂",
          link: "/classroom/kind/jianzhi"
        },
        {
          picUrl: require("../../../../assets/img/class_21.jpg"),
          title: "热销榜",
          link: "/classroom/kind/hot"
        },
        {
          picUrl: require("../../../../assets/img/class_22.jpg"),
          title: "更多",
          link: "/classroom/kind/more",
          id:'more'
        },
        {
          picUrl: require("../../../../assets/img/class_23.jpg"),
          title: "汤粥",
          link: "/classroom/kind/tangzhou"
        },
        {
          picUrl: require("../../../../assets/img/class_24.jpg"),
          title: "异国料理",
          link: "/classroom/kind/yiguo"
        },
        {
          picUrl: require("../../../../assets/img/class_25.jpg"),
          title: "饼干",
          link: "/classroom/kind/binggan"
        },
        {
          picUrl: require("../../../../assets/img/class_26.jpg"),
          title: "小吃",
          link: "/classroom/kind/xiaochi"
        },
        {
          picUrl: require("../../../../assets/img/class_27.jpg"),
          title: "早餐",
          link: "/classroom/kind/zaocan"
        }
      ],
      moreFlag:true
    };
  },
  methods:{
      kindAction(item){
         
          if(item.id == 'more'){
              if(this.moreFlag == true){
                  this.$refs.more[0].style = 'transform: rotate(180deg)';
                  this.moreFlag = false;
              }else{
                  this.$refs.more[0].style = 'transform: rotate(0deg)';
                  this.moreFlag = true;
              }
          }else{
              this.$router.push(item.link);
          }
      }
  }
};
</script>

<style lang="scss" scoped>
.kind {
  width: 100%;
  .kindList {
    width: 100%;
    transition: all 0.3s;
    height: 416px;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        display: block;
        height: 82px;
        margin:40px 0;
        transition: all 0.3s;
      }
      span {
        font-size: 38px;
      }
    }
  }
  .unfold{
     height: 596px;
  }
}
</style>