(function () {

    // 函数初始化设置
    var root = this;

    // 函数的所有方法添加在proxyObj上
    var proxyObj = {};

    // 再将proxyObj挂载到全局
    // root 的值, 客户端为 `window`, 服务端(node) 中为 `exports`
    root.proxyObj = proxyObj;
    // 所以为了node的兼容性,放弃下面这种容易想到的方法
    // window.proxyObj = proxyObj;

    // 添加自己的方法
    proxyObj.reverse = function (string) {
        return string.split('').reverse().join('');
    }

})()

let result = proxyObj.reverse('testFunc');
console.log(result);