(function(window){
    function share(data,callback){
        // 调用wexin或者其他软件的sdk 把data传入去 然后调用callback
        // 
        let str='';
        // 把data转换成字符串
        Object.keys(data).forEach(item=>{
            str+=`${item}=${data[item]}&`
        })
        // callback 在分享请求成功或者失败后调用对应方法 这个callback由服务端调用
        // 优化点 因为callback在传参的时候可能会传函数名或者是具体函数 所以有typeof调用
        let temp='share'+Date.now()
        if(typeof callback =='function'){
            window[temp]=callback
            str += 'callback'+temp
        }else{
            str+='sc'+callback
        }
        let img =new Image()
        img.src='zf://dl//share?'+str//通过ajax请求触发share方法
        setTimeout(()=>{
            img=null//用完清空
        },100)
    }
    function scan(){}
    function getNetwork(){}
    let myJSbridge={//封装三个方法 share：分享 scan：扫码 getNetwork：获取网络状态
        share,
        scan,
        getNetwork 
    }
    window.myJSbridge=myJSbridge;//把myJSbridge挂载到window下 
})(this)