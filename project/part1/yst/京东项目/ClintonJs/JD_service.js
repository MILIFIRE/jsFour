var ser_ul = document.getElementsByClassName('JD_ser_ent_ul')[0],
    ser = document.getElementsByClassName('ser_tit'),
    ser_con = document.getElementById('inner_tit'),
    fontClr = document.getElementsByClassName('JD_ser_ent_ul_lis_lk_con'),
    service = document.getElementsByClassName('JD_com'),
    ser_off = document.getElementsByClassName('close'),
    telUl = document.getElementsByClassName('tel_tit_ul')[0],
    telLis = document.getElementsByClassName('tel_tit_lis'),
    telLk = document.getElementsByClassName('tel_lk'),
    jdTel = document.getElementsByClassName('JD_tel_com');
var planeUl = document.getElementsByClassName('plane_tit_ul')[0],
    planeLis = document.getElementsByClassName('plane_tit_lis'),
    planeLk = document.getElementsByClassName('plane_lk'),
    jdPlane = document.getElementsByClassName('JD_plane_con_ul')[0];
var hotelUl = document.getElementsByClassName('hotel_tit_ul')[0],
    hotelLis = document.getElementsByClassName('hotel_tit_lis'),
    hotelLk = document.getElementsByClassName('hotel_lk'),
    jdHotel = document.getElementsByClassName('JD_hotel_con_ul')[0];
var gameUl = document.getElementsByClassName('game_tit_ul')[0],
    gameLis = document.getElementsByClassName('game_tit_lis'),
    gameLk = document.getElementsByClassName('game_lk'),
    jdGame = document.getElementsByClassName('game_con_ul')[0];

function changeTab() {
    for (var i = 0; i < ser.length; i++) {
        ser[i].index = i;
        ser[i].onmouseenter = ser_fn;
    }
}
function ser_fn() {
    for (var j = 0; j < ser.length; j++) {
        fontClr[j].style.color = '#666';
        service[j].classList.remove('JD_com_active');
        ser[j].classList.add('ser_tit_com');
        fontClr[j].style.borderBottomColor = '#fff';
    }
    fontClr[this.index].style.color = '#c81623';
    fontClr[this.index].style.borderBottomColor = '#e01121';
    service[this.index].classList.add('JD_com_active');
    ser_con.style.top = '205px';
    ser_con.style.bottom = '';
}
changeTab();

for (var i = 0; i < ser_off.length; i++) {
    ser_off[i].index = i;
    ser_off[i].onclick = function () {
        fontClr[this.index].style.color = '#666';
        [...ser].forEach((item)=>{
            item.classList.remove('ser_tit_com');
            item.onmouseenter = null;
            setTimeout(()=>{
                item.onmouseenter = ser_fn;
            },250);
        });
        ser_con.style.top = '';
    }
}

function changeTel(index) {
    for (var i = 0; i < telLis.length; i++) {
        telLk[i].classList.remove('telColor');
        jdTel[i].classList.remove('JD_tel_tm_active');
    }
    telLk[index].classList.add('telColor');
    jdTel[index].classList.add('JD_tel_tm_active');
}

function selectTel() {
    telUl.addEventListener("mouseenter",function(){
        for(var i=0;i<telLis.length;i++){
            telLis[i].index=i;
            telLis[i].addEventListener('mouseenter',function(){
                changeTel(this.index);
            });
        }
    },true);
}
selectTel();

function changeSer(eleLis,eleLk,elejd,index) {
    for (var i = 0; i < eleLis.length; i++) {
        eleLk[i].classList.remove('telColor');
    }
    eleLk[index].classList.add('telColor');
    elejd.style.marginLeft = -190 * index + 'px';
}
function selectSer(eleUl,eleLis,eleLk,elejd) {
    eleUl.addEventListener("mouseenter",function(){
        for(var i=0;i<eleLis.length;i++){
            eleLis[i].index=i;
            eleLis[i].addEventListener('mouseenter',function(){
                changeSer(eleLis,eleLk,elejd,this.index);
            });
        }
    },true);
}
selectSer(planeUl,planeLis,planeLk,jdPlane);
selectSer(hotelUl,hotelLis,hotelLk,jdHotel);
selectSer(gameUl,gameLis,gameLk,jdGame);

