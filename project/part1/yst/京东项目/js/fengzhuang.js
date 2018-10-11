var fengzhuang=(
    function () {
        // 大轮播图右侧选项卡
        function kaDj() {
            let ka=document.getElementById('center'),
                Ul=document.getElementsByClassName('nav')[0],
                lis=Ul.getElementsByTagName('li'),
                divs=ka.getElementsByTagName('div');
            for (var i = 0; i < lis.length; i++) {
                let index=i;
                lis[i].onmouseenter=function () {
                    for (var k = 0; k < lis.length; k++) {
                        lis[k].className='';
                        divs[k].className=''
                    }
                    this.className='over';
                    divs[index].className='over'
                }
            }
        }
        //最顶部广告消失
        function chanone() {
            let cha=document.getElementById('cha'),
                add=document.getElementById('top-ad');
            cha.onclick=function () {
                add.style.display='none'
            }
        }

        //秒杀倒计时
        function secondKillLeft() {
            let hour=document.getElementsByClassName('time')[0],
                assign=document.getElementsByClassName('assign')[0],
                sec=document.getElementsByClassName('sec')[0],
                autoTime=null,
                _serverTime=null;
            let queryTime=function queryTime() {
                if (_serverTime) {
                    _serverTime=new Date(_serverTime.getTime()+1000);
                    return _serverTime
                }
                return new Promise(resolve=>{
                    let xhr=new XMLHttpRequest(),
                        serverTime=null;
                    xhr.open('HEAD','logoDog.js',true);
                    xhr.onreadystatechange=()=>{
                        if (xhr.readyState === 2) {
                            serverTime=new Date(xhr.getResponseHeader('date'));
                            _serverTime=serverTime;
                            resolve(serverTime)
                        }
                    };
                    xhr.send(null);
                })
            };
            let computedTime=function computedTime() {
                let promise=queryTime();
                promise instanceof Promise ? promise.then(fn):fn(promise);
                function fn(serverTime) {
                    let nowTime=serverTime,
                        tarTime=new Date('2018/10/15 00:00:00'),
                        diffTime=tarTime-nowTime;
                    if (diffTime >= 0) {
                        let hours=Math.floor(diffTime/(1000*60*60));
                        diffTime=diffTime-hours*3600000;
                        let minutes=Math.floor(diffTime/(1000*60));
                        diffTime=diffTime-minutes*60000;
                        let seconds=Math.floor(diffTime/1000);
                        hours<10?hours='0'+hours:null;
                        minutes<10?minutes='0'+minutes:null;
                        seconds<10?seconds='0'+seconds:null;
                        hour.innerHTML=`${hours}`;
                       assign.innerHTML=`${minutes}`;
                       sec.innerHTML=`${seconds}`;
                        return
                    }
                    hour.innerHTML='- -';
                    assign.innerHTML='- -';
                    sec.innerHTML='- -';
                    clearInterval(autoTime)
                }
            };
            computedTime();
            autoTime=setInterval(computedTime,1000);
        }
        //地址定位
        function add() {
            let city=document.getElementById('city'),
                china=document.getElementById('address-location-left-city-china'),
                aS=china.getElementsByTagName('a'),
                block=document.getElementById('block');
            for (let i=0;i<aS.length;i++){
                aS[i].index=i;
                aS[i].onclick=function () {
                    aS[aS[i].index].addEventListener('mouseenter',fn1,false)
                    clear();
                    this.classList.add('click');
                    city.innerHTML=this.innerHTML;
                };
            }
            function clear() {
                for (let k = 0; k < aS.length; k++) {
                    aS[k].classList.remove('click')
                }
            }
            function fn1() {
                this;
                if (this.className) {
                    this.style.color='white';
                    this.style.background='#f10215'
                }
                fn2.call(this)
            }
            function fn2() {
                if (!this.className) {
                    this.style.color='';
                    this.style.background=''
                }
            }
        }

        //秒杀中间部分
        function secondKillCenter() {
            let wdt = document.getElementsByClassName('wdt'),
                data = null;
            wdt = [].slice.call(wdt);

            function ajax() {
                let xhr = new XMLHttpRequest();
                xhr.open('get', '../json/kill-center.json', false);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
                        data = JSON.parse(xhr.responseText)

                    }
                };
                xhr.send();
                // console.log(data);
            }
            ajax();
            function bindHtm() {
                data = data.map(x => {
                    return`<a href="##" class="nobo">
                <img src="${x.src}" alt="">
                <p>${x.hh}</p>
                <div class="price clearfix">
                <span class="left">￥${x.price}</span>
            <span class="right">￥<del>${x.del}</del></span>
            </div>
            </a>
                `
                })
                wdt.forEach((x,i)=>{
                    x.innerHTML = data.slice(i*4,(i+1)*4).join('');

                });
            }
            bindHtm();
        }

        //京东狗
        function jdDog() {
            let logoimg=document.getElementsByClassName('logoimg')[0],
                shangceng=document.getElementsByClassName('shang')[0],
                xiaceng=logoimg.getElementsByClassName('xia')[0];
            logoimg.onmouseenter=function () {
                shangceng.style.display='none'
                xiaceng.style.display='block'
            }
            logoimg.onmouseleave=function () {
                shangceng.style.display='block'
                xiaceng.style.display='none'
            }
        }

        //所有轮播图
        function allMovepictic() {
            //大轮播图
            var mySwiper = new Swiper ('#swiper1', {
                autoplay: 2000,
                speed:1000,
                direction: 'horizontal',
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination',

                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                effect : 'fade',
                fade: {
                    crossFade: true,
                },
                pagination : '.swiper-pagination',
                paginationClickable :true,
                simulateTouch : false,
            });
            var swiper1 = document.getElementById('swiper1');
            swiper1.onmouseenter = function () {
                mySwiper.stopAutoplay();
            };
            swiper1.onmouseleave = function () {
                mySwiper.startAutoplay();
            }
            //秒杀右轮播图
            var mySwiper2 = new Swiper ('#swiper2', {
                direction: 'horizontal',
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination',
                autoplay: 2000,
                speed:1000,
                paginationClickable :true,
                autoplayDisableOnInteraction:false,
                simulateTouch : false,
            })
//秒杀中轮播图
            var mySwiper3 = new Swiper ('#swiper3', {
                direction: 'horizontal',
                loop: true,
                // 如果需要前进后退按钮
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                simulateTouch : false,
                speed:1000,
            })
        }

        //侧边栏
        function binner() {
            let side = document.getElementsByClassName('side')[0];
            let lis = document.getElementsByClassName('side_list_con');
            let dis = document.getElementsByClassName('cate');
            let winH = document.documentElement.clientHeight||document.body.clientHeight;
            let lunbo = document.getElementById('lunbotu');
            let lunboT = null;
            /*console.log(dis);*/
            side.onmouseenter = function () {
                for (var i = 0; i <lis.length ; i++) {
                    lis[i].index = i;
                    lis[i].onmouseenter = function () {
                        for (var j = 0; j <lis.length ; j++) {
                            lis[j].classList.remove('bg');
                            dis[j].classList.remove('active');
                        }
                        this.classList.add('bg');
                        dis[this.index].classList.add('active');
                        window.onscroll =()=>{
                            let winS = document.documentElement.scrollTop||document.body.scrollTop;
                            lunboT = lunbo.offsetTop;
                            if (winS>=lunboT){
                                dis[this.index].style.top = winS - lunbo.offsetTop + 'px';
                            }
                        };
                        let winS = document.documentElement.scrollTop||document.body.scrollTop;
                        lunboT = lunbo.offsetTop;
                        let paT = parseInt(getComputedStyle(lunbo)['padding-top']);
                        if (winS<lunboT){
                            dis[this.index].style.top = '0';
                        }else if (winS>=lunboT) {
                            dis[this.index].style.top = winS - lunbo.offsetTop - paT + 'px';
                        }
                    };
                }
            };
            side.onmouseleave = function () {
                for (var i = 0; i <lis.length ; i++) {
                    lis[i].classList.remove('bg');
                    dis[i].classList.remove('active');
                }
            };



        }
        return{
            init:function () {
                kaDj();
                chanone();
                secondKillLeft();
                add();
                secondKillCenter();
                jdDog();
                allMovepictic();
                binner()
            }
        }
    }

    )();
fengzhuang.init()







