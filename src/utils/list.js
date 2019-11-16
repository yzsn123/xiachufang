(function () {

    // 封装请求的列表数据
    function requestData(params, callback) {
        $.ajax({
            url: HOME_INDEX_APi,
            method: 'GET',
            data: params,
            success: function (data) {
                if (data.status === 0) {

                    // console.log(data);
                    // 得到数据，构建首屏的dom
                    var dom = createListDOM(data.data);
                    // 将结果传给外部提供的回调函数
                    callback(dom);

                } else {
                    alert('请求失败');
                }
            },
            fail: function (error) {
                alert('请求失败');
            }
        })
    };


    // 构建列表，返回值为列表的dom。但是不处理dom
    function createListDOM(data) {
        var tmpDOM = '';
        for (var i = 0, count = data.length; i < count; i++) {
            tmpDOM += `<li>
                <div class="Bigimg">
                    <img src="${data[i].imgUrl}/${data[i].num1}.jpg" alt="">
                </div>
                <div class="mesg">
                    <h3>${data[i].title}</h3>
                    <span class="user"><img src="./../static/assets/headGirl.png" alt="">${data[i].name}</span>
                    <span class="num"><i class="iconfont iconicon-test"> </i>${data[i].num2}</span>
                </div>
            </li>`;
        }
        return tmpDOM;
    }



    // 构建滚动视图
    var scroll = new Scroll('.content', {
        tap: true,
        click: true,
        bounce: true,
        // 下拉刷新的方法
        refreshData: function (endRefresh) {
            // 重新请求最新的数据
            // 修改请求条件
            params.page = 1;
            // 关闭下拉刷新的开关
            scroll.setCanRefresh(false);
            // 发送请求
            requestData(params, function (dom) {
                // 得到结果，设置dom
                $('.list').html(dom);

                // 关闭刷新
                endRefresh();
                // 重新打开下拉刷新的开关
                scroll.setCanRefresh(true);
            });
        },

        // 上拉加载更多的方法
        loadmoreData: function (endLoadMore) {
            // 修改请求条件
            params.page++;
            // 关闭可以加载更多的开关
            scroll.setCanLoadmore(false);
            //请求下一页数据
            requestData(params, function (dom) {
                // 得到结果，设置dom
                $('.list').append(dom);
                // 关闭加载更多的动画效果
                endLoadMore();
                // 重新打开可以加载更多的开关
                scroll.setCanLoadmore(true);
            });
        }
    });

    // 初始化发送ajax请求，请求首屏
    var params = {
        page: 1,
        count: 10
    }
    // 发送请求
    requestData(params, function (dom) {
        // 插入dom
        $('.list').html(dom);
        
        // 打开上下拉刷新的开关
        scroll.setCanRefresh(true);
        scroll.setCanLoadmore(true);
    });


    $('.list').on('click','li',function(){
        
        var ImgSrc = $(this).find('.Bigimg img').attr('src');
        var title = $(this).find('h3').text();
        var name = $(this).find('.user').text();
        var num = $(this).find('.num').text();
       
        var detail = {
            'Imgsrc':ImgSrc,
            'title':title,
            'name':name,
            'num':num
        };
        detail = JSON.stringify(detail);
        localStorage.setItem('detail',detail);
        // console.log(JSON.stringify(detail));
        window.location.href = './detailIndex';

    })
})();