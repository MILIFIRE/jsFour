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

