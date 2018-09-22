    /* 
    ele 轮播图根元素
        box 轮播图内容集合
        content 单个轮播图
    navigator 小点点 导航
    navigatorDirection vertical 垂直 horizontal 水平
    left 左按钮
    right 右按钮
    motion left 左右 top 上下  opacity  渐隐渐显
    speed 速度 默认10；
    auto 是否自动滚动 布尔值
    */
class slider {
    constructor(ele, obj) {
        this.ele = document.querySelector(ele);
        let  normal = {
            box:'.slider-box',
            content:'.slider-content',
            // navigator:'.slider-navigator',
            // navigatorDirection:'horizontal',
            // left:'.slider-btn-left',
            // right:'.slider-btn-right',
            motion:'left',
            speed:1,
            auto:true,

        };
        Object.assign(normal,obj);
        Object.entries(normal).forEach(x => this[x[0]] = /[\.#]/.test(x[1]) ? document.querySelector(x[1]) : x[1]);
        this.contentStyle = window.getComputedStyle(this.content);
        this.contentLength = this.box.children.length;
        this.step = 0;
        this.maxStep = this.contentLength;
        this.flag = true;
        // this.direction = 0;
        this.init();
    }
    init(){
        switch(this.motion){
            case 'left':
                this.box.style.width=this.content.offsetWidth*(this.maxStep+1)+'px' 
                this.box.appendChild(this.content.cloneNode(true));
                this.box.style.left='0px';
                this.box.style.transition = `${this.motion} ${this.speed}s linear`
                break
            case 'top':
                this.box.style.height=this.content.offsetHeight*(this.maxStep+1)+'px' 
                this.box.appendChild(this.content.cloneNode(true));
                this.box.style.top='0px'
                this.box.style.transition = `${this.motion} ${this.speed}s linear`
                break
            case 'opacity':
                this.box.style.transition = `${this.motion} ${this.speed}s linear`
                break
            default:
                console.log('请正确设置动画属性，left 左右移动，top 上下移动，opacity 渐隐渐显')
        }
        // if(this.auto)this.auto();
    }
    animat() {
         this.timer = setInterval(()=>{
            if(this.motion=='opacity'){

            }else{
                // let  
                this.box.style[this.motion]=parseFloat(this.box.style[this.motion])+this.direction*this.speed+'px';
                console.log('left:',this.box.style[this.motion])
                let postion = Math.abs(parseFloat(this.box.style[this.motion])+this.content[this.motion=='left'?'offsetWidth':'offsetHeight']*this.step);
                console.log('目标值',this.content[this.motion=='left'?'offsetWidth':'offsetHeight']*this.step)
                console.log('position:',postion)
                if (postion<this.speed){
                    clearInterval(this.timer);
                    this.box.style[this.motion]=-1*this.content[this.motion=='left'?'offsetWidth':'offsetHeight']*this.step+'px';
                    this.direction=0;
                }
            }
            },17);
    }
    move() {
        this.step++;
        this.animat();
        
    }
    button(){

    }
    focuse() {

    }
    auto() {

    }

}