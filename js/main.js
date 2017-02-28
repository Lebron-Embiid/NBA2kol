/**
 * Created by Administrator on 2016/11/7.
 */
window.onload = function(){
    //主要内容列表切换
    var content = document.getElementById("main-content");
    var uls = content.getElementsByTagName("ul")[0];
    var lis = uls.getElementsByTagName("li");
    var divs = content.getElementsByTagName("div");
    for(var i=0;i<lis.length;i++){
        lis[i].index = i;
        lis[i].onmouseover = function(){
            for(var j=0;j<lis.length;j++){
                lis[j].className = "";
                divs[j].className ="content";
            }
            this.className = "nav-active";
            divs[this.index].className ="content " +"on";
        };
    }

    //图片显示
    var tx_xw = document.getElementById("tx-xw");
    var img_xy = document.getElementById("img-xy");
    tx_xw.onmouseover = function () {
        img_xy.style.display = "block";
    };
    img_xy.onmouseout = function () {
        img_xy.style.display = "none";
    };

    //全站导航
    var btn = document.getElementById("btn-nav");
    var nav = document.getElementById("nav-show");
    btn.onmouseover = function() {
        nav.style.display = "block";
    };
    btn.onmouseout = function () {
        nav.style.display = "none";
    };
    nav.onmouseover = function () {
        this.style.display = "block";
    };
    nav.onmouseout = function () {
        this.style.display = "none";
    };


    //排行榜
    var top = document.getElementById("top");
    var tx = document.getElementById("tx-game");
    tx.onmouseover = function () {
        top.style.display = "block";
    };
    tx.onmouseout = function () {
        top.style.display = "none";
    };
    top.onmouseover = function () {
        this.style.display = "block";
    };
    top.onmouseout = function () {
        this.style.display ="none";
    };

    //排行榜内容
    var order = document.getElementById("rank-order");
    var load = document.getElementById("download");
    var h4 = document.getElementById("h4");
    var li = document.getElementById("li");
    h4.onmouseover = function () {
        this.style.display="none";
        load.style.display="block";
    };
    load.onmouseover = function () {
        this.style.display = "block";
    };
    load.onmouseout = function () {
        h4.style.display="block";
        this.style.display="none";
    };
    li.onmouseout = function () {
        h4.style.display="block";
        load.style.display="none";
    };


    //轮播图
    var fnav = document.getElementById("f-nav");
    var ful2 = fnav.getElementsByTagName("ul")[1];
    var fli2 = ful2.getElementsByTagName("li");
    var figure = document.getElementById("figure");
    var fgul1 = figure.getElementsByTagName("ul")[0];
    var fgli1 = fgul1.getElementsByTagName("li");
    var fnav1 = document.getElementById("f-nav1");
    var f1ul2 = fnav1.getElementsByTagName("ul")[1];
    var f1li2 = f1ul2.getElementsByTagName("li");
    var figure1 = document.getElementById("figure1");
    var fg1ul1 = figure1.getElementsByTagName("ul")[0];
    var fg1li1 = fg1ul1.getElementsByTagName("li");
    for(var i=0;i<fli2.length;i++){
        fli2[i].index = i;
        fli2[i].onmouseover = function () {
            for(var j=0;j<fli2.length;j++){
                fgli1[j].className = "";
            }
            fgli1[this.index].className = "show";
        }
    }
    for(var i=0;i<f1li2.length;i++){
        f1li2[i].index = i;
        f1li2[i].onmouseover = function () {
            for(var j=0;j<f1li2.length;j++){
                fg1li1[j].className = "";
            }
            fg1li1[this.index].className = "show";
        }
    }
    $("#f-li2").mouseover(function () {
        $("#f-nav").addClass(" no");
        $("#f-nav1").removeClass(" no");
        $("#figure").addClass(" no").removeClass(" show");
        $("#figure1").addClass(" show").removeClass(" no");
    });
    $("#f1-li1").mouseover(function () {
        $("#f-nav1").addClass(" no");
        $("#f-nav").removeClass(" no");
        $("#figure1").addClass(" no").removeClass(" show");
        $("#figure").addClass(" show").removeClass(" no");
    });

    //版本中心
    $(".version-box li").mouseover(function () {
        $(this).addClass("on");
    }).mouseout(function () {
        $(this).removeClass("on");
        $("li:first-child").addClass("on");
    });

    //动画
    var animate = document.getElementById("animate");
    var Aul = animate.getElementsByTagName("ul")[0];
    var Ali = Aul.getElementsByTagName("li");
    for(var i=0;i<Ali.length;i++){
        Ali[i].index = i;
        Ali[i].onmouseover = function () {
            for(var j=0;j<Ali.length;j++){
                Ali[j].style.webkitTransform = "translateY(-150px)";
                Ali[j].style.transition = "transform 3s linear";
            }
            Ali[this.index].style.webkitTransform = "translateY(-150px)";
            Ali[this.index].style.transition = "transform 3s linear";
        };
    }

    $(".pic-ul li,.bb-ul li").mouseover(function () {
        $(this).css("opacity","0.9");
    }).mouseout(function () {
        $(this).css("opacity","1");
    });

    //官方合作
    $(".official").mouseover(function () {
        $(".footer-hide").removeClass("no").addClass("show");
    }).mouseout(function () {
        $(".footer-hide").removeClass("show").addClass("no");
    });
    $(".footer-hide").mouseover(function () {
        $(this).addClass("show").removeClass("no");
    }).mouseout(function () {
        $(this).addClass("no").removeClass("show");
    });
    //固定列表
    $(".fixed li").click(function () {
        $(this).addClass("fixed-on").siblings("li").removeClass("fixed-on");
    });
};
