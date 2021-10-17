$(function () {
  // header-bottom下拉列表...................
  $(".nav1 li").click(function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
  })
  // 下拉列表框的出现与消失
  $(".header-bottom-nav>li>a").mouseenter(function () {
    $(this).parent().find(".dropdown-menu").fadeIn();
    $(this).parent().siblings().find(".dropdown-menu").fadeOut();
  })


  // 锁定header-bottom
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".header-bottom").addClass("header-bottomone");
    } else {
      $(".header-bottom").removeClass("header-bottomone");

    }
  })

  // photodune轮播部分..................
  var mySwiper3 = new Swiper('.swiper-container3', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    slidesPerView: 5,
    spaceBetween: 60,

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

  })

  // 反顶............

  $(".scroll-to-up").on("click", function (e) {
    e.preventDefault();
    $("html").stop().animate({
      "scrollTop": 0
    })
  });

  // 锁定反顶.............
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".scroll-to-up").fadeIn();

    } else {
      $(".scroll-to-up").fadeOut();

    }
  });
})