<template>
    <div class="thumbs">
        <div class="thumbs-info">
            <p class="good-job" @click="thumbsAction">
                <van-icon name="good-job-o" :class="{active:thumbsActive}"/>
                <span>{{item.thumbs}}</span>
            </p>
            <p class="chat">
                <van-icon name="chat-o"/>
                <span>{{item.recount}}</span>
            </p>
            <p class="operate" @click="operate">
                <van-icon name="ellipsis" />
            </p>
        </div>
        <div class="thumbs-desc">
            {{item.desc}}
        </div>
        <div class="thumbs-input">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1030733615,2424103943&fm=26&gp=0.jpg" alt="">
            <input type="text" placeholder="写评论">
        </div>
        <div class="thumbs-date">
            {{GetDate(item.date)}}
        </div>
    </div>  
</template>

<script>
export default {
    props:{
        data:Object
    },
    data(){
        return{
            thumbsNum:4,
            thumbsActive:false,
            ActiveIndex:1,
            item:this.data,
        }
    },
    methods:{
        thumbsAction(){
            if(this.ActiveIndex % 2 == 1){
                this.item.thumbs = this.item.thumbs + 1;
            }  else{
                this.item.thumbs = this.item.thumbs - 1;
            } 
            this.ActiveIndex = this.ActiveIndex + 1;
            this.thumbsActive = !this.thumbsActive;
        },
        operate(){
            this.$center.$emit('ChangeOpacityMark');
        },
        GetDate(date){
            var _date = new Date().getTime();
            // 获取现在的时间戳
            // 获取服务器给的时间戳
            var date = Date.parse(date);
            // 判断发布时间
            var TimeStamp = _date - date;
            var yearTime = 31536000000;
            var monthTime = 2678400000;
            var dayTime = 86400000;
            var year = parseInt(TimeStamp / yearTime);
            if(year>0){
                return year + '年前';
            } else {
                var restMonthStamp = TimeStamp % yearTime;
                var month = parseInt(restMonthStamp / monthTime);
                var restDayStamp = restMonthStamp % monthTime;
                if(month>0){
                    return month + '月前';
                } else{
                    var day = parseInt(restDayStamp / dayTime);
                    var restStamp = restDayStamp % dayTime;
                    if(day>0){
                        return day + '日前';
                    } else{
                        var hours = parseInt(restStamp / (60*60*1000));
                        var restMinuteStamp = restStamp % (60*60*1000);
                        if(hours > 0){
                            return hours + '小时前';
                        } else{
                            var minute = parseInt(restMinuteStamp / (60*1000));  
                            return minute + '分钟前';
                        }
                        
                    }
                }
            }
        }
    },
    created(){

    }
}
</script>

<style lang="scss" scoped>
.thumbs{
    width:100%;
    box-sizing: border-box;
    padding: 0 69px 0 53px;
    &-info{
        width: 100%;
        height: 155px;
        display: flex;
        position: relative;
        p{
            display: flex;
            height: 155px;
            .van-icon{
                line-height: 155px;
                font-size: 53px;
                color: #333333;
            }
            span{  
                display: inline-block;
                line-height: 155px;
                font-size: 21px;
                color: #333333;
                margin-left: 31px;
            }
        }
        .chat{
            margin-left: 133px;
        }
        .operate{
            position: absolute;
            right: 0;
        }
    }
    &-desc{
        width: 100%;
        height: 34px;
        line-height: 34px;
        color: #373833;
    }
    &-input{
        width: 100%;
        height: 58px;
        display: flex;
        margin-top: 60px;
        img{
            width: 58px;
            height: 58px;
            border-radius: 50%;
        }
        input{
            height: 58px;
            margin-left: 20px;
            font-size: 34px;
            line-height: 58px;
            color: #9a9a9a;
            border: none;
            outline: none;
        }
    }
    &-date{
        width: 100%;
        height: 142px;
        line-height: 142px;
        color:#94958f;
    }
    .active{
        color: #f8664f !important;
    }
}



</style>

