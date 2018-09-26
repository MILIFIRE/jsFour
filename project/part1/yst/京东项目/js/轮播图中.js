
    let wdt=document.getElementsByClassName('wdt');
        let aSSS=document.getElementsByClassName('nobo'),
        data=null;
    function ajax() {
        let xhr=new XMLHttpRequest();
        xhr.open('get','../json/kill-center.json',false)
        xhr.onreadystatechange=function () {
            if (xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)) {
                data=JSON.parse(xhr.responseText)

            }
        }
        xhr.send()
        console.log(data);
    }
    ajax()
    function bindHtml() {
        for (let i = 0; i < aSSS.length; i++) {
            wdt.innerHTML+=`
             <a href="##" class="nobo">
                        <img src="${data[i].src}" alt="">
                        <p>${data[i].hh}</p>
                        <div class="price clearfix">
                            <span class="left">￥${data[i].price}</span>
                            <span class="right">￥<del>${data[i].del}</del></span>
                        </div>
                    </a>
                    
            `
        }
    }
    bindHtml()









