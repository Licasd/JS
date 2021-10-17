$(function () {
    // service的显示部分.........................
    $(".special-menu>li").on("click", function (event) {
        event.preventDefault();
        $(this).addClass("active-tab");
        $(this).siblings().removeClass("active-tab");
        let lisIndex = $(this).index();
        $(".special-services-wrap>div").eq(lisIndex).siblings("div").removeClass("active-s");
        $(".special-services-wrap>div").eq(lisIndex).css({"display":"block"});
        setTimeout(function(){
            $(".special-services-wrap>div").eq(lisIndex).addClass("active-s");
        },10)
        $(".special-services-wrap>div").eq(lisIndex).siblings("div").css({"display":"none"})
    })
})
