/* 
CMD 切换到 当前目录
执行 node index.js
*/

//导入 node 文件模块
var fs = require("fs");

let beforPath = './json/paserBefor/';//源文件夹路径
let afterPath = './json/paserAfter/';//处理后文件路径
let beforName = 'paserBefor'//  源文件夹名称
let afterName = 'paserAfter'// 目标文件夹名称   目标文件夹可以为空

function rename(str){
    return str.replace(/\!.+/,'') //正则去除最后的!q90.webp
}
// 递归版 文件复制重命名
function findPath(beforPath){
    fs.readdirSync(beforPath).forEach(x => {// 读取文件 目录 返回数组 、遍历每一项
        if(x.includes('.')){ // 有点的说明是文件 没有点的是目录  这里可能不严谨 后期优化
            afterPath = beforPath.replace(beforName,afterName);   // 目标文件夹地址 ./json/paserAfter/a/
            if(!fs.existsSync(afterPath))fs.mkdirSync(afterPath); // 检查是否有这个文件夹 没有 创建 这个文件夹
            fs.copyFileSync(beforPath+x,afterPath+rename(x)); // 拷贝文件  旧目录 
        }else{
            findPath(beforPath+x+'/') // 是文件夹 递归调用  找到文件
        }
    });
}
findPath(beforPath);