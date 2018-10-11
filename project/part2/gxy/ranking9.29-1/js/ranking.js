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
        /*let fnOnInit = function (swiper) {
            let nodeList = swiper.bullets;
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].onmouseenter = function (e) {
                    $(e.target).click()
                };
                nodeList[i].onmouseleave = function (e) {
                    this.startAutoplay();
                }.bind(swiper)
            }
        };*/

        let a1 = new Swiper('#ranA1', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // onInit: fnOnInit,
        });

        let a2 = new Swiper('#ranA2', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // onInit: fnOnInit,


        });

        let a3 = new Swiper('#ranA3', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // onInit: fnOnInit,
        });

        let a4 = new Swiper('#ranA4', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // onInit: fnOnInit,
        });

        let a5 = new Swiper('#ranA5', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            // onInit: fnOnInit,
        });


        let b1 = new Swiper('#ranB1', {
            autoplay: 2000,//可选选项，自动滑动
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            observer: true,
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-nextB',
            prevButton: '.swiper-button-prevB',
            // lazyLoading : true,
            // onInit: fnOnInit,
        });

        let c1 = new Swiper('#ranC1', {
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            observer: true,
            // onInit: fnOnInit,
        });

        let d1 = new Swiper('#ranD1', {
            autoplay: 2000,//可选选项，自动滑动
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            observer: true,
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-nextD',
            prevButton: '.swiper-button-prevD',
            // onInit: fnOnInit,
        });


        //1s监控一次轮播图结构是否更新
        let step=0;
        let rankingAll=document.getElementById('rankingAll');
        rankingAll.timer = setInterval(function () {
             step++;
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
