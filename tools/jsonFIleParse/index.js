/* 
CMD 切换到 当前目录
执行 node index.js
*/
//导入 node 文件模块
var fs = require("fs");

//检查是否 是 图片地址 通过 更换正则  可以 更改其功能替换不同的 地址
function ReplaceUrl(str, path) {
    if (!/(\.jpg|\.png)/.test(str)) return false
    // if (path.match('a') !== null) path = path.slice(0,path.length-1)
    return path + str.match(/[^\/!]{6,}?(png|jpg)/)[0]
    // let ary = str.split('/');
    // return path + ary[ary.length-1]
}
//递归查找JSON内所有对象和数组的值 通过ReplaceUrl 找到匹配要替换的内容
function findImgPath(obj, path) {
    if (obj instanceof Array) {
        obj.forEach((x, i) => {
            if (typeof x == 'string') {
                let str = ReplaceUrl(x, path)
                str ? obj[i] = str : null;
            } else {
                findImgPath(x, path)
            }
        })
    } else {
        for (let key in obj) {
            if (typeof obj[key] == 'string') {
                let str = ReplaceUrl(obj[key], path)
                str ? obj[key] = str : null;
            } else {
                findImgPath(obj[key], path);
            }
        }
    }
}

let beforPath = './json/paserBefor/';//待处理文件路径
let afterPath = './json/paserAfter/';//处理后文件路径
let imgurl = 'img/ranking/pic/'//替换的地址前缀
let a = fs.readdirSync(beforPath);//读取待处理文件路径下 所有文件 返回文件名列表 数组
// console.log('dir:', a);
a.forEach((x, i) => { //遍历 文件名列表
    let json = JSON.parse(fs.readFileSync(beforPath  + x)) //读取当前文件内容
    // console.log(json.products)
    findImgPath(json, imgurl)// 处理图片地址
    fs.writeFileSync(afterPath+x,JSON.stringify(json));// JSON 转字符串 写入 处理后文件路径下
})