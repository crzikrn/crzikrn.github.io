$(document).ready(function(){

    $('.image').each(function() {
        animationHover(this, 'pulse');
        animationSome(this, 'bounce');
    });

});

function animationHover(element, animation){
    element = $(element);
    element.hover(
        function() {
            element.addClass('animated infinite ' + animation);
        },
        function(){
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated infinite ' + animation);
            }, 10);
        });
}

function animationSome(element, animation){
  element = $(element);
  element.delay(1000).addClass('animated infinite' + animation);


}
