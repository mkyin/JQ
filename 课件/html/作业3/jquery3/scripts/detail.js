/**
 * Created by lenovo on 17/4/6 006.
 */
$(function(){
    $(".tab_menu ul li").click(function(){
        //选项卡
        $(this).addClass("selected").siblings("li").removeClass("selected");
        var i=$(this).index();
        $(".tab_box div").eq(i).show().siblings("div").hide();
    });
    $(".pro_size ul li").click(function(){
        //尺寸
       $(this).addClass("cur").siblings("li").removeClass("cur");
       var t=$(this).text();
        $(".pro_size strong").text(t);
    });
    //取普通元素的值用text。取有value的值有val
    $("#num_sort").change(function() {
        //计件
        var v = $(this).val();
        $(".pro_price strong").text(v * 200);
    });
    $(".rating li a").click(function(){
        //评论星星
       var n= $(this).parent().attr("class");//parent向上一级
        $(".rating").attr("class","rating "+n+"star");
    });
    $("#skin li").click(function(){
        //换肤
        var m=$(this).index();
        $(this).addClass("selected").siblings("li").removeClass("selected");
        $("#cssfile").attr("href","styles/skin/skin_"+m+".css");
    });
    $(".nav li").hover(function(){
        //下拉彩单
        $(this).find(".jnNav").stop().slideDown(500);
    },function(){
        $(this).find(".jnNav").stop().slideUp(500);
    });
})