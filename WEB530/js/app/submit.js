/**
 * Created by lenovo on 2016/6/21.
 */
window.onload = function () {
    $(".guize p").click(function () {
        $("ul li:nth-child(1)").css("display", "block");
        $(".beijing").css("display", "block");
        $.ajax({
            url:"date/data.json",
            type:"GET",
            datatype:"json",
            success: function (msg) {
                //活动规则数据处理
                $(".time").text(msg.actTime);
                $(".user").text(msg.actObject);
                $(".term").text(msg.actChance);
                $(".statement").text(msg.actStatements);
            },
            error: function () {
                alert("error");
            }
        })
    })

    //关闭和弹窗s
    $("div[class^=guanbi]").click(function () {
        $("ul li").css("display", "none");
        $(".beijing").css("display", "none");
    })
    $(".Popup6 .botton").click(function(){
        window.location.href="html/submit.html";
    });

    $("#botton").click(function () {
        $.ajax({
            url:"date/code.json",
            type:"GET",
            datatype:"json",
            success: function (msg) {
                //是否参与过抽奖
                if(msg.gameCode == 0){
                        window.location.href="html/Lottery.html";
                }else{
                    //是否已经领奖
                    if(msg.lingjiangCode == 0){
                        //已经领取
                        console.log(msg.lingjiangCode);
                        $(".beijing").css("display","block");
                        $("ul li:nth-child(5)").css("display","block");
                    }else{
                        //未领奖
                        console.log(msg.lingjiangCode);
                        $(".beijing").css("display","block");
                        $("ul li:nth-child(6)").css("display","block");
                    }
                }
            },
            error: function () {
                alert("error");
            }
        })
    })

}
