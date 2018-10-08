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

