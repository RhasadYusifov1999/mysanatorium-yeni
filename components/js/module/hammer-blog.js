const hammer_item_5 = document.querySelector('.blog-hammer');
let hammer_element_5 = new Hammer(hammer_item_5);
hammer_element_5.on('pan', function(ev){
    slickControl_5(ev.distance, ev.additionalEvent);
});


function slickControl_5(payload, x){
    if(payload < 120){
        if(x == "panright"){
            $('.blog-hammer').animate({
                marginLeft: payload + "px"
            },0)
        }
        else if(x == "panleft"){
            $('.blog-hammer').animate({
                marginLeft: - payload + "px"
            },0);
        }
        else{}
    }
    else{
       
    }
}


let countSlider_5 = 0;
function prevSpa_5(){
    let width = +$('.blog-hammer .flex-hammer-item').css('width').split("px")[0]
    if(countSlider_5 > 0){
        countSlider_5--;
        $('.blog-hammer').animate({
            left: - width * countSlider_5 + "px"
        },200);
    }
    else{}
    controlCircleSpa_5();
}

function nextSpa_5(){
    let length = $('.blog-hammer .flex-hammer-item').length;
    let width = +$('.blog-hammer .flex-hammer-item').css('width').split("px")[0]
    if(countSlider_5 < length -1){
        countSlider_5++;
        $('.blog-hammer').animate({
            left: - width * countSlider_5 + "px"
        },200);
    }
    else{}
    controlCircleSpa_5();
}


hammer_element_5.on('panend', function(ev){
    if(ev.additionalEvent == "panleft"){
        nextSpa_5();
    }
    else if(ev.additionalEvent == "panright"){
        prevSpa_5();
    }
    else{}
    $('.blog-hammer').animate({
        marginLeft: "0px"
    },250);
});


function controlCircleSpa_5(){
    $('.blog-cirlce span').removeClass('active');
    $('.blog-cirlce span:eq('+countSlider_5+')').addClass('active');
}