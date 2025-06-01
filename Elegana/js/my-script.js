//Sticky Nav

$(document).on('scroll', function(){
   if($(this).scrollTop()>0){
       $('.main-header-section').addClass('sticky');
   }
    
    else{
        $('.main-header-section').removeClass('sticky');
    }
});

//Sticky Nav Mobile

//$(document).on('scroll', function(){
//   if($(this).scrollTop()>0){
//       $('.main-header-section').addClass('mb-sticky');
//   }
//    
//    else{
//        $('.main-header-section').removeClass('mb-sticky');
//    }
//});




//banner shifting

//$(document).on('scroll', function(){
//   if($(this).scrollTop()>54){
//       $('.banner-section').addClass('desk-banner-top');
//   }
//    
//    else{
//        $('.banner-section').removeClass('desk-banner-top');
//    }
//});

//ScrollTop
$(document).on('click', '#backtotop', function () {
    $('html,body').animate({
        scrollTop: 0
    }, 600);
    return false;
});
//Hide&Show
$(document).scroll(function () {
    var scrollPos = $(this).scrollTop();
    if (scrollPos < 200) {
        $('#backtotop').addClass('hide');
    } else {
        $('#backtotop').removeClass('hide');
    }
});




//Gallery1 zoom effect

$(function() {

    $('.bimg').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

  });


//Gallery2 zoom effect

$(function() {

    $('.bimg2').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });

  });