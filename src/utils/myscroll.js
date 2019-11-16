import  '../lib/iscroll-probe.js'
export const Scroll = function(dom, options) {
    options = options || {};
    options.probeType = 3;
    // 控制上下拉刷新的条件
    options.canrefresh = false;
    options.canLoadmore = false;

    var myScroll = new IScroll(dom, options);

    myScroll.scrollTo(0, 0, 0);


    // 提供刷新dom的方法
    myScroll.on('beforeScrollStart', function(){
        // 识别当前可以滚动的最新高度
        myScroll.refresh();
    })
  
    // var refresh = $('#Refresh');
    // var img = $('.refresh img')
    // var content = $(dom);


    // 控制是否可以下拉刷新
    this.setCanRefresh = function (bool) {
        options.canrefresh = bool;
    }
    // 控制是否可以上拉加载更多的方法
    this.setCanLoadmore = function (bool) {
        options.canLoadmore = bool;
    }

    //触碰了屏幕
    content.on('touchstart', function (e) {
        mY = e.touches[0].clientY;

        //判断滚动条，如果是大于等于0，下拉刷新
        myScroll.on('scroll', function () {
            
            if (myScroll.y > 0) {
                myScroll.scrollTo(0, 0, 0); //滚动条立马置0
                //可以看到多余的部分，可以触发下拉刷新了

                //通过触摸事件控制刷新的样式
                content.on('touchmove', function (e) {
                  
                    var Y = e.touches[0].clientY - mY;
                    if (Y >= 328) {
                        Y = 328;
                    }
                    img.css('transform', `rotate(${(Y / 164) * 180}deg)`)
                    refresh.css('top', Y / 2 + 'px');
                })

                //触碰停止
                content.on('touchend', function (e) {
                    content.off('touchmove');
                    var top = refresh.offset().top / 2;
                    if (top >= 82) {
                        var time = setInterval(function () {
                            top -= 5;
                            if (top <= 82) {
                                top = 82;
                                clearInterval(time);
                                img.attr('class', 'rotate');
                                //正在刷新的样式，设置0.5s后停止刷新
                                setTimeout(function () {
                                    (options.canrefresh && options.refreshData) && options.refreshData(function () {
                                        // 刷新
                                        myScroll.refresh();
                                        refresh.css('top', '-65px');
                                        img.removeClass('rotate');
                                        myScroll.scrollTo(0, 0, 0);
                                    });
                                }, 500);

                            }
                            refresh.css('top', top + 'px');
                        }, 10)
                    } else {
                        refresh.css('top', '-65px');
                    }

                })
            } else {

                //如果滚动条高度小于100，重新加载10个
                if (Math.abs(myScroll.y - myScroll.maxScrollY) <= 400) {
                    myScroll.off('scroll');
                    (options.canLoadmore && options.loadmoreData) && options.loadmoreData(function () {
                        // 刷新
                        myScroll.refresh();
                    });
                }
            }
        })
    })
}
export default Scroll