$(document).ready(function(){
    
    // scroll change color
    $(window).scroll(function(){
        if(this.scrollY > 20 || this.scrollY < 0) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.menu').on('click', () => {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass("active");
      });
});