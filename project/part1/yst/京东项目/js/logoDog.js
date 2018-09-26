let logoimg=document.getElementsByClassName('logoimg')[0],
    shangceng=document.getElementsByClassName('shang')[0],
    xiaceng=logoimg.getElementsByClassName('xia')[0];
logoimg.onmouseenter=function () {
    shangceng.style.display='none'
    xiaceng.style.display='block'
}
logoimg.onmouseleave=function () {
    shangceng.style.display='block'
    xiaceng.style.display='none'
}
