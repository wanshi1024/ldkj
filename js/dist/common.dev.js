"use strict";

$(function () {
  // 图片懒加载
  FunLazy({
    autoCheckChange: true,
    // effect: "fadeIn",
    useErrorImagePlaceholder: true // onSuccess(elem, src) {
    //     console.log(elem, src);
    // }

  });
  var wow = new WOW({
    boxClass: 'wow',
    // animated element css class (default is wow)
    animateClass: 'animated',
    // animation css class (default is animated)
    offset: 0,
    // distance to the element when triggering the animation (default is 0)
    mobile: true,
    // trigger animations on mobile devices (default is true)
    live: true,
    // act on asynchronously loaded content (default is true)
    callback: function callback(box) {// the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window

  });
  wow.init(); // 手机子菜单

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