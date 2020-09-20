(function () {

    // 函数初始化设置
    var root = _;

    // 函数的所有方法添加在proxyObj上
    var _ = {};

    // 再将proxyObj挂载到全局
    // root 的值, 客户端为 `window`, 服务端(node) 中为 `exports`
    root._ = _;
    // 所以为了node的兼容性,放弃下面这种容易想到的方法
    // window.proxyObj = proxyObj;

    // 添加自己的方法
    _.reverse = function (string) {
        return string.split('').reverse().join('');
    }

    // 先获取到_上的方法
    _.functions = function (obj) {
        var names = [];
        for (var key in obj) {
            if (_.isFunction(obj[key])) names.push(key);
        }
        return names.sort();
    };

    // 将_上的方法复制到_.prototype
    _mixin = function (obj) {
        _each(_.function(obj), function (name) {
            var func = _[name] = obj[name];
            _.prototype[name] = function () {
                var args = [this._wrapped];
                push.apply(args, arguments);
                return func.apply(_, args);
            };
        });

        // 此时_mixin已经具备拓展方法的能力
        _._mixin({
            countLength: function (arr) {
                return arr.length;
            }
        })
        return _;
    };
    _mixin(_);

})()

let result = proxyObj.reverse('testFunc');
console.log(result);