const hammer_item_4 = document.querySelector('.spa-video-two');
let hammer_element_4 = new Hammer(hammer_item_4);
hammer_element_4.on('pan', function(ev){
    slickControl_4(ev.distance, ev.additionalEvent);
});


function slickControl_4(payload, x){
    if(payload < 120){
        if(x == "panright"){
            $('.spa-video-two').animate({
                marginLeft: payload + "px"
            },0)
        }
        else if(x == "panleft"){
            $('.spa-video-two').animate({
                marginLeft: - payload + "px"
            },0);
        }
        else{}
    }
    else{
       
    }
}


let countSlider_4 = 0;
function prevSpa_4(){
    let width = +$('.spa-video-two .flex-hammer-item').css('width').split("px")[0]
    if(countSlider_4 > 0){
        countSlider_4--;
        $('.spa-video-two').animate({
            left: - width * countSlider_4 + "px"
        },200);
    }
    else{}
    controlCircleSpa_4();
}

function nextSpa_4(){
    let length = $('.spa-video-two .flex-hammer-item').length;
    let width = +$('.spa-video-two .flex-hammer-item').css('width').split("px")[0]
    if(countSlider_4 < length -1){
        countSlider_4++;
        $('.spa-video-two').animate({
            left: - width * countSlider_4 + "px"
        },200);
    }
    else{}
    controlCircleSpa_4();
}


hammer_element_4.on('panend', function(ev){
    if(ev.additionalEvent == "panleft"){
        nextSpa_4();
    }
    else if(ev.additionalEvent == "panright"){
        prevSpa_4();
    }
    else{}
    $('.spa-video-two').animate({
        marginLeft: "0px"
    },250);
});


function controlCircleSpa_4(){
    $('.video-circle-two span').removeClass('active');
    $('.video-circle-two span:eq('+countSlider_4+')').addClass('active');
}