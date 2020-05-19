const hammer_item = document.querySelector('.spa-hammer');
let hammer_element = new Hammer(hammer_item);
hammer_element.on('pan', function(ev){
    slickControl(ev.distance, ev.additionalEvent);
});


function slickControl(payload, x){
    if(payload < 120){
        if(x == "panright"){
            $('.spa-hammer').animate({
                marginLeft: payload + "px"
            },0)
        }
        else if(x == "panleft"){
            $('.spa-hammer').animate({
                marginLeft: - payload + "px"
            },0);
        }
        else{}
    }
    else{
       
    }
}


let countSlider = 0;
function prevSpa(){
    let width = +$('.spa-hammer .flex-hammer-item').css('width').split("px")[0]
    if(countSlider > 0){
        countSlider--;
        $('.spa-hammer').animate({
            left: - width * countSlider + "px"
        },200);
    }
    else{}
    controlCircleSpa();
}

function nextSpa(){
    let length = $('.spa-hammer .flex-hammer-item').length;
    let width = +$('.spa-hammer .flex-hammer-item').css('width').split("px")[0]
    if(countSlider < length -1){
        countSlider++;
        $('.spa-hammer').animate({
            left: - width * countSlider + "px"
        },200);
    }
    else{}
    controlCircleSpa();
}


hammer_element.on('panend', function(ev){
    if(ev.additionalEvent == "panleft"){
        nextSpa();
    }
    else if(ev.additionalEvent == "panright"){
        prevSpa();
    }
    else{}
    $('.spa-hammer').animate({
        marginLeft: "0px"
    },250);
});


function controlCircleSpa(){
    $('.spa-circle span').removeClass('active');
    $('.spa-circle span:eq('+countSlider+')').addClass('active');
}