$(document).ready(function(){

  // 헤더 서브메뉴 오버 이벤트
  // menu-wrap
  $('#header .container .nav > li').mouseenter(function(){
    $(this).find('.sub-menu').stop().slideDown();
  });

  $('#header .container .nav > li').mouseleave(function(){
    $(this).find('.sub-menu').stop().slideUp();
  });

  // 헤더 아이콘 이미지 변환
  $(".sign-wrap .sign-in").mouseenter(function(){
    $(".sign-wrap .sign-in img").attr("src","assets/img/sign_in_r.svg")
  });

  $(".sign-wrap .sign-in").mouseleave(function(){
    $(".sign-wrap .sign-in img").attr("src","assets/img/sign_in.svg")
  });

  $(".sign-wrap .sign-up").mouseenter(function(){
    $(".sign-wrap .sign-up img").attr("src","assets/img/sign_up_r.svg")
  });

  $(".sign-wrap .sign-up").mouseleave(function(){
    $(".sign-wrap .sign-up img").attr("src","assets/img/sign_up.svg")
  });

  // 사이트맵 
  $('.site-map .menu-wrap').on('click',function(){
    $('.drop-menu').stop().slideUp();
    $(this).find('.drop-menu').stop().slideToggle();
  });
  // 사이트맵 메뉴바
  $("#header .container .menu-bar").on("click",function(){
    $(".site-map").addClass("active");
    $(".background").addClass("active");
    $('html, body').css({'overflow': 'hidden'});
  });
  // 사이트맵 닫기버튼
  $(".site-map .close-btn").on("click",function(){
    $(".site-map").removeClass("active");
    $(".background").removeClass("active");
    $('html, body').css({'overflow': 'visible'});
  });
  // 사이트맵 백그라운드 클릭시 이벤트
  $('.background').on('click',function(){
    $('.site-map').removeClass('active');
    $(this).removeClass('active');
    $('html, body').css({'overflow': 'visible'});
  });
  // 사이트맵 윈도우 리사이즈
  $(window).resize(function(){
    if($(this).width() > 1000){
      $(".site-map").removeClass("active");
      $(".background").removeClass("active");
      $('html, body').css({'overflow': 'visible'});
    }
  });

  // 섹션 비쥬얼2 nav 텍스트 변환 
  var a = $(".visual2 .container .visual-bot .nav-menu a");

  a.mouseenter(function(){
    $(this).addClass("active");
    a.not($(this)).removeClass("active")
  });

  // 섹션 비쥬얼2 오버 이미지 이벤트
  // coffee 오버시 이미지/텍스트 변환
  $(".visual2 .container .visual-bot .nav-menu .coffee").mouseenter(function(){
    $("a.wrap1 img").attr("src", "assets/img/mallProdut_1.png");
    $("a.wrap1 .menu-title").text("헤이즐넛 초코칩 할리치노");
    $("a.wrap1 .menu-price").text("4,500원");
    $("a.wrap2 img").attr("src", "assets/img/mallProdut_2.png");
    $("a.wrap2 .menu-title").text("콜드브루 모카 할리치노");
    $("a.wrap2 .menu-price").text("6,400원");
    $("a.wrap3 img").attr("src", "assets/img/mallProdut_3.png");
    $("a.wrap3 .menu-title").text("콜드브루 딜라이트");
    $("a.wrap3 .menu-price").text("6,500원");				
  });
  // tea 오버시 이미지/텍스트 변환
  $(".visual2 .container .visual-bot .nav-menu .tea").mouseenter(function(){
    $("a.wrap1 img").attr("src", "assets/img/mallProdut_4.png");
    $("a.wrap1 .menu-title").text("얼그레이");
    $("a.wrap1 .menu-price").text("4,700원");
    $("a.wrap2 img").attr("src", "assets/img/mallProdut_5.png");
    $("a.wrap2 .menu-title").text("페퍼민트");
    $("a.wrap2 .menu-price").text("4,800원");
    $("a.wrap3 img").attr("src", "assets/img/mallProdut_6.png");
    $("a.wrap3 .menu-title").text("홍자몽차");
    $("a.wrap3 .menu-price").text("5,300원");		
  });
  // bread 오버시 이미지/텍스트 변환
  $(".visual2 .container .visual-bot .nav-menu .bread").mouseenter(function(){
    $("a.wrap1 img").attr("src", "assets/img/mallProdut_7.png");
    $("a.wrap1 .menu-title").text("더블 햄치즈 크루아상");
    $("a.wrap1 .menu-price").text("6,000원");
    $("a.wrap2 img").attr("src", "assets/img/mallProdut_8.png");
    $("a.wrap2 .menu-title").text("콰트로 치즈 프레즐");
    $("a.wrap2 .menu-price").text("4,900원");
    $("a.wrap3 img").attr("src", "assets/img/mallProdut_9.png");
    $("a.wrap3 .menu-title").text("자이언트 페퍼로니 프레즐");
    $("a.wrap3 .menu-price").text("4,900원");					
  });
  // cake 오버시 이미지/텍스트 변환
  $(".visual2 .container .visual-bot .nav-menu .cake").mouseenter(function(){
    $("a.wrap1 img").attr("src", "assets/img/mallProdut_10.png");
    $("a.wrap1 .menu-title").text("상큼한 복숭아 생크림");
    $("a.wrap1 .menu-price").text("6,300원");
    $("a.wrap2 img").attr("src", "assets/img/mallProdut_11.png");
    $("a.wrap2 .menu-title").text("블루베리 치즈케이크");
    $("a.wrap2 .menu-price").text("6,300원");
    $("a.wrap3 img").attr("src", "assets/img/mallProdut_12.png");
    $("a.wrap3 .menu-title").text("딸기 치즈케익 쏘스윗박스");
    $("a.wrap3 .menu-price").text("6,500원");						
  });

  // B2B 슬라이드 
  var swiper = new Swiper('.b2bSwiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //   delay: 3000,
    // },
    speed: 1000,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // 사이드 탑 버튼
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $(".side-btn .top-btn").show();
    } else {
      $(".side-btn .top-btn").hide();
    };
  });

  $(".side-btn .top-btn").click(function(){
    $("html, body").animate({scrollTop: 0}, 400);
  });

});

