// 1,设定cookie函数

function setCookies(key, value, t) {
    let time = new Date();
    let t1 = time.getTime() - 8 * 60 * 60 * 1000 + t * 1000;
    time.setTime(t1);
    document.cookie = `${key}=${value};expires=${time}`;
}

// 2,获取cookie数据函数

function getCookieObj(str) {
    let arr = str.split('; ');
    let obj = {};
    let arrV = [];
    arr.forEach(v => {
        arrV = v.split('=');
        obj[arrV[0]] = arrV[1];
    });
    return obj;
}

// 获取地址栏中数据参数
function getUrlVal(val) {
    let obj = {};
    // 现根据经&符号,将字符串转化为数组
    let arr = val.split('&');
    // 在根据=等号,转化数组中的数据为新的数组
    let newArr = [];
    // 循环遍历数组arr
    arr.forEach(function (item) {
        // 将数组arr中的数据,根据=,再分割为新数组
        newArr = item.split('=');
        // 新数组中的[0]就是键值对的键名
        // 新数组中的[1]就是键值对的数据
        // 作为对象中的属性和属性值,赋值给对象
        obj[newArr[0]] = newArr[1];
    })
    // 最终返回值是获取到的对象
    return obj;
}