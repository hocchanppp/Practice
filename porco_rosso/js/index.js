$(function(){

const topBtn = $('#page_top');
topBtn.hide();

$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        topBtn.fadeIn();
    }else{
        topBtn.fadeOut();
    }
});

topBtn.click(function(){
    $('body,html').animate({scrollTop:0}, 500);
    return false;
});

  const header = $('#header');

  $('#anchor_navi a[href^="#"]').on('click', function() {
    const gap = header.outerHeight();
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href == "#" || href == "" ? "html" : href);
    const position = target.offset().top - gap;

    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

 
});