(function(global){
    function remChange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //顶部跑马灯
    $.fn.textScroll = function () {
        var speed = 60, flag = null, tt, that = $(this), child = that.children();
        var p_w = that.width(), w = child.width();
        child.css({left: p_w - 80});
        var t = (w + p_w) / speed * 800;
        function play(m) {
            var tm = m == undefined ? t : m;
            child.animate({left: -w}, tm, "linear", function () {
                $(this).css("left", p_w);
                play();
            });
        }
        play();
    }
    $('.topTextWrap').textScroll();

    //首页进度条
    var setBarwidth = function (num) { //参数为当前进度
        if(num === undefined){
            num = 15; //进度条默认最小宽度为15%
        }
         function temp () {
            if(num >= 25){
                $('#loadNum').text(num+'%');
                $('.loadedInner').css('width',num+"%");
            }else if(num < 25){
                $('#loadNum').text('');
                $('.loadedInner').css('width','15%');
            }
        }
        return temp();
    }
    setBarwidth(30);


    //关闭弹窗按钮
    $('.closeTc').on('click',function () {
        $(this).parent().fadeOut();
        hideMask();
    });
    //活动规则按钮
    $('#gztcBtn').on('click',function () {
        $('.homePageTc3').fadeIn();
        showMask();
    });
    //已获得礼包弹窗弹出
    var liBao = function () {
        $('.homePageTc1').fadeIn();
        showMask();
    }
    //已获得礼包弹窗关闭
    var closeLibao = function () {
        $('.homePageTc1').fadeOut();
        hideMask();
    }
    //助力弹窗弹出
    var zhuLi = function () {
        $('.homePageTc2').fadeIn();
        showMask();
    }
    //助力弹窗关闭
    var closeZhuli = function () {
        $('.homePageTc2').fadeOut();
        hideMask();
    }

    //我的奖品按钮跳转
    $('#jumpBtn').on('click',function () {
        window.location.href = 'index1.html';
    });

    //我的奖品页面未注册点击奖券
    $('.notLoginList').on('click','li',function () {
        $('#secTc').fadeIn();
        showMask();
    });
    //我的奖品页面弹窗关闭按钮
    $('.secTcClose').on('click',function () {
        $('#secTc').fadeOut();
        hideMask();
    });

    //我的奖品页面返回按钮
    $('#returnHomePage').on('click',function () {
        history.go(-1);
    });



    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }
});
