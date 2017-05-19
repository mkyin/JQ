/**
 * Created by lenovo on 17/4/6 006.
 */
$(function(){
    $(".color_change ul li img").click(function(){
        $(this).addClass("hover").parent().siblings().find("img").removeClass("hover");
        var imgSrc=$(this).attr("src");//完整路径
        var i=imgSrc.lastIndexOf(".");
        var jpg=imgSrc.substring(i);
        imgSrc=imgSrc.substring(0,i);//截取路径
        $("#bigImg").attr("src",imgSrc+"_one_small"+jpg);
        var color=imgSrc.replace("images/pro_img/","");//replace()去掉前面的。只剩后面的
        $(".imgList li").hide();
        $(".imgList").find(".imgList_"+color).show();
        $(".imgList").find(".imgList_"+color).eq(0).find("a").click();
        var t=$(this).attr("alt");
        $(".color_change strong").text(t);
        //alert(imgSrc)



    });
})