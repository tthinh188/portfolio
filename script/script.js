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

function animate_string(id) 
{
    var element = document.getElementById(id);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

setInterval(function () 
{
 text = text[text.length - 1] + text.substring(0, text.length - 1);
  textNode.data = text;
}, 300);
}