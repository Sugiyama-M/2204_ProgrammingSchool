  $(function(){

    //pagetop
    $('#pagetop').hide();
    $(window).scroll(function(){
      if($(this).scrollTop() > 300){
        $('#pagetop').fadeIn();
      }
      else{
        $('#pagetop').fadeOut();
      }
    });

    //smooth scroll
    $('a[href^="#"]').click(function() {
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });

    //sp menu
    
    var w = $(window).width();
    if (w <= 640) {
        $('#nav_btn').click(function(){
            $('header').toggleClass('nav_open'); 
            $('#gnav').slideToggle();
        });
        $('#gnav a').click(function(){
            $('#nav_btn').click();
        });
    } else {
        $('#gnav').show();
    }
    
  });