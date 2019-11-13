<template>
  <div class="store-box">
     <!-- 精选餐厨好物 -->
    <div class="product-title">
      <span class="tit">好</span>
      <span class="tit">店</span>
      <span class="tit">推</span>
      <span class="tit">荐</span>
   
    </div>
  <div class="store-list">
    <div class="cell" v-for="item in storeList" :key="item.id">
      <div class="pic">
        <img src="http://i2.chuimg.com/85f1fe9597eb4f83aa152c3ac074bbb8_756w_756h.jpg?imageView2/1/w/560/h/340/q/90/format/jpg" alt="">
        <div class="tips">
          <h3 class="tit">{{item.title}}</h3>
          <p class="name"> {{item.name}} </p>
        </div>
      </div>
      <div class="price">
        <b>199</b>
        减
        <b>30</b>·
        <b>299</b>减
        <b>60</b>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
 data(){
   return{
     storeList:[
       {id:1,title:'手工吐司1',name:'吐司1'},
       {id:2,title:'手工吐司2',name:'吐司2'},
       {id:3,title:'手工吐司3',name:'吐司3'},
       {id:4,title:'手工吐司4',name:'吐司4'}
     ]
   }
 }
}
</script>

<style lang="scss" scoped>
.store-list{
   margin:35px 0 0 10px;
    overflow: hidden;
    .cell{
      width:50%;
      padding-right: 10px;
      padding-bottom: 20px;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
      float: left;
      .pic{
        position: relative;
        img{
          width: 100%;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
        .tips{
          top: 10%;
          left: 50%;
          transform:translate(-50%,-10%);
          position: absolute;
          text-align: center;
          color: #fff;
          .tit{
            font-weight: bold;
            padding-bottom: 10px;
            font-size: 40px;
          }
          .name{
           font-size: 30px;
          }
        }
      }
      .price{
        background: #ffef42;
        color: #191917;
        height: 80px;
        line-height: 80px;
        border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        b{
          font-weight: 700;
        }
      }
    }
}

</style>