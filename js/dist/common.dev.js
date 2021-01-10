"use strict";

$(function () {
  // 图片懒加载
  FunLazy({
    autoCheckChange: true,
    // effect: "fadeIn",
    useErrorImagePlaceholder: true // onSuccess(elem, src) {
    //     console.log(elem, src);
    // }

  }); // 手机子菜单

  $('.mobile .nav-m ul li p span').click(function () {
    $(this).parent().parent().toggleClass('active');
    $(this).parent().parent().siblings().removeClass('active');
  });
  $('.menu').click(function () {
    $('.mobile').slideToggle();
  }); //调节mobile

  $(window).resize(function () {
    if ($(window).width() > 1024) {
      $('.mobile').hide();
    }
  });
});