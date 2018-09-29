/**
 * Created by shegxy on 2018/9/1.
 */
var utils = (function(){
    /*win:浏览器盒子模型属性*/
    function win(attr,value){
        if(value==undefined){
            return document.documentElement[attr] || document.body[attr];
        }else{
            document.documentElement[attr]=value;
            document.body[attr]=value;
        }

    }
    // utils.win('clientWidth');


    /*offset：求当前元素距离body的偏移量*/
    function offset(ele){
        let l=ele.offsetLeft;
        let t=ele.offsetTop;
        let parent = ele.offsetParent;
        while(parent){   //while循环，直到parent为null时进不来【当parent上一次循环为body时，下一次为null】
            l+=parent.clientLeft+parent.offsetLeft;
            t+=parent.clientTop+parent.offsetTop;
            parent=parent.offsetParent;
        }
        return {left:l,top:t};
    }
    // utils.offset(box).top;

/*类数组转数组*/
function toArray(likeAry){
    try{
        return [].slice.call(likeAry);
    }catch(e){
        var ary=[];
        for (var i = 0; i < likeAry.length; i++) {
            ary.push(likeAry[i])
        }
        return ary;
    }
}


/*getCss:获取某元素上的样式属性*/
function getCss(ele,attr){
    var value = window.getComputedStyle(ele)[attr];
    //获取到的value是一个字符串，需要转数字
    //需要拿到这个值进行计算，带有单位的值需要去掉单位 '12px' 'red' '13' opacity'0.5'
    var reg = /^-?(\d|[1-9]\d+)(\.\d+)?(px|pt|em|rem)?$/i;
    if(reg.test(value)){
        value=parseFloat(value);
    }
    return value ;
}

/*setCss :给元素设置样式*/
function setCss(ele,attr,value){
    //需要给能够添加像素单位的属性名进行过滤
    var reg = /^(width|height|fontSize|(margin|padding)|(margin|padding)?(left|right|top|bottom))$/i;
    if(reg.test(attr)){
        /px/.test(value.toString())?null:value+='px';
    }
    ele.style[attr]=value

}

/*批量给元素设置样式 setGroupCss*/
function setGroupCss(ele,obj={}){
    // obj instanceof ObjectObject.prototype.toString.call(obj)
    if(obj instanceof Object){
        for(var key in obj){
            //for in 循环是循环对象上的可枚举属性，包括对象的私有属性和自定义给对象设置的公有属性，天生自带公有属性不包括
            if(obj.hasOwnProperty(key)){ //判断obj的值是否是私有的
                setCss(ele,key,obj[key]);
            }
        }
    }
}


/*css把三个属性合成到一起调用*/
function css(...arg){
    if(arg.length === 3){
        setCss(...arg)
    }else if(arg.length === 2){
        if(Object.prototype.toString.call(arg[1]) ==='[object Object]'){
            setGroupCss(...arg);
        }else{
            return getCss(...arg);
        }
    }
}




    return {
        win,
        offset,
        toArray,
        getCss,
        setCss,
        setGroupCss,
        css,
    }
})();