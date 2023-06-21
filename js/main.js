//메인메뉴의 움직이는 바

//자바스크립트에서는 .addevnetlistner / 아래는 제이쿼리
$('.gnb li a').mouseenter(function(){
    let bar=$(this).position().left;
    console.log(bar)
    let widNum=$(this).width();
    //$('.bar').animate({실행문},시간)
    $('.bar').animate({
        'left':bar + "px",
        'width':widNum + "px",
        'opacity':1
    },300)
})

$('.gnb').mouseleave(function(){
    $('.bar').animate({
        'left':0,
        'width':0,
        'opacity':0
    },10)
})


//전체화면 애니메이션 (스크롤라.js사이트 - Custom settings 복붙)
$('.animate').scrolla({
    // default
    mobile: false, // 모바일 버전에서 활성화
    once: false, // 스크롤시 한 번 또는 여러번 실행 설정
    animateCssVersion: 4 // animate.css 버전 (3 or 4)
});


//menuOpen
//$('.menuOpen .open').on('click',function(){})
$('.menuOpen .open').click(function(e){
    e.preventDefault()
    $('.menuOpen .menuWrap').addClass('on')
});
$('.menuWrap .close').click(function(e){
    e.preventDefault()
    $('.menuOpen .menuWrap').removeClass('on')
  });

  $('.menuWrap ul li').click(function(e){
    e.preventDefault()
    $('.menuOpen .menuWrap').removeClass('on')
  });