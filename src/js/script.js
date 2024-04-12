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
  const campaignSwiper = new Swiper(".js-campaign-swiper", {
    loop: true, // ループ
    speed: 3000, // 少しゆっくり(デフォルトは300)
    slidesPerView: 1.25, // 一度に表示する枚数
    breakpoints: {
      1024: {
        slidesPerView: 3.3, // 一度に表示する枚数
        spaceBetween: 40, // スライド間の距離
      },
    },
    spaceBetween: 24, // スライド間の距離
    autoplay: {
      // 自動再生
      delay: 1000, // 1秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    // 前後の矢印
    navigation: {
      nextEl: ".js-campaign-button-next",
      prevEl: ".js-campaign-button-prev",
    },
  });

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
      let scrollHeight = $(document).height();
      let scrollPosition = $(window).height() + $(window).scrollTop();
      let footHeight = $("footer").innerHeight();
      if (scrollHeight - scrollPosition <= footHeight) {
        // ページトップボタンがフッター手前に来たらpositionとfixedからabsoluteに変更
        $(".js-page-top").css({
          position: "absolute",
          bottom: footHeight + 0,
        });
      } else {
        $(".js-page-top").css({
          position: "fixed",
          bottom: "0",
        });
      }
    });
  });

  // colorbox アニメーション
  //要素の取得とスピードの設定
  var box = $(".js-colorbox"),
    speed = 700;

  //.colorboxの付いた全ての要素に対して下記の処理を行う
  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    //inviewを使って背景色が画面に現れたら処理をする
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  // const box = $(".js-colorbox");
  // const speed = 700;

  // box.each(function () {
  //   $(this).append('<div class="color"></div>');
  //   const color = $(this).find($(".color"));
  //   const image = $(this).find("img");
  //   let counter = 0; // この変数は値が変わる可能性があるのでletを使用

  //   image.css("opacity", "0");
  //   color.css("width", "0%");
  //   color.on("inview", function () {
  //     if (counter == 0) {
  //       $(this)
  //         .delay(200)
  //         .animate({ width: "100%" }, speed, function () {
  //           image.css("opacity", "1");
  //           $(this).css({ left: "0", right: "auto" });
  //           $(this).animate({ width: "0%" }, speed);
  //         });
  //       counter = 1; // ここでcounterの値を変更している
  //     }
  //   });
  // });
});
