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
        function fnOnInit(swiper) {
            // console.log(swiper);
            swiper.container[0].onmouseenter = (function () {
                let nodeList = this.bullets;
                for (let i = 0; i < nodeList.length; i++) {
                    nodeList[i].onmouseenter = function (e) {
                        $(e.target).click()
                    };
                    nodeList[i].onmouseleave = function (e) {
                        this.startAutoplay();
                    }.bind(this)
                }
            }).bind(swiper)
        }

        let a1 = new Swiper('#ranA1', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            lazyLoading : true,
            onInit: fnOnInit,

        });

        let a2 = new Swiper('#ranA2', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            lazyLoading : true,
            onInit: fnOnInit,


        });

        let a3 = new Swiper('#ranA3', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            lazyLoading : true,
            onInit: fnOnInit,
        });

        let a4 = new Swiper('#ranA4', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            lazyLoading : true,
            onInit: fnOnInit,
        });

        let a5 = new Swiper('#ranA5', {
            loop: true,
            observer: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            lazyLoading : true,
            onInit: fnOnInit,
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
            lazyLoading : true,
            onInit: fnOnInit,
        });

        let c1 = new Swiper('#ranC1', {
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            observer: true,
            lazyLoading : true,
            onInit: fnOnInit,
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
            lazyLoading : true,
            onInit: fnOnInit,
        });
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
