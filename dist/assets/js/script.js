"use strict";

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
  var swiper = new Swiper(".js-mv-swiper", {
    loop: true,
    // ループ有効
    speed: 6000,
    // ループの時間
    allowTouchMove: false,
    // スワイプ無効
    autoplay: {
      delay: 0 // 途切れなくループ
    }
  });

  // campaignスライダー
  var campaignSwiper = new Swiper(".js-campaign-swiper", {
    loop: true,
    // ループ
    speed: 1500,
    // 少しゆっくり(デフォルトは300)
    slidesPerView: 1.25,
    // 一度に表示する枚数
    breakpoints: {
      1024: {
        slidesPerView: 2.5,
        // 一度に表示する枚数
        spaceBetween: 40 // スライド間の距離
      }
    },

    spaceBetween: 24,
    // スライド間の距離
    autoplay: {
      // 自動再生
      delay: 1000,
      // 1秒後に次のスライド
      disableOnInteraction: false // 矢印をクリックしても自動再生を止めない
    },

    // 前後の矢印
    navigation: {
      nextEl: ".js-campaign-button-next",
      prevEl: ".js-campaign-button-prev"
    }
  });

  // page-topボタン
  $(function () {
    var pageTop = $(".js-page-top");
    pageTop.hide();
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        pageTop.fadeIn();
      } else {
        pageTop.fadeOut();
      }
    });
    pageTop.click(function () {
      $("body, html").animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    // フッター手前でストップ
    $(".js-page-top").hide();
    $(window).on("scroll", function () {
      var scrollHeight = $(document).height();
      var scrollPosition = $(window).height() + $(window).scrollTop();
      var footHeight = $("footer").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
        // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
        $(".js-page-top").css({
          position: "absolute",
          bottom: footHeight + 0
        });
      } else {
        $(".js-page-top").css({
          position: "fixed",
          bottom: "0"
        });
      }
    });
  });
});