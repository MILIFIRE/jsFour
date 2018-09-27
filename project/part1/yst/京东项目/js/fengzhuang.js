var fengzhuang=(
   // 轮播图右侧选项卡
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
    };
    //最顶部广告消失
        function chanone() {
            let cha=document.getElementById('cha'),
            add=document.getElementById('top-ad');
            cha.onclick=function () {
                add.style.display='none'
            }
        }




    return{
        init:function () {
            kaDj();
            chanone()
        }
    }

    }
    )()








