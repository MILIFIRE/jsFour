/**
 * Created by shegxy on 2018/9/23.
 */
function Ajax(ele,url) {
    //获取元素
    this.outer = document.getElementById(ele);
    this.swiper=this.outer.getElementsByClassName('swiper')[0];
    // this.focus=this.outer.getElementsByClassName('focus')[0];
    this.imgs = this.swiper.getElementsByTagName('img');
    this.data = null;
    this.winH = utils.win('clientHeight');
    this.ranT=utils.offset.top;
    this.init(url);
}

Ajax.prototype={
    constructor:Ajax,
    init:function (url) {
        this.ajax(url);
        // this.lazy();
        window.onscroll = ()=>{
            let winT = utils.win('scrollTop');
            if(this.winH+winT>=this.ranT){
                this.ajax();
            }
            // this.lazy()
        };
        // console.log(this.imgs);
    },


    //获取数据
    ajax:function ajax(url) {
        let xhr=new XMLHttpRequest();
        xhr.open('get',url,false);
        xhr.onreadystatechange= ()=> {
            if(xhr.readyState===4 && /^2\d{2}$/.test(xhr.status)){
                this.data=JSON.parse(xhr.responseText);
                // console.log(this.data);
                this.bindHtml();
            }
        };
        xhr.send();
    },

//绑定数据
    bindHtml:function bindHtml(){
        let str1=``,str2=``;
        // console.log(this.data.products);
        for (let i = 0; i < this.data.products.length; i++) {
            let cur = this.data.products[i];
            // ${cur.imgPath}  图片出错
            ////img13.360buyimg.com/mobilecms/s160x160_jfs/t1/3607/34/6953/310618/5ba44748E39233416/b0170ca7e9b817a4.jpg!q90.webp
            if(i<3){
                str1+=` <li class="clearfix">
                            <div class="proImg"><img src="img/Pro1.webp" alt=""></div>
                            <div class="num">${i+1}</div>
                            <a href="javascript:;"><p class="text">${cur.wareName}</p></a>
                        </li>`
            }else if(i>=3 && i<6){
                str2+=` <li class="clearfix">
                            <div class="proImg"><img src="img/Pro1.webp" alt=""></div>
                            <div class="num">${i+1}</div>
                            <a href="javascript:;"><p class="text">${cur.wareName}</p></a>
                        </li>`
            }
        }
        this.swiper.innerHTML=`<ul class="swiper-slide page clearfix">${str1}</ul><ul class="swiper-slide page clearfix">${str2}</ul>`;
    },

    lazy:function lazy(){
    for (let i=0;i<this.imgs.length;i++){
        this.lazyImg(this.imgs[i])
    }
},


    lazyImg:function lazyImg(ele){
    if(ele.load)return;
        // 创建一个新的图片
        let newImg = new Image;
        // 获取行内样式中的data-src上的真实图片
        let url = ele.getAttribute('data-src');
        //获取到赋值给新图片的src属性
        newImg.src = url;
        // 尝试让newImg加载，如果加载成功，把这个地址还给真实img图片
        newImg.onload = function () {
            ele.src = this.src;
            newImg=null;
            ele.load = true;// 给图片一个自定义属性，下次再碰到这张图片的时候，直接不要再继续加载了、
            // this.fadeIn(ele)
            // ele.style.opacity=1
            (function () {
                let opacity = utils.css(ele,'opacity');
                // 设置定时器让图片逐渐显示
                ele.timer = setInterval(()=>{
                    // console.log(opacity)
                    opacity=Number(opacity)+0.04;
                    // 透明度加完之后还给ele图片标签
                    utils.css(ele,'opacity',opacity)
                    // 当图片透明度大于等于1的时候让定时器停止
                    if(opacity>=1){
                        clearInterval(ele.timer);
                        utils.css(ele,'opacity',1);
                    }
                },13)
            })()
        }
},
};
