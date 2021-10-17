$(function () {

  // 轮播图......................
  var mySwiper1 = new Swiper('.swiper-container1', {
    on: {
      init: function () {
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      },
      slideChangeTransitionStart: function(){
        $(".banner .swiper-wrapper .swiper-slide").find(".pogoSlider-progressBar .pogoSlider-progressBar-duration").animate({"width": "100%"},3000)
       
      },
      slideChangeTransitionEnd: function () {
        swiperAnimate(this); 
        $(".banner .swiper-slide").siblings().find(".pogoSlider-progressBar>.pogoSlider-progressBar-duration").animate({"width": "0"})
      },
    },
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    effect: "fade",
    speed: 500,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: true,
      
    },
  })


  // business部分..................
  var mySwiper4 = new Swiper('.swiper-container4', {
    slidesPerView: 3,
    spaceBetween: 60,
    slidesPerGroup: 3,
    pagination: {
      el: '.swiper-pagination',
    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true

    },

  })
  // clients部分....................
  var mySwiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 2,
    spaceBetween: 60,
    pagination: {
      el: '.swiper-pagination',

    },
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true

    },

  })

  //hours数字增加......................
  $(".countup").counterUp({
    delay: 5,
    time: 2000
  })

  // team阴影显示.....................
  $(".team-box").on("mouseenter", function () {
    $(this).find(".team-overlay").css({ "opacity": 1 });
  })
  $(".team-box").on("mouseleave", function () {
    $(this).find(".team-overlay").css({ "opacity": 0 });
  })

  // latest切换.......................
  var $grid = $(".grid");

  $(".btn1").click(function () {
    $grid.isotope({ filter: '.isotope-item' });
    // $(".isotope-item").css("display","block")
    $(this).addClass("isactive");
    $(this).siblings().removeClass("isactive");
  })
  $(".btn2").click(function () {
    $grid.isotope({ filter: '.financical' });
    $(this).addClass("isactive");
    $(this).siblings().removeClass("isactive");
  })
  $(".btn3").click(function () {
    $grid.isotope({ filter: '.business' });
    $(this).addClass("isactive");
    $(this).siblings().removeClass("isactive");
  })
  $(".btn4").click(function () {
    $grid.isotope({ filter: '.marketing' });
    $(this).addClass("isactive");
    $(this).siblings().removeClass("isactive");
  })

  // latest阴影显示..............
  $(".latest-overlay-content").on("mouseenter", function () {
    $(this).css({ "opacity": 1 });

  })
  $(".latest-overlay-content").on("mouseleave", function () {
    $(this).css({ "opacity": 0 });

  })
})

