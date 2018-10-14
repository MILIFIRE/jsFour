let side = document.getElementsByClassName('side')[0];
let lis = document.getElementsByClassName('side_list_con');
let dis = document.getElementsByClassName('cate');
let winH = document.documentElement.clientHeight||document.body.clientHeight;
let sideT = null;
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
                sideT = side.offsetTop;
                if (winS>=sideT){
                    dis[this.index].style.top = winS - side.offsetTop + 'px';
                }
            };
            let winS = document.documentElement.scrollTop||document.body.scrollTop;
            sideT = side.offsetTop;
            if (winS<sideT){
                dis[this.index].style.top = '0';
            }else if (winS>=sideT) {
                dis[this.index].style.top = winS - side.offsetTop + 'px';
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


