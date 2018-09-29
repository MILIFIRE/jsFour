/**
 * Created by shegxy on 2018/9/28.
 */
//选项卡
let ranTab = (function () {
    var tabAll = document.getElementById('tabAll');
    var tab = document.getElementsByClassName('tab')[0];
    var lis = tab.getElementsByTagName('li');
    var divs = tabAll.getElementsByClassName('slide');
    //点击li，清除所有class，加active
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseenter = function () {
            for (let n = 0; n < lis.length; n++) {
                lis[n].classList.remove('selected');
                divs[n].classList.remove('selected');
            }
            this.className = 'selected';
            divs[this.index].classList.add('selected');
        }
    }
})();

//使用swiper实现轮播图+鼠标hover效果
let ranSlides = (function () {
    $(document).ready(function () {
         let a1 = new Swiper('#ranA1', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
        });

        let a2 = new Swiper('#ranA2', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
        });

        let a3 = new Swiper('#ranA3', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
        });

        let a4 = new Swiper('#ranA4', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
        });

        let a5 = new Swiper('#ranA5', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
        });


        let b1 = new Swiper('#ranB1', {
            autoplay: 2000,//可选选项，自动滑动
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            observer: true,
            nextButton: '.swiper-button-nextB',
            prevButton: '.swiper-button-prevB',
        });

        let c1 = new Swiper('#ranC1', {
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            observer: true,
        });

        let d1 = new Swiper('#ranD1', {
            autoplay: 2000,//可选选项，自动滑动
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            observer: true,
            nextButton: '.swiper-button-nextD',
            prevButton: '.swiper-button-prevD',
        });


        //1s监控一次轮播图结构是否更新
        let step=0;
        let rankingAll=document.getElementById('rankingAll');
        rankingAll.timer = setInterval(function () {
             step++;
             //如果怕浏览器因定时器崩溃，可以设置一定时间停止定时器，影响到的是：ranking模块的第一个模块选项卡切换后不能hover只能点击了
             if(step>=3600){
                // clearInterval(rankingAll.timer);
             }
         //此方法为模拟的，hover到分页器的小圆点后自动触发其本身的click事件
         $(".swiper-pagination-bullet").hover(function () {
         $(this).click(); //鼠标划上去之后，自动触发点击事件来模仿鼠标划上去的事件
         }, function () {
         a1.startAutoplay(); //鼠标移出之后，自动轮播开启
         a2.startAutoplay();
         a3.startAutoplay();
         a4.startAutoplay();
         a5.startAutoplay();
         b1.startAutoplay();
         c1.startAutoplay();
         d1.startAutoplay();
         });
         }, 1000)
    });
})();

//ajax传参
(function () {
    let a = [
        {name: 'ranA1', value: 'json/a1.json'},
        {name: 'ranA2', value: 'json/a2.json'},
        {name: 'ranA3', value: 'json/a3.json'},
        {name: 'ranA4', value: 'json/a4.json'},
        {name: 'ranA5', value: 'json/a5.json'},
        {name: 'ranB1', value: 'json/b.json'},
        {name: 'ranC1', value: 'json/c.json'},
        {name: 'ranD1', value: 'json/d.json'},
        {name: 'ranking5', value: 'json/e.json'},
        {name: 'ranking6', value: 'json/f.json'},
    ];
    a.forEach(item => {
        let {name, value} = item;
        new Ajax(name, value)
    })
})();
