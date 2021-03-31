$(function(){


  
  // #から始まるURLがクリックされた時
  jQuery('a[href^="#"]').click(function() {
    // 移動速度を指定（ミリ秒）
    let speed = 500;
    // hrefで指定されたidを取得
    let id = jQuery(this).attr("href");
    // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
    let target = jQuery("#" == id ? "html" : id);
    // ページのトップを基準にターゲットの位置を取得
    let position = jQuery(target).offset().top;
    // ターゲットの位置までspeedの速度で移動
    jQuery("html, body").animate(
      {
        scrollTop: position - $( '#js-header ').outerHeight()
      },
      speed
      );
      return false;
    });

     
    

    // wow.js
    new WOW().init();

    $(function(){
        $('.faqs-box-q').click(function(){
          $(this).next().slideToggle();
          $(this).children(".faqs-box-icon").toggleClass('is-open');
        });
    });    
    


  /*=========================================================================
  # swiper
  ===========================================================================*/
  let slider1 = new Swiper('.slider1', {
    // Optional parameters
    slidesPerView: 1.3,
    // centeredSlides: true,
    direction: 'horizontal',
    speed: 1000,
    loop: true,
    spaceBetween: 30,
  
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  
    breakpoints: {
      768: {
        slidesPerView: 2.85,
        
      },
    },
  
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    
  
  });

  // google-form
  let $form = $('#js-form')
  $form.submit(function(e) { 
    $.ajax({ 
    url: $form.attr('action'), 
    data: $form.serialize(), 
    type: "POST", 
    dataType: "xml", 
    statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
        }, 
        200: function() { 
          //送信に失敗したときの処理 
        }
      } 
    });
    return false; 
  }); 

  // formの入力確認
  let $submit = $('#js-submit')
  $('#js-form input, #js-form textarea').on('change', function(){
    if(
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form textarea').val() !== "" &&
      $('#js-form input[name="entry.1376999638"]').prop('checked')  === true
    ) {
      $submit.addClass( '-active')
    } else {
      $submit.removeClass( '-active')
    }
  })

});

$(function(){
  // navigation
  var $header = $( '#js-header' );

  
  $( '#js-toggle' ).on( 'click', function(e) {
    e.preventDefault();
    $header.toggleClass( 'add-active' );
  });

  $( '.js-navLink, #js-overlay' ).on( 'click', function(e) {
    e.preventDefault();
    $header.removeClass( 'add-active' );
  });

  var pcWidth = window.matchMedia( 'screen and (min-width: 769px)' );
  function checkBreakPoint() {
    if( pcWidth.matches ) {
      $header.removeClass( 'add-active' );
    }
  }
  pcWidth.addListener( checkBreakPoint );
  checkBreakPoint();
  
});
