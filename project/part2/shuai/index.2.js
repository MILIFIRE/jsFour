/* 
ele 轮播图根元素
--box 轮播图内容集合
---content 单个轮播图
navigator 小点点 导航
navigatorDirection vertical 垂直 horizontal 水平
left 左按钮
right 右按钮
motion left 左右 top 上下  opacity  渐隐渐显
animat CSS transtion 动画效果
speed 速度 默认10；
auto 是否自动滚动 布尔值
over 鼠标入如小点点 是否自动跳转
*/
class slider {
    constructor(ele, obj) {
        this.ele = document.querySelector(ele);
        let normal = {
            box: '.slider-box',
            content: '.slider-content',
            navigator: '.slider-navigator',
            navigatorHover: 'selected',
            navigatorDirection: 'horizontal',
            left: '.slider-btn-left',
            right: '.slider-btn-right',
            motion: 'left',
            speed: 2,
            animat: 'linear',
            btn: true,
            auto: true,
            over: false,
        };
        Object.assign(normal, obj);
        Object.entries(normal).forEach(
            x => this[x[0]] = /[\.#]/.test(x[1]) ? this.ele.querySelector(x[1]) : x[1]
        );
        this.contentStyle = window.getComputedStyle(this.content);
        this.contentLength = this.box.children.length;
        this.step = 0;
        this.flag = true;
        this.cssBack = true;
        this.direction = 0;
        this.init();
    }
    init() {
        clearInterval(this.auto);
        //设置左右上下滚动初始化
        if (this.motion == 'left' || this.motion == 'top') {
            //设置最大步数
            this.maxStep = this.contentLength + 1;
            this.minStep = 0;
            // 设置内容高宽
            this.box.style[this.motion == 'left' ? 'width' : 'height'] = this.content.offsetWidth * (this.maxStep + 2) + 'px'
            // 设置双向轮播图
            this.box.insertBefore(this.box.children[this.contentLength - 1].cloneNode(true), this.content);
            this.box.appendChild(this.content.cloneNode(true));
            //设置首图位置
            this.box.style[this.motion] = -1 * this.content[this.motion == 'left' ? 'offsetWidth' : 'offsetHeight'] + 'px';
            //设置li 索引
            [...this.navigator.children[0].children].forEach((x, i) => {
                x.index = i + 1;
            })
            this.step = 1;
            //设置CSS3动画
            this.box.style.transitionProperty = this.motion;
            // this.box.style.transitionDuration = `${this.speed}s`;
            this.box.style.transitionTimingFunction = this.animat;
            //设置css3 动画完成 回调函数
            this.box.addEventListener("transitionend", () => {
                console.log('this.step:', this.step)
                if (this.step >= this.maxStep) {
                    this.box.style.transitionDuration = '0s';
                    this.step = 1;
                    this.box.style[this.motion] = `${-1 * this.step * this.content[this.motion == 'left' ? 'offsetWidth' : 'offsetHeight']}px`;
                    // this.focuse();
                }
                if (this.step <= this.minStep) {
                    this.box.style.transitionDuration = '0s';
                    this.step = this.contentLength;
                    this.box.style[this.motion] = `${-1 * this.step * this.content[this.motion == 'left' ? 'offsetWidth' : 'offsetHeight']}px`;
                }
                this.flag = true;
                this.cssBack = true;
            }, false);
            // 开始设置渐隐渐显初始化
        } else if (this.motion == 'opacity') {
            this.maxStep = this.contentLength - 1;
            this.minStep = 0;
            [...this.box.children].forEach((x, i) => {
                this.step == i ? x.style.opacity = "1" : x.style.opacity = "0"
                x.style.float = 'none';
                x.style.position = 'absolute'
                x.style.transitionProperty = this.motion;
                x.style.transitionDuration = 'inherit';
                x.style.transitionTimingFunction = 'inherit';
            });
            [...this.navigator.children[0].children].forEach((x, i) => {
                x.index = i;
            })
            this.box.addEventListener("transitionend", () => {
                this.flag = true;
            })
        } else {
            console.log('请正确设置motion属性 left 左右移动 top 上下移动 opacity 渐隐渐现')
        }
        //公共初始化
        this.publicInit();

    }
    publicInit() {
        //设置左右按钮监听事件
        this.left.addEventListener('click', this.button.bind(this))
        this.right.addEventListener('click', this.button.bind(this))
        //设置 移入移出 
        this.ele.addEventListener("mouseenter", this.mousein.bind(this));
        this.ele.addEventListener("mouseleave", this.mouseout.bind(this));
        //设置 鼠标移入小点点 是否跟随跳转
        this.over ? this.navigator.addEventListener('mouseover', this.focuseClick.bind(this), false) : this.navigator.addEventListener('click', this.focuseClick.bind(this));
        //是否自动播放
        this.auto ? this.auto = setInterval(this.automove.bind(this), this.speed * 1000 * 2) : null;
    }
    move() {
        if (this.motion == 'opacity') {
            this.box.style.transitionDuration = `${this.speed}s`
            if (this.step > this.maxStep) this.step = this.minStep;
            if (this.step < this.minStep) this.step = this.maxStep;
            [...this.box.children].forEach((x, i) => {
                this.step == i ? x.style.opacity = "1" : x.style.opacity = "0"
            })
            this.focuse();
        } else {
            console.log('css_back:', this.cssBack)
            console.log('move_step:', this.step)
            if (this.cssBack == false) {
                if (this.step >= this.maxStep) {
                    this.step = 1;
                    this.box.style.transitionDuration = `0.001s`;
                }
                if (this.step <= this.minStep) {
                    this.step = this.contentLength;
                    this.box.style.transitionDuration = `0.001s`;
                }
                this.box.style[this.motion] = `${-1 * this.step * this.content[this.motion == 'left' ? 'offsetWidth' : 'offsetHeight']}px`;
            } else {
                this.box.style.transitionDuration = `${this.speed}s`;
                this.box.style[this.motion] = -1 * this.content[this.motion == 'left' ? 'offsetWidth' : 'offsetHeight'] * this.step + 'px';
            }
            this.focuse();
            this.cssBack = false;
        }
    }
    button(e) {
        if (this.flag) {
            this.flag = false;
            if (e.target == this.left) {
                this.step--;
                if (this.step < this.minStep) {
                    this.step = this.maxStep;
                }
                this.move();
            } else {
                this.step++
                this.move();
            }
        }
    }
    focuseClick(e) {
        [...this.navigator.children[0].children].forEach((x, i) => {
            if (e.target == x) {
                this.step = x.index;
                this.move();
            }
        })
    }
    focuse() {
        [...this.navigator.children[0].children].forEach((x, i, ary) => {
            if (this.step == x.index) {
                x.classList.add(this.navigatorHover)
            } else {
                x.classList.remove(this.navigatorHover)
            }
            if (this.maxStep > this.contentLength) {
                if (this.step == this.maxStep) {
                    ary[0].classList.add(this.navigatorHover)
                }
                if (this.step == this.minStep) {
                    ary[ary.length - 1].classList.add(this.navigatorHover)
                }
            }
        })
    }
    mousein() {
        clearInterval(this.auto);
    }
    mouseout() {
        if (this.auto) this.auto = setInterval(this.automove.bind(this), this.speed * 1000 * 2);
    }
    automove() {
        this.step++;
        this.move();
    }
}