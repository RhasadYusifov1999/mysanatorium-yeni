let collectiveBox = document.querySelectorAll('.slider-collective').length;
let count_slider = 0;
if(collectiveBox > 0){
    resizeCollectiveSlider();
}
else{}

function resizeCollectiveSlider(){
    let width = document.querySelector('.slider-box-collective').clientWidth;
    let itemLength = document.querySelectorAll('.slider-box-collective .item-collective').length;
    $('.slider-box-collective').css('width', width * itemLength + "px");
    $('.item-collective').each(function(){
        $(this).css('width', width + "px");
    });
}



function nextCollective(){
    let itemLength = document.querySelectorAll('.slider-box-collective .item-collective').length;
    let width = document.querySelector('.slider-box-collective .item-collective').clientWidth;
    if(count_slider < itemLength-1 ){
        count_slider++;
        $('.slider-box-collective').animate({
            left: -width * count_slider + "px"
        },200);
    }
    else{}
}


function prevCollective(){
    let width = document.querySelector('.slider-box-collective .item-collective').clientWidth;
    if(count_slider > 0){
        count_slider--;
        $('.slider-box-collective').animate({
            left: -width * count_slider + "px"
        },200);
    }
    else{}
}