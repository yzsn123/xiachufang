<template>
    <div class="pages">
        <header class="header">
            <span class="add-Icon"><van-icon name="plus" size="27px" /></span>
            <input type="text" class="input" placeholder="搜索菜谱、食材" ref="input">
            <p class="input-icon"></p>
            <div class="Searchbtn" @click="SearchAction(name)">搜索</div>
        </header>
        <div class="content">
            <div class="recent">
                <div class="recent-title">最近搜索</div>
                <div class="empty" @click="EmptyClick">清空</div>
            </div>
            <div class="search-recent-content">
                <div class="block-click" v-for="(item,index) in recentList" @click="SearchAction(item)" :key="index">{{item}}</div>
            </div>
            <div class="recent popular">
                <div class="recent-title">最近搜索</div>
            </div>
            <div class="search-recent-content">
                <div class="block-click" v-for="(item,index) in popularList" @click="SearchAction(item)" :key="index">{{item}}</div>
            </div>
        </div>
        <transition enter-active-class="slideInRight" leave-active-class="slideOutRight">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return{
            recentList:['家常菜','单位','酸菜鱼','下饭菜','单身食谱','可乐鸡翅'],
            popularList:['家常菜','早餐','可乐鸡翅','豆腐','牛肉','红烧肉','蛋挞','蛋糕','汤','鸡胸肉','茄子','虾','南瓜饼','面包','土豆','南瓜','酸菜鱼','鸡汤','鸡腿','排骨'],
        }
    },
    methods:{
        EmptyClick(){
            this.$refs.input.value = '';
        },
        SearchAction(name){
            if(name){
                this.$store.dispatch('search/requestSearchData',name);
                this.$router.push(`/kitchen/search/detail/${name}`);
            } else{
                var name = this.$refs.input.value;
                if(name){
                    return;
                } else{
                    this.$store.dispatch('search/requestSearchData',name);
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.pages{
    width: 100%;
    position: absolute;
    top: 0px;
    bottom:-49px;
    left: 0;
    background: white;
    z-index: 200;
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
    background-image: url(../../../assets/home/search.png);
    background-repeat: no-repeat;
    background-position: 9px 11px;
    background-size: 12px 12px;
  }
  .input-icon {
    background: url(../../../assets/home/mircel.png) no-repeat;
    height: 35px;
    width: 26px;
    position: absolute;
    right: 53px;
    top: 7px;
    background-position: 0px 8px;
    background-size: 13px 17px;
  }
  .Searchbtn{
      width:60px;
      height: 100%;
      font-size: 14px;
      line-height: 49px;
      text-align: center;
      color: #ee5a58;
  }
}
.content{
    width: 100%;
    position: absolute;
    top: 44px;
    bottom: 0;
    left: 0;
    overflow: hidden;
}
.recent{
    width: 100%;
    height: 90px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding:0 49px;
    &-title{
        height: 100%;
        line-height: 90px;
        font-size: 33px;
        color: #303030;
        font-weight: 600;
    }
    .empty{
        width: 64px;
        height: 90px;
        line-height: 90px;
        font-size: 32px;
        color: #3e3e3c;
    }
}
.popular{
    margin-top: 30px;
}
.search-recent-content{
    width: 100%;
    box-sizing: border-box;
    padding-left: 46px;
    padding-right: 46px;
    overflow: hidden;
    .block-click{
        height: 80px;
        line-height: 80px;
        padding: 0 30px;
        background: #f5f5f5;
        margin-right: 22px;
        margin-bottom: 24px;
        float: left;
        font-size: 35px;
    }
}
</style>

