let city=document.getElementById('city'),
    china=document.getElementById('address-location-left-city-china'),
    aS=china.getElementsByTagName('a'),
    block=document.getElementById('block');
for (let i=0;i<aS.length;i++){
    aS[i].onclick=function () {
        click.call(this);
        this.classList.add('click');
        city.innerHTML=this.innerHTML
    };
}
function click() {
    for (var k = 0; k < aS.length; k++) {
        if (this !== aS[k]) {
            aS[k].classList.remove('click')
        }
    }
}


