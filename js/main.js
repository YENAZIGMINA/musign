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



//background color 변경 (window는 최고조상이라 '' 필요없지만 body는 넣어야 함)
$(window).scroll(function(){
    //$(this)는 window
    let scrollTop=$(this).scrollTop();
    console.log(scrollTop)
    let offset=$('.service').offset().top - 300;
    //offset --> service영역의 위 높이값 (service의 머리가 닿는 값 = 위 요소들의 높이값)
    //-300한 이유 --> 스크롤 내릴때 미리 변경되기 위해 높이값 조절
    
    if(scrollTop>offset){
        $('body').addClass('on')
    }else{
        $('body').removeClass('on')
    }
});