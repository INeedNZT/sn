define(["jquery"], function($) {
  return function() {
    $(function() {
      var swiper = new Swiper(".banner", {
        speed: 1000,
        loop: true,
        observer: true,
        observeParents: true,
        autoplayDisableOnInteraction: false,
        autoplay: 5000
      });
      // 自定义前进和后退按钮
     $(".swiper-button-prev").on("click", function() {
       swiper.slidePrev();
     });
     $(".swiper-button-next").on("click", function() {
       swiper.slideNext();
     }); 
    });

    this.$parent._data.isSubTitle = false;
    return {
      banners: ["image/banner_1.jpg", "image/banner_2.jpg"],
    };
  };
});
