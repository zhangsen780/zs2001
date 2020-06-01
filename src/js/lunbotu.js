

// 获取标签对象
let oImg = document.getElementsByTagName('img');
let olli = document.querySelectorAll('ol>li')

let index = 0;  // 第一个图片的的序号设置0
let myTimer = null;

//  1 自动播放方法

function autoPlay() {
    myTimer = setInterval(function () {
        goImg(index + 1);
        liClass();
    }, 3000)
}

//  2 点击ol 的li 切换对应的图片

function goImg(indexOl) {
    if (indexOl == index) {
        return;
    }

    let outLi = index; // 已经显示过的图片
    index = indexOl;    // 即将显示的图片

    // 极值处理

    if (index > 5) {
        index = 0;
    }
    if (index < 0) {
        index = 5;
    }

    // 显示效果

    fadeInOut(oImg[outLi], oImg[index], 1000);  // 1 淡出 淡现 过程时间
    olli[outLi].className = "";
    olli[index].className = "select";

}


// 鼠标划入停止定时器
function stopPlay() {
    window.clearInterval(myTimer);
}

// 移出继续轮播

function continuePlay() {
    autoPlay();
}

// 点击箭头跳转
function nextImg() {     // 跳下一张
    goImg(index + 1);
}

function previousImg() {
    goImg(index - 1);
}



window.onload = function () {
    // 主要步骤

    // 自动播放
    
    // 2 点击ol 的li切换图片

    for (let i = 0; i < olli.length; i++) {
        olli[i].onclick = function () {
            stopPlay();
            goImg(i);
           
        }

    }

    liClass();
    // 鼠标移入停止播放
    document.getElementById("banner").onmouseover = function () {
        stopPlay();
    }

    // 鼠标移出

    document.getElementById("banner").onmouseout = function () {
        continuePlay();
    }

    let lr = document.querySelectorAll('[name = "lr"]');

    lr[0].onclick = function () {
        previousImg();
        

    }

    lr[1].onclick = function () {
        nextImg();
        
    }
}

function liClass() {
    olli.forEach(function (i, k) {
        i.className = '';
        if (k === index) {
            i.className = "select";
        }
    })
};

