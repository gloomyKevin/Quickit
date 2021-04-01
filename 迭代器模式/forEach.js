function forEach(obj ,fn) {
    if(obj === 'undefined' || typeof obj === 'null') {
        return 
    }

    if(typeof obj !== 'object') {
        obj = [obj]
    } 

    if(Array.isArray(obj)) {
        for(let i = 0; i < obj.length; i++) {
            fn.call(null, obj[i], i, obj)
        }
    } else {
        for(key in obj) {
            if(Object.prototype.hasOwnProperty(obj)) {
                fn.call(null, obj[key], k ,obj)
            }
        }
    }
}