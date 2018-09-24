/**
 * Created by shegxy on 2018/9/23.
 */
function Ajax(ele,url) {
    //获取元素
    this.outer = document.getElementById(ele);
    this.swiper=this.outer.getElementsByClassName('swiper')[0];
    this.focus=this.outer.getElementsByClassName('focus')[0];
    this.data = null;
    this.init(url);
}

Ajax.prototype={
    constructor:Ajax,

    init:function (url) {
        this.ajax(url);
    },


    //获取数据
    ajax:function ajax(url) {
        let xhr=new XMLHttpRequest();
        xhr.open('get',url,false);
        xhr.onreadystatechange= ()=> {
            if(xhr.readyState===4 && /^2\d{2}$/.test(xhr.status)){
                this.data=JSON.parse(xhr.responseText);
                console.log(this.data);
                this.bindHtml();
            }
        };
        xhr.send();
    },

//绑定数据
    bindHtml:function bindHtml(){
        let str1=``,str2=``;
        let str3=`<div class="slider-navigator">
                    <ul class=" focus">
                        <li class="selected"></li>
                        <li></li>
                    </ul>
                </div>
                <a class="slider-btn-left left"></a>
                <a class="slider-btn-right right"></a>`;
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
        this.swiper.innerHTML=`<ul class="slider-content page clearfix">${str1}</ul><ul class="slider-content page clearfix">${str2}</ul>`;
        this.outer.innerHTML+=str3;
    },
};
