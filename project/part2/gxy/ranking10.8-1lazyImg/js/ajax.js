/**
 * Created by shegxy on 2018/9/23.
 */
function Ajax(ele,url) {
    //获取元素
    if(ele==='ranking5' ||ele==='ranking6'){
        this.outer = document.getElementById(ele);
        this.noSlide=this.outer.getElementsByClassName('noSlide')[0];
    }else if(ele==='ranA1' || ele==='ranA2' ||ele==='ranA3'||ele==='ranA4'||ele==='ranA5'){
        this.outer = document.getElementById(ele);
        this.ranking1=this.outer.parentNode;
        this.ran1Tab=this.ranking1.getElementsByClassName('ran1Tab')[0];
        this.ran1Tabs=this.ran1Tab.getElementsByTagName('li');
        this.swiper=this.outer.getElementsByClassName('swiper')[0];
    }else if(ele==='ranB1' || ele==='ranC1' ||ele==='ranD1'){
        this.outer = document.getElementById(ele);
        this.swiper=this.outer.getElementsByClassName('swiper')[0];
    }
    this.data = null;
    this.winH = utils.win('clientHeight');
    this.ranT=utils.offset.top;
    this.init(ele,url);
}

Ajax.prototype={
    constructor:Ajax,
    init:function (ele,url) {
        this.ajax(ele,url);
    },

    //获取数据
    ajax:function ajax(ele,url) {
        let xhr=new XMLHttpRequest();
        xhr.open('get',url,false);
        xhr.onreadystatechange= ()=> {
            if(xhr.readyState===4 && /^2\d{2}$/.test(xhr.status)){
                this.data=JSON.parse(xhr.responseText);
                switch (url){
                    case 'json/a1.json':
                        this.bindHtmlA(ele,url);
                        break;
                    case 'json/a2.json':
                        this.bindHtmlA(ele,url);
                        break;
                    case 'json/a3.json':
                        this.bindHtmlA(ele,url);
                        break;
                    case 'json/a4.json':
                        this.bindHtmlA(ele,url);
                        break;
                    case 'json/a5.json':
                        this.bindHtmlA(ele,url);
                        break;
                    case 'json/b.json':
                        this.bindHtmlB(ele,url);
                        break;
                    case 'json/c.json':
                        this.bindHtmlC(ele,url);
                        break;
                    case 'json/d.json':
                        this.bindHtmlD(ele,url);
                        break;
                    case 'json/e.json':
                        this.bindHtmlE(ele,url);
                        break;
                    case 'json/f.json':
                        this.bindHtmlF(ele,url);
                        break;
                }
            }
        };
        xhr.send();
    },

//绑定数据
    bindHtmlA:function bindHtmlA(ele,url){
        let index = ele.charAt(4);
        this.ran1Tabs[index-1].innerHTML=this.data.resCname;
        let stra1=``,stra2=``;
        for (let i = 0; i < this.data.products.length; i++) {
            let cur = this.data.products[i];
            if(i<3){
                stra1+=` <li class="clearfix">
           <div class="proImg"><img data-src="${cur.imgPath}" alt="" class="swiper-lazy"></div>
           <div class="num">${i+1}</div>
           <a href="javascript:;"><p class="text">${cur.wareName}</p></a>
           </li>`
            }else if(i>=3 && i<6){
                stra2+=` <li class="clearfix">
           <div class="proImg"><img data-src="${cur.imgPath}" alt="" class="swiper-lazy"></div>
           <div class="num">${i+1}</div>
           <a href="javascript:;"><p class="text">${cur.wareName}</p></a>
           </li>`
            }
        }
        this.swiper.innerHTML=`<ul class="swiper-slide page clearfix">${stra1}</ul><ul class="swiper-slide page clearfix">${stra2}</ul>`;
    },

    bindHtmlB:function bindHtmlB(ele,url){
        let strb1=``;
        for (let i = 0; i < this.data.data.ctn.length; i++) {
            let cur = this.data.data.ctn[i];
            strb1+=`<div class="swiper-slide slider-content page clearfix">
                        <a href="javascript:;">
                            <div class="bigImg">
                                <img data-src="${cur.img}" alt="" class="swiper-lazy">
                            </div>
                            <ul class="smallImg3 clearfix">
                                <li><img data-src="${cur.list[0]}" alt="" class="swiper-lazy"></li>
                                <li><img data-src="${cur.list[1]}" alt="" class="swiper-lazy"></li>
                                <li><img data-src="${cur.list[2]}" alt="" class="swiper-lazy"></li>
                            </ul>
                            <h3 class="tag">${cur.title}</h3>
                            <p class="text">${cur.subTitle}</p>
                        </a>
                    </div>`;
            this.swiper.innerHTML=`${strb1}`;
        }
    },

    bindHtmlC:function bindHtmlC(ele,url){
        let strc1=``,strc2=``;
        for (let i = 0; i < this.data.data.coupon.list.length; i++) {
            let cur = this.data.data.coupon.list[i];
            if(i<3){
                strc1+=` <li class="page-content">
                            <a href="javascript:;">
                                <div class="dot dot1"></div>
                                <div class="dot dot2"></div>
                                <div class="n-left"><img data-src="${cur.imgUrl}" alt="" class="swiper-lazy"></div>
                                <div class="n-mid">
                                    <h3 class="nn-top"><i>￥</i><span>${cur.value}</span></h3>
                                    <span class="nn-mid">${cur.limit}</span>
                                    <p class="nn-bot">${cur.desc}</p>
                                </div>
                                <div class="n-right">
                                    <div>${cur.entry}</div>
                                </div>
                            </a>
                        </li>`
            }else if(i>=3 && i<6){
                // img/pro3-1.webp
                strc2+=` <li class="page-content">
                            <a href="javascript:;">
                                <div class="dot dot1"></div>
                                <div class="dot dot2"></div>
                                <div class="n-left"><img data-src="${cur.imgUrl}" alt="" class="swiper-lazy"></div>
                                <div class="n-mid">
                                    <h3 class="nn-top"><i>￥</i><span>${cur.value}</span></h3>
                                    <span class="nn-mid">${cur.limit}</span>
                                    <p class="nn-bot">${cur.desc}</p>
                                </div>
                                <div class="n-right">
                                    <div>${cur.entry}</div>
                                </div>
                            </a>
                        </li>`
            }
        }
        this.swiper.innerHTML=`<ul class="swiper-slide page clearfix">${strc1}</ul><ul class="swiper-slide page clearfix">${strc2}</ul>`;
    },

    bindHtmlD:function bindHtmlD(ele,url){
        let strd1=``;
        for (let i = 0; i < this.data.data.list.length; i++) {
            let cur = this.data.data.list[i];
            strd1+=` <div class="swiper-slide slider-content page clearfix">
                        <a href="javascript:;">
                            <div class="bigImg">
                                <img data-src="${cur.img}" alt="" class="swiper-lazy">
                            </div>
                            <h3 class="tag">${cur.t}</h3>
                            <p class="text">${cur.desc}</p>
                        </a>
                    </div>`;
            this.swiper.innerHTML=`${strd1}`;
        }
    },

    bindHtmlE:function bindHtmlE(ele,url){
        // img/pro5-1.webp
        let stre1=``;
        for (let i = 0; i < this.data.list.length; i++) {
            let cur = this.data.list[i];
            stre1+=`<li>
                        <div><img src="${cur.goodsPic}" alt=""></div>
                        <h3>${cur.recommendTheme}</h3>
                        <p>${cur.recommendReason}</p>
                    </li>`;
            this.noSlide.innerHTML=`${stre1}`;
        }
    },

    bindHtmlF:function bindHtmlF(ele,url){
        // img/pro6-1.webp
        let strf1=``;
        // for (let i = 0; i < this.data.data.ctn.length; i++) {
            let cur = this.data.data.ctn;
            strf1+=`<a href="javascript:;">
                    <div class="bigImg">
                        <img src="${cur.cover.img}" alt="">
                    </div>
                    <ul class="smallImg3 clearfix">
                        <li><img src="${cur.items[0].img}" alt=""></li>
                        <li><img src="${cur.items[1].img}" alt=""></li>
                        <li><img src="${cur.items[2].img}" alt=""></li>
                    </ul>
                </a>`;
        // }
        this.noSlide.innerHTML=`${strf1}`;
    },
};
