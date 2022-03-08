$(function() {

    $( '.navbar-popup--close' ).click( function() {       
         $('.container-fluid.navbar-popup').css("display","none");   
        
        
        });
    $( '.navbar-popup--open' ).click( function() {        $('.container-fluid.navbar-popup').css("display","block");    });



//::-webkit-scrollbar{ display: none;}


    
});


    //   /* START 게시판 토글 클래스 순서바뀌면 안됩니다. */
    //   $( 'li .list--b__view' ).hide(); 
    //   $( 'li.togglelist__selected .list--b__view' ).show();
    //   $( '.section-content__inner-list--b>ul>li .list--b__a' ).click( function() {
    //       $(this).parent('li').toggleClass( 'togglelist__selected' );
    //       $(this).parent('li').children( '.list--b__view' ).slideToggle( '600' );
    //       });
    //   /* END 게시판 토글 클래스 순서바뀌면 안됩니다. */
    //공지배너 임시닫기 지원
    // $(".header__alert__close").click(function() {  $('.header__alert').slideToggle('fast' )   });	


/*햄버거 메뉴 열기닫기*/
    // $(".header__menu__left").click(function() {
    //     $(".nav__bg-curtain").css("display","block");
    //     $(".nav__bg-curtain").animate({  opacity: "0.9" },400)
    //     $(".nav__body").animate({  left: "0" },400)
    //     });		
