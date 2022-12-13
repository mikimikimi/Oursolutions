$(function () {

    // $("a").on("click", function () {
    //   var hrefLink = $(this).attr("href");
    //   console.log(hrefLink);
    //   $("html,body").animate(
    //     {
    //       scrollTop: $(hrefLink).offset().top //直接到相對位置
    //     },
    //     800
    //   );
    //   return false;
    // });

    
    $("a").on("click", function () {
      var hrefLink = $(this).attr("href");
      console.log(hrefLink);
      $("html,body").animate(
        {
          scrollTop: $(hrefLink).offset().top -50 //直接到相對位置
        },
        800);
      return false;
    });
    
    
    $(document).ready(function () {
        // 捲軸偵測距離頂部超過 '數字' 才顯示按鈕
        $(window).scroll(function () {
          if ($(window).scrollTop() > 500) {
            if ($(".toTopBtn").hasClass("hide")) {
              $(".toTopBtn").toggleClass("hide");
            }
          } else {
            $(".toTopBtn").addClass("hide");
          }
        });
      
        // 點擊按鈕回頂部
        $(".toTopBtn").on("click", function (event) {
          $("html, body").animate(
            {
              scrollTop: 0
            },
            500 // 回頂部時間為 500 毫秒
          );
        });
      });
    
})

