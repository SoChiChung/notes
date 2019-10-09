[TOC]



## Node.js是什么

Node.js是一个基于Chrome V8引擎的JavaScript 运行环境。

底层是有一个翻译机 把js代码翻译成为c/c++运行

## Node.js特点

### 优点

+ 1. 异步非阻塞io（io线程池） 

     同步阻塞：也就是当有像写入数据库这种操作的时候，

     io线程池：传统线程在连接完就会被销毁 线程池就是汇聚了各种线程 例如有个注册要求，传统做法是分配资源，建立线程，请求完毕然后销毁。线程池是把执行完注册需求后的线程保持活跃放在线程池，然后需要调用的时候在调用。

     意义：不需要重复创建线程 服务器启动的时候就建立线程池

+  2.特别适用于io密集型应用

  也就是适用于频繁进行数据库操作的服务器

+ 3. 事件循环机制

+  4.单线程

+ 5. 跨平台

     一处编写 随处可用

     实现原理：

     提供一个翻译机 就像java的jvm一样 在windows写的代码 经过jvm翻译 可运行在linux mac之中



​     

### 不足

1. 回调函数嵌套太多 太深

2. 单线程 处理不好CPU密集型任务

   和java恰好相反

   ### 和java 服务器的区别

   #### java

   一对一服务：

   客户端1给服务器发请求 服务器向数据库请求数据 服务器在等待数据库返回数据的时候一直保持与客户端1的连接，如果这时候客户端2给服务器发请求 服务端会另外创建线程响应适用于cpu密集型 也就是客户端发送请求慢 频率低。

   e.g 十万个客户端请求pi的值 java会创建十万个线程同时计算 以一个线程计算结果为5s算 总耗时5s

   <hr>
   
   #### node
   
     单线程：
   
   只要维护好服务源 可以搞定高并发，成本低。适用于io密集型 也就是数据库请求响应慢。

e.g 十万个客户端请求pi的值 node会一个个计算 以一个线程计算结果为5s算 总耗时50万s

## node函数特点

1. Node 中任何一个模块（js）都被有一个外层函数包裹

function(exports,require,module,_filename,___dirname){

_filename:当前文件绝对路径

__dirname：当前文件所在文件夹的绝对路径

}

2. 用外层函数包裹的意义：
   + 隐藏内部实现 实现封装
   + 支持commonJs的模块化
3. 对于浏览器端而言，js由几部分组成：

+ BOM
+ DOM
+ ES规范

4. Node端的js由几部分组成？
   + 没有BOM
   + 没有DOM
   + 几乎包含了所有的ES
   + 没有window 取而代之的是一个叫global的全局变量 不允许this指向global



## npm与yarn

 npm：node package manager node官方的包管理器

+ npm 安装流程：eg客户端通过npm i jQuery 向 npm发送第一次安装请求 npm接受请求后检索仓库 如果找到了对应的仓库名 就会向客户端**返回该资源的下载地址 **然后客户端访问下载地址下载资源，安装完会产生package-lock-json，

  然后如果是npm i ... --save /npm i -S /npm i 把资源的名字写进package-json的dependencies（生产依赖 ）里面.

  如果是npm i --save--dev npm i -D name包名写进devdependencies(开发依赖)之中

+ package-lock-json：缓存了每个下载过的包的安装地址，目的是下次安装的时候

+ 生产依赖：在生产环境中必不可少的包，就是生产依赖。如jQuery axios

+ 开发依赖：开发时需要的依赖的库：例如语法检查 压缩代码 的包 当然存在既属于开发依赖 又属于生产依赖 例如：jquery

+ npm删除：npm remove xxx 在node-module删除包 并在package-json删除声明

+ 版本号说明

  1. "^3.x.x"：锁定大版本 以后安装包的时候 保证版本是3.x.x版本 x默认取最新的 如"jquery：^3.1.1" 就安装目前jquery 最新版本 3.4.1
  2. "~3.1.x": 锁定小版本
  3. "3.1.1"：锁定完整版本
  4. 如果想知道详情 建议还是用npm ls 资源名查看 



### yarn



yarn使用本地缓存，无需互联网连接就能安装本地已经缓存的依赖项

|                        | yarn                         | npm         |
| ---------------------- | ---------------------------- | :---------- |
| 初始化项目             | yarn init                    | npm init    |
| 下载项目所有声明的依赖 | yarn                         | npm install |
| 下载指定的开发依赖     | yarn add                     | npm install |
| 全局下载               | yarn global add              | npm i -g    |
| 删除依赖包             | yarn (global) remove webpack | npm remove  |
|                        |                              |             |
|                        |                              |             |

yarn 没有自己的服务器，用的还是npm的仓库 快的原因是缓存和下载算法很牛逼

## Buffer 缓冲器

1. Buffer 是什么

+ 它是一个类似于数组的对象，用于存储数据（存储是二进制数据）也就是说无论多大 什么类型的数据 都转成了二进制

+ Buffer效率很高（因为存的是二进制 所以和计算机交互的时候无需转换，因此读取很快） 存储和读取很快 直接对计算机内存进行操作

+ 大小一旦确定 不可修改

+ 每个元素占用内存大小为1字节

  

+ node 的核心模块 无需下载 无需引入 即可使用 

2. Buffer的创建

   ```JavaScript
   //创建Buffer 实例
   //不要用 new  被弃用了 new创建是时候 先调用allocUnsafe方法获取空间 然后打扫 所以效率很低
   /*let buf=new Buffer(10)
   console.log(buf)*/
   
   
    // 1.Buffer.from()
   let str='Buffer.from()';
   let buf=Buffer.from(str);
   console.log(str)
   console.log(buf)//输出是16进制  底层是二进制 
   
   // 2.Buffer.alloc() 效率一般
   let buf2=Buffer.alloc(10);//传入参数为Buffer的长度
   console.log("Buffer.alloc")
   console.log(buf2);
   
   // 3.Buffer.allocUnsafe() 不安全在于 alloc使用的是申请的在堆内存中一片新的内存 
   //而allocUnsafe用的是堆上面已存在但是没有引用的内存（js的垃圾回收是周期性的，所以并不是一有垃圾马上被清理）上面残留信息
   let buf3=Buffer.allocUnsafe(100);
   
   console.log("Buffer.allocUnsafe");
   console.log(buf3);
   ```

    

  ## fs



  

| * 简单文件写入(异步)： |                                                              |
| ---------------------- | ------------------------------------------------------------ |
|                        | *     fs.writeFile(file, data[, options], callback)          |
|                        | *           --file:要写入的位置+文件名                       |
|                        | *           --data：要写入的数据                             |
|                        | *           --options：配置对象（可选参数，几乎不用）        |
|                        | *                 --encoding：编码，默认值：utf8             |
|                        | *                 --mode：控制文件的权限，默认值为：0o666(0o666=0o222+0o444) |
|                        | *                       --0o111:文件可被执行的权限(linux)    |
|                        | *                       --0o222:文件可被写入的权限           |
|                        | *                       --0o444:文件可被读取的权限           |
|                        | *                 --flag:打开文件要进行的操作                |
|                        | *                       --'w':直接写入（覆盖原来的数据）     |
|                        | *                       --'a'追加写入（保留原来的数据，追加新的） |
|                        | *           --callback：回调函数                             |
|                        | *                 --err 错误对象，如果有错误，其值为错误对象；如果没有是undefined |

```JavaScript
let fs=require('fs');
fs.writeFile('./test.txt','有点牛逼，第二次',{
    flag:'a'
},(err)=>{
    if(err){
        console.log("success")
    }else{
        console.log(err)
    }
})
```



```
异步一定是有回调函数

但是有回调函数不一定是异步（foreach）
```

不足之处：

+ 简单文件写入：会一次性把所有数据加载到内存之中，如果数据较大会发生内存溢出，适用于小文件写入

| * 流式文件写入： |                                                              |
| ---------------- | ------------------------------------------------------------ |
|                  | *     流的分类：可读流、可写流                               |
|                  | *     fs.createWriteStream(path[, options])                  |
|                  | *         --path:写入文件的路径+文件名                       |
|                  | *         --options：配置对象（可选）                        |
|                  | *             --flags:打开文件要进行的操作                   |
|                  | *                   --'w':直接写入（覆盖原来的数据）         |
|                  | *                   --'a'追加写入（保留原来的数据，追加新的） |
|                  | *             --encoding:编码，默认值：utf8                  |
|                  | *             --fd:文件标识（linux），默认值是：null         |
|                  | *             --mode：控制文件的权限，默认值为：0o666        |
|                  | *                     --0o111:文件可被执行的权限(linux)      |
|                  | *                     --0o222:文件可被写入的权限             |
|                  | *                     --0o444:文件可被读取的权限             |
|                  | *             --autoClose：自动关闭,不是关闭流，而是关闭文件，默认是true |
|                  | *             --start：写入文件的起始位置                    |

```JavaScript
//流式文件写入
let ws=fs.createWriteStream('./demo.txt')//创建可写流
ws.write("黑色的不是夜晚，是漫长的孤单\n")
ws.write("看脚下一片黑暗，望头顶星光璀璨")
ws.close()
//只要使用了流 必须给流加监听
```

| * 简单文件读取： |                                              |
| ---------------- | -------------------------------------------- |
|                  | *     fs.readFile(path[, options], callback) |
|                  | *         --path：要读取的文件路径+文件名    |
|                  | *         --options：配置对象                |
|                  | *               --encoding：编码，默认是utf8 |
|                  | *               --flag:默认值是'r'           |
|                  | *         --callback：回调函数               |
|                  | *               --err:错误对象               |
|                  | *               --data：读取出来的数据       |

```JavaScript
let fs = require('fs')
let rs = fs.readFile('./demo.txt', (err,data)=>{
    if (err) { console.log(err) }
    else {
        console.log("读取成功")
        //读取出来的是Buffer类型 如果要转成看得懂的内容 要使用console.log(data.toString())
        //因为如果你读取的是像mp3 jpg这种类型数据 无法自动使用tostring转换输出
        fs.writeFile('./copy.txt',data,(err)=>{//把demo.txt的内容复制到copy.txt
            if(err)
            console.log("复制失败")
        })
    }
}) 
```

| * 流式文件读取 |                                                              |
| -------------- | ------------------------------------------------------------ |
|                | *     fs.createReadStream(path[, options])                   |
|                | *       --path:要读取的文件路径+文件名                       |
|                | *       --options：配置对象（可选）                          |
|                | *           --flags:                                         |
|                | *           --encoding:                                      |
|                | *           --fd:                                            |
|                | *           --mode:                                          |
|                | *           --autoClose:                                     |
|                | *           --start:读取的起始位置                           |
|                | *           --end:读取的结束位置                             |
|                | *           --highWaterMark : 每次读取文件的大小（流的管道大小） |
```JavaScript
let fs = require('fs')
/* let rs = fs.readFile('./demo.txt', (err,data)=>{
    if (err) { console.log(err) }
    else {
        console.log("读取成功")
        //读取出来的是Buffer类型 如果要转成看得懂的内容 要使用console.log(data.toString())
        //因为如果你读取的是像mp3 jpg这种类型数据 无法自动使用tostring转换输出
        fs.writeFile('./copy.txt',data,(err)=>{//把demo.txt的内容复制到copy.txt
            if(err)
            console.log("复制失败")
        })
    }
}) ; */

//流式文件读取
let rs2=fs.createReadStream('./demo.txt',{
    start:2,
})
rs2.on('open',()=>{
    console.log("可读流打开")
})
rs2.on('close',()=>{
    console.log("可读流关闭")
    ws.close()//注意：ws.close()的位置在这里！！！
})

let ws=fs.createWriteStream('./copyBystream.txt');
ws.on('open',()=>{
    console.log("可写流打开")
})
ws.on('close',()=>{
    console.log("可写流关闭")
})

rs2.on('data',(data)=>{
    ws.write(data)
})

```

## MongoDB

数据库分类

+ 关系型数据库(RDBS

  特点：关系紧密 都是表

  优点：

  + 易于维护 都使用表结构 格式一致
  + 使用方便 sql语言通用
  + 高级查询 

缺点：

+ 读写性能较差 尤其是海量数据的高效率读写
+ 有固定的表结构 字段不可随意修改 灵活度较差
+ 高并发读写需求 传统的关系型数据库来说 硬盘io是个大瓶颈

## 不懂

arguments.callee

commonJs

