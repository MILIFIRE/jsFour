let input=document.getElementsByTagName('input')[0],
    form=document.getElementsByTagName('form')[0];
    data=null;
function ajax() {
    let xhr=new XMLHttpRequest();
    xhr.open('get','../json/input.json',false)
    xhr.onreadystatechange=function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            data=JSON.parse(xhr.responseText)
        }
    }
    xhr.send()
}
ajax();
function bindHtml() {
    for (let i = 0; i < data.length; i++) {
   form.innerHTML+=`<input type="text" placeholder="${data[i].src}">`
    }
}




