
    let isCheck = {
        user: false,
        pass1: false,
        pass2: false

    }

    let hasUser = true;




    $(function () {

        logVcs();    // 验证码

        $("#regvc2").click(function () {
            logVcs();       // 点击重新生成验证码
            $("#regvc2").html(logVc1())

        });

        // 用户名验证
        $("#regUser").blur(function () {
            checkUserFronts();
            checkNames()
        });

        // 密码验证

        $("#regPass1").blur(function () {
            checkPass1();
        })

        $("#regPass1").change(function () {
            $("#regPass2").val('');
            $("#regPass2").next().html('');
        });

        // 确认密码验证
        $("#regPass2").blur(function () {
            checkPass2()
        });

        // 注册发送请求

        $(".reg-but").click(function () {
            let trueCount = 0;
            for (let k in isCheck) {
                if (isCheck[k]) { trueCount++; }
            }
            console.log(trueCount);
            console.log(hasUser);
            console.log(regSave());
            if (trueCount == 3) {
                if (!hasUser) {
                    regSave();
                    return;
                }
            } else {
                alert("请检查你输入的信息是否完整")
            }

        });





        /*-------------------------------------*/
        // 退出登录按钮

        

    })


    function logVcs() {
        $("#regvc2").html(getCodes())      // 生成验证码写入标签的方法

    }

    // 1-2 生成随机位数的验证码
    // let str = '0123456789';

    function getCodes() {
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

    // 用户名前段验证
    function checkUserFronts() {
        let userIdDom = $("#regUser");

        if (userIdDom.val() != '') {
            isCheck.user = true;
            return true;
        } else {
            userIdDom.next().html("用户名不能为空")
            isCheck.user = false;
            return false;
        }
    }

    // 用户名后端验证
    function checkNames() {

        let logName = $("#regUser").val()
        console.log(logName);

        $.ajax({
            url: "../server/checkUser.php",
            data: { username: logName },


            dataType: 'json',
            success: function (res) {
                if (res == "1") {
                    $("#regUser").next().css({ "color": "red" }).html("用户名存在");
                } else if (res == "0") {
                    $("#regUser").next().css({ "color": "green" }).html("用户名可用");
                }
            }
        })
    }

    // 密码验证

    function checkPass1() {
        let passDom = $("#regPass1");

        if (passDom.val() != '') {
            passDom.next().html("密码可用")
            isCheck.pass1 = true;
        } else {
            isCheck.pass1 = false;
            passDom.next().html("密码不能为空")
        }
    }


    function checkPass2() {
        let passDom2 = $("#regPass2");
        if (passDom2.val() === $("#regPass1").val()) {

            if (passDom2.val() != "") {
                passDom2.next().html("确认密码正确")
                isCheck.pass2 = true;
            } else {
                passDom2.next().html("确认密码不能为空")
            }
        }
        else {
            isCheck.pass2 = false;
            passDom2.next().html("密码输入错误")
        }
    }



    // 注册

    function regSave() {
        let sexDoms = $("[name='sex']")
        let userR = $("#regUser").val()
        let passR = $("#regPass1").val()
        console.log(userR, passR);

        let sex = "男";
        // if (sexDoms[1].checked) {
        //     sex = "女";
        // }
        // let str = `username=${$("#regUser").val()}&userpass=${$("#regPass1").val()}&usersex=${sex}`;
        $.ajax({
            dataType: 'json',
            type: "post",
            url: "../server/regSave.php",
            data: { username: userR, userpass: passR, usersex: sex },
            success: function (result) {
                if (result == "1") {
                    $(".reg-but").html("注册成功")
                } else {
                    $(".reg-but").html("注册失败")
                }
                console.log(12);

            }
        });
    }