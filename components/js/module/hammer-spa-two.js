const hammer_item_2 = document.querySelector('.spa-hammer-two');
let hammer_element_2 = new Hammer(hammer_item_2);
hammer_element_2.on('pan', function(ev){
    slickControl_2(ev.distance, ev.additionalEvent);
});


function slickControl_2(payload, x){
    if(payload < 120){
        if(x == "panright"){
            $('.spa-hammer-two').animate({
                marginLeft: payload + "px"
            },0)
        }
        else if(x == "panleft"){
            $('.spa-hammer-two').animate({
                marginLeft: - payload + "px"
            },0);
        }
        else{}
    }
    else{
       
    }
}


let countSlider_2 = 0;
function prevSpa_2(){
    let width = +$('.spa-hammer-two .flex-hammer-item').css('width').split("px")[0]
    if(countSlider_2 > 0){
        countSlider_2--;
        $('.spa-hammer-two').animate({
            left: - width * countSlider_2 + "px"
        },200);
    }
    else{}
    controlCircleSpa_2();
}

function nextSpa_2(){
    let length = $('.spa-hammer-two .flex-hammer-item').length;
    let width = +$('.spa-hammer-two .flex-hammer-item').css('width').split("px")[0]
    if(countSlider_2 < length -1){
        countSlider_2++;
        $('.spa-hammer-two').animate({
            left: - width * countSlider_2 + "px"
        },200);
    }
    else{}
    controlCircleSpa_2();
}


hammer_element_2.on('panend', function(ev){
    if(ev.additionalEvent == "panleft"){
        nextSpa_2();
    }
    else if(ev.additionalEvent == "panright"){
        prevSpa_2();
    }
    else{}
    $('.spa-hammer-two').animate({
        marginLeft: "0px"
    },250);
});


function controlCircleSpa_2(){
    $('.spa-circle-two span').removeClass('active');
    $('.spa-circle-two span:eq('+countSlider_2+')').addClass('active');
}