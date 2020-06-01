$(function () {
    logVc();    // 验证码
    showWelcomeOrLogin();
    $("#logUser").blur(function () {
        checkName();

    });

    $("#codeSpan").click(function () {
        logVc();       // 点击重新生成验证码
        $("#codeSpan").html(logVc())

    });


    // 登录按钮

    $("#logbut").click(function () {
        if ($("#logVc").val() != $("#codeSpan").html()) {
            $("#codeSpan").next().css({ color: 'red' }).html("验证码错误")
            logVc();        // 重新生成验证码
            return;
        } else {
            // login();
            $("#codeSpan").next().css({ color: 'green' }).html("验证码正确");

        }

        login();      // 验证通过执行登录验证
        
    });

    $('[name="back"]').click(function () {
        addCookie('username', '随便', -1);
        window.alert('您已经退出登录了');
        showWelcomeOrLogin()

    })


    /*-----------------------------------------------*/

    $("#buyCar").click(function(){
        console.log(getCookie("username"))

        if(getCookie("username") === null){
            window.confirm('请您先登录');
        }else if(getCookie("username") !== null){
            window.location.href = '../pages/cart.html';
        }
    })

    /* 购物车  登录 判断*/

    // $("#buyCar").click(function () {
    //     // 判断是否有login
    //     // 获取cookie对象
    //     // // getCookie("username") 
    //     // console.log(getCookie("username") );

    //     //     // 如果对象中没有login,获取结果是 undefined
    //     //     // if (cookieObj === undefined) {
    //     //     //     window.confirm('请您先登录');

    //     //     //     // 如果点击的结果是true,证明点击的是确定,跳转至登录页面
    //     //     //     // if (bool === true) {
    //     //     //     //     window.location.href = `./pages/login.html?${window.location.href}`;
    //     //     //     // }
    //     //     //     // 如果 有 login 的登录状态码,证明已经登录
    //     //     //     // 直接跳转至购物车页面
    //     //     // }
    //     // }


    //     // // else if (cookieObj === $("#regUser").val()) {
    //     // //     window.location.href = 'cart.html';
    //     // // }

    // }
    })










// 后端验证用户名

function checkName() {

    let logName = $("#logUser").val()
    $.ajax({
        url: "../server/checkUser.php",
        data: { username: logName },


        dataType: 'json',
        success: function (res) {
            if (res == "1") {
                $("#logUser").next().css({ "color": "green" }).html("用户名输入正确");
            } else if (res == "0") {
                $("#logUser").next().css({ "color": "red" }).html("用户名不存在");

            }
        }

    })

}

// 1-1 验证码生成
function logVc() {
    $("#codeSpan").html(getCode())      // 生成验证码写入标签的方法

}

// 1-2 生成随机位数的验证码
// let str = '0123456789';

function getCode() {
    let str = '0123456789';

    let newStr = ''
    for (let i = 1; i <= 5; i++) {
        let num = parseInt(Math.random() * str.length);

        if (newStr.indexOf(str[num]) === -1) {
            newStr += str[num]
        } else {
            i--;
        }
    }
    return newStr;
}




function login() {
    let logName = $("#logUser").val()
    let logPass = $("#logPass").val()


    $.ajax({
        url: "../server/loginCheck.php",
        type: 'post',
        data: { username: logName, userpass: logPass },
        dataType: 'json',
        success: show

    })


}

function show(result) {

    console.log(result)
    if (result == "1") {
        window.alert("登陆成功");
        let str = decodeURIComponent(window.location.search);
            str = str.substr(1);
            window.location.href = str;
        // 验证通过存储cookie
        addCookie("username", $("#logUser").val(), 7);


        $("#logbut").html("登陆成功")
    } else {
        $("#logbut").html("登陆失败")
        window.alert('登录失败,请继续登录');
        logVc();
    }
}

// 登录跳转初始地址

// $("#logbut").click(function(){
//   window.location.href = `index.html?${window.location.href}`;
// })




// 显示欢迎语或者登录框
// showWelcomeOrLogin();
// // 注销
// $("#btnLogout").onclick = function(){
//     removeCookie("username");
//     showWelcomeOrLogin();
// }
// // 登录
// $("#btnLogin").onclick = function(){
//     location.href="demo09login.html";
// }

// // 登录
// $("#btnReg").onclick = function(){
//     location.href="demo08reg.html";
// }


function showWelcomeOrLogin() {

    let username = getCookie("username")

    if(username==null){
        $(".a").css({'display': 'inline-block'})
        $("#yidenglu").css({'display': 'none'})
    }else{        
        $("#yidenglu").css({'display': 'inline-block'})
        $(".a").css({'display': 'none'})
        $("#yidenglu").html(`欢迎 ${username}`)
    }
}
