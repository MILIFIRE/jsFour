let hour=document.getElementsByClassName('time')[0],
    assign=document.getElementsByClassName('assign')[0],
    sec=document.getElementsByClassName('sec')[0];

(function(){
    time=new Date('2018-09-28 00:00:00')-new Date();
    day=Math.floor(time/(1000*60*60*24));
    hours=Math.floor(time/(1000*60*60));
    minute=Math.floor(time/(1000*60));
    seconds=Math.floor(time/1000);
    hour.innerHTML=`${hours}`
    assign.innerHTML=`${minute-hours*60}`
    sec.innerHTML=`${seconds-minute*60}`
})()
timer = setInterval(function(){
    time=new Date('2018-09-28 00:00:00')-new Date();
    day=Math.floor(time/(1000*60*60*24));
    hours=Math.floor(time/(1000*60*60));
    minute=Math.floor(time/(1000*60));
    seconds=Math.floor(time/1000);
    hour.innerHTML=`${hours}`
    assign.innerHTML=`${minute-hours*60}`
    sec.innerHTML=`${seconds-minute*60}`
},1000);