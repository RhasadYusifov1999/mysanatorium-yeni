const hammer_item_3 = document.querySelector('.hammer-site');
let hammer_element_3 = new Hammer(hammer_item_3);
hammer_element_3.on('pan', function(ev){
    slickControl_3(ev.distance, ev.additionalEvent);
});


function slickControl_3(payload, x){
    if(payload < 120){
        if(x == "panright"){
            $('.hammer-site').animate({
                marginLeft: payload + "px"
            },0)
        }
        else if(x == "panleft"){
            $('.hammer-site').animate({
                marginLeft: - payload + "px"
            },0);
        }
        else{}
    }
    else{
       
    }
}


let countSlider_3 = 0;
function prevSpa_3(){
    let width = +$('.hammer-site .flex-hammer-item').css('width').split("px")[0]
    if(countSlider_3 > 0){
        countSlider_3--;
        $('.hammer-site').animate({
            left: - width * countSlider_3 + "px"
        },200);
    }
    else{}
    controlCircleSpa_3();
}

function nextSpa_3(){
    let length = $('.hammer-site .flex-hammer-item').length;
    let width = +$('.hammer-site .flex-hammer-item').css('width').split("px")[0]
    if(countSlider_3 < length -1){
        countSlider_3++;
        $('.hammer-site').animate({
            left: - width * countSlider_3 + "px"
        },200);
    }
    else{}
    controlCircleSpa_3();
}


hammer_element_3.on('panend', function(ev){
    if(ev.additionalEvent == "panleft"){
        nextSpa_3();
    }
    else if(ev.additionalEvent == "panright"){
        prevSpa_3();
    }
    else{}
    $('.hammer-site').animate({
        marginLeft: "0px"
    },250);
});


function controlCircleSpa_3(){
    $('.hammer-circle-site span').removeClass('active');
    $('.hammer-circle-site span:eq('+countSlider_3+')').addClass('active');
}