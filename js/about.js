$(function () {
  // team阴影显示.....................
  $(".team-box").on("mouseenter", function () {
    $(this).find(".team-overlay").css({ "opacity": 1 });
  })
  $(".team-box").on("mouseleave", function () {
    $(this).find(".team-overlay").css({ "opacity": 0 });
  })


  // creative的显示部分.....................
  $(".creative-tab>li").on("click", function (event) {
    event.preventDefault();
    $(this).addClass("active-tab");
    $(this).siblings().removeClass("active-tab");
    let lisIndex = $(this).index();
    $(".creative-wrap>div").eq(lisIndex).siblings("div").removeClass("active-w");
    $(".creative-wrap>div").eq(lisIndex).css({"display":"block" });
    setTimeout(function () {
      $(".creative-wrap>div").eq(lisIndex).addClass("active-w");
    }, 10)
    $(".creative-wrap>div").eq(lisIndex).siblings("div").css({"display": "none" })
  })













})


























// // creative对应显示................
// var lis = document.querySelectorAll(".creative-tab li");
// var divs =document.querySelectorAll(".creative-wrap .creative-content-wrap");
// console.log(divs);
// console.log(lis);
// for (var i = 0; i < lis.length; i++) {
//   lis[i].index = i;
//   lis[i].onclick = function () {
//     for (var j = 0; j < lis.length; j++) {
//       if (hasClass(liEles[j], "active-tab")) {
//         removeClass(liEles[j], "active-tab");
//         removeClass(divs[j],"active-w");
//       }
//     }
//   }
//   var index = this.index;
//   addClass(this, "active-tab")
//   addClass(divs[index],"active-w");
// }

// // 添加
// function addClass(ele, className) {
//   // 存在不添加，不存在添加
//   if (!hasClass(ele, className)) {
//     var eleClassName = ele.className;
//     var newClass = eleClassName ? eleClassName + " " + className : className
//     ele.className = newClass;
//   }
// }
// function removeClass(ele, className) {
//   // 存在删除，不存在不删除
//   // 先获取原class ，判断是否存在要删除的class，
//   // 存在的话，将原来的class前后加上空格，然后使用字符串的replace方法进行替换
//   // 替换之后的结果给到元素的className上即可
//   if (hasClass(ele, className)) {
//     // 方案一
//     var oldClassName = " " + ele.className + " ";
//     var re = new RegExp(` ${className}(?= )`, "g")
//     var newClassName = oldClassName.replace(`${className}`, "").trim();
//     ele.className = newClassName;

//   }
// }

// function hasClass(ele, className) {
//   var eleClassName = " " + ele.className + " ";
//   return eleClassName.includes(" " + className + " ")
// }
