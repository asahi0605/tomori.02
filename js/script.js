$(function () {

  //ページ内スクロール
  var $nav = $(".header");

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});

// アコーディオン
let accordionDetails = '.js-details';
let accordionSummary = '.js-details-summary';
let accordionContent = '.js-details-content';
let speed = 300

$(accordionSummary).each(function() {
  $(this).on("click", function(event) {
  	// デフォルトの挙動を無効化
    event.preventDefault();
    // summaryにis-activeクラスを切り替え
    $(this).toggleClass("is-active");

    if ($(this).parent($(accordionDetails)).attr("open")) {
      // アコーディオンを閉じるときの処理
      $(this).nextAll($(accordionContent)).slideUp(speed, function() {
        // アニメーションの完了後にopen属性を取り除く
        $(this).parent($(accordionDetails)).removeAttr("open");
      });
    } else {
      // アコーディオンを開くときの処理
      // open属性を付ける
      $(this).parent($(accordionDetails)).attr("open", "true");
      // いったんdisplay:none;してからslideDownで開く
      $(this).nextAll($(accordionContent)).hide().slideDown(speed);
    }
  })
})