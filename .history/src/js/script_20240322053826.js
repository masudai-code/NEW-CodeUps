jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  //ドロワーメニュー
  $(".js-hamburger").click(function () {
    if ($(".js-hamburger").hasClass("is-active")) {
      $(".js-hamburger").removeClass("is-active");
      $(".js-sp-nav").fadeOut(300);
    } else {
      $(".js-hamburger").addClass("is-active");
      $(".js-sp-nav").fadeIn(300);
    }
  });

  // mvスライダー
  const swiper = new Swiper(".js-mv-swiper", {
    loop: true, // ループ有効
    speed: 6000, // ループの時間
    allowTouchMove: false, // スワイプ無効
    autoplay: {
      delay: 0, // 途切れなくループ
    },
  });

  // campaignスライダー
  

  // page-topボタン
  $(function () {
    const pageTop = $(".js-page-top");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    pageTop.click(function () {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
    
    // フッター手前でストップ
    $(".js-page-top").hide();
    $(window).on("scroll", function () {
     scrollHeight = $(document).height();
      scrollPosition = $(window).height() + $(window).scrollTop();
    footHeight = $("footer").innerHeight();
    if (scrollHeight - scrollPosition <= footHeight) {
    // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
      $(".js-page-top").css({
        position: "absolute",
        bottom: footHeight,
      });
    } else {
      $(".js-page-top").css({
        position: "fixed",
        bottom: "0",
      });
    }
  });
});
