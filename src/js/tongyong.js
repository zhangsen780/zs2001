
    // 登录注册显示
   
    $("[name = 'headlog']").click(function () {
        $("#login").slideToggle(500);
        $(".reg").css({
            display: "none"
        });

    })


    $('[name = "headreg"]').click(function () {
        $(".reg").slideToggle(500);
        $("#login").css({
            display: "none"
        })

    })


  

    // 警示语提示
    $("#footer .footer-supervise a").mouseover(function () {
        $(".jiaobiao").css('display', 'block')
    })
    $("#footer .footer-supervise a").mouseout(function () {
        $(".jiaobiao").css('display', 'none')
    })

