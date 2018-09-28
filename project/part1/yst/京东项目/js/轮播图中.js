let wdt = document.getElementsByClassName('wdt'),
    data = null;
wdt = [].slice.call(wdt);

function ajax() {
    let xhr = new XMLHttpRequest();
    xhr.open('get', '../json/kill-center.json', false);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
            data = JSON.parse(xhr.responseText)

        }
    };
    xhr.send();
    // console.log(data);
}
ajax();
function bindHtm() {
    data = data.map(x => {
        return`<a href="##" class="nobo">
                <img src="${x.src}" alt="">
                <p>${x.hh}</p>
                <div class="price clearfix">
                <span class="left">￥${x.price}</span>
            <span class="right">￥<del>${x.del}</del></span>
            </div>
            </a>
                `
    })
    wdt.forEach((x,i)=>{
        x.innerHTML = data.slice(i*4,(i+1)*4).join('');
        console.log('data.slice:',data.slice(i*4,(i+1)*4))
    });
}
bindHtm();









