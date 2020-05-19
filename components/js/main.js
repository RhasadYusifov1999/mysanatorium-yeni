function openHeadMenu(){
    document.querySelector('.mobile-right-menu').classList.add('active');
    $('body').css('overflow', 'hidden');
}
function closeHeadMenu(){
    document.querySelector('.mobile-right-menu').classList.remove('active');
    $('body').css('overflow', 'auto');
}

function openFilter(payload){
    $('.item_filter').removeClass('active');
    $('.item_filter[data-item="'+payload+'"]').addClass('active');
}

function closeFilter(){
   setTimeout(function(){
      $('.item_filter').removeClass('active');
   },100);
}

$(document).click(function(event){
    let length = $(event.target).parents('.suply-box').length;
    if(length > 0){
        $('.suply-box').addClass('active');
    }
    else{
        $('.suply-box').removeClass('active');
    }
});

$('.item-module-suply li').click(function(){
    $('.selected-suply').html($(this).html());
    setTimeout(function(){
        $('.suply-box').removeClass('active');
    });
});

function openCustomSelect(thisIs){
    $(thisIs).parents('.cs').addClass('active');
}

function closeCustomSelect(){
    $('.cs').each(function(){
        $(this).removeClass('active');
    });
}

$(document).click(function(event){
    let length = $(event.target).parents('.cs').length;
    if(length < 1){
        closeCustomSelect();
    }
    else{
    }
});


function selectedCustomFun(){
    $('.content-selected-cs ul li').click(function(){
        $(this).parent().find('li').each(function(){
            $(this).removeAttr('data-selected');
        })
        $(this).attr('data-selected', 'selected');
        $(this).parentsUntil('.cs').parent().find('.text-cs').html($(this).html());
        closeCustomSelect();
    });
}
selectedCustomFun();

function add_people(thisIs){
    let component = '<div class="item-flex-control adult-box-item"> <p class="title-ifc"> </p><div class="auto-box"> <div class="cs"> <div class="popup-cs"> <div class="bg-cs" onclick="closeCustomSelect()"></div><div class="selected-item-cs"> <div class="selected-item-cs-head"> <p>Возраст ребёнка</p></div><div class="content-selected-cs"> <ul> <li>1-ёх разовое питание без лечения</li><li>2-ёх разовое питание без лечения</li><li data-selected>3-ёх разовое питание без лечения</li><li>4-ёх разовое питание без лечения</li><li>5-ёх разовое питание без лечения</li></ul> </div></div></div><div class="cs-head" onclick="openCustomSelect(this)"> <p class="text-cs">3-ёх разовое питание без лечения</p><i class="fa fa-angle-down" aria-hidden="true"></i> </div></div><div onclick="remove_appendix_item(this)" class="remove-event remove-item-control"> <i class="fa fa-close" aria-hidden="true"></i> </div></div></div>';
    let length = $(thisIs).parentsUntil('.box-content-people').parent().find('.adult-box .item-flex-control').length;
    if(length != 4){
        $(thisIs).parentsUntil('.box-content-people').parent().find('.adult-box').append(component);
        countEachLengthRoom();
        selectedCustomFun();
    }
    else{}
    mathPeopleRooms();
}

function remove_appendix_item(thisIs){
    setTimeout(function(){
        $(thisIs).parentsUntil('.item-flex-control').parent().remove();
        countEachLengthRoom();
        selectedCustomFun();
        countEachLengthChild();
        mathPeopleRooms();
    },50);
}


function countEachLengthRoom(){
    $('.room-parent-box .item-room').each(function(){
        let length = 0;
        $(this).find('.adult-box .item-flex-control').each(function(index){
             length = index +1;
             $(this).find('.title-ifc').html(length + " Взрослый");
        });
        let count = $(this).find('.adult-box .item-flex-control').length;
        if(count < 2){
            $(this).find('.adult-box .item-flex-control').addClass('visable-active');
        }
        else{
            $(this).find('.adult-box .item-flex-control').each(function(){
                $(this).removeClass('visable-active');
            });
        }
    });
}


function add_child(thisIs){
    let child_years_list = '';
    for(let i = 1; i<=18; i++){
        if(i == 12){
            child_years_list += "<li data-selected>"+i+' Лет</li>';
        }
        else{
            child_years_list += "<li>"+i+' Лет</li>';
        }
    }
    let length = $(thisIs).parentsUntil('.box-content-people').parent().find('.child-box .item-flex-control').length;

    if(length != 4){
        let component = ' <div class="item-flex-control child-box-item"> <p class="title-ifc"> </p><div class="auto-box"> <div class="cs"> <div class="popup-cs"> <div class="bg-cs" onclick="closeCustomSelect()"></div><div class="selected-item-cs"> <div class="selected-item-cs-head"> <p>Возраст ребёнка</p></div><div class="content-selected-cs"> <ul>'+child_years_list+'</ul> </div></div></div><div class="cs-head" onclick="openCustomSelect(this)"> <p class="text-cs"> 12 Лет </p><i class="fa fa-angle-down"></i> </div></div><div class="remove-item-control remove-event" onclick="remove_appendix_item(this)"> <i class="fa fa-close"></i> </div></div></div>';
        $(thisIs).parentsUntil('.box-content-people').parent().find('.child-box').append(component);
        selectedCustomFun();
        countEachLengthChild();
    }
    else{}
    mathPeopleRooms();
}


function countEachLengthChild(){
    $('.room-parent-box .item-room').each(function(){
        let length = 0;
        $(this).find('.child-box .item-flex-control').each(function(index){
             length = index +1;
             $(this).find('.title-ifc').html(length + " Ребёнок");
        });
    });
}

let cloneRoom = document.querySelector('.item-room').outerHTML;
function add_new_room(){
    let getLength = $('.room-parent-box .item-room').length;
    if(getLength < 4){
        document.querySelector('.room-parent-box').innerHTML += cloneRoom;
        roomLength();
        room_remove_control();
        selectedCustomFun();

    }
    else{}
}

function remove_room(thisIs){
    setTimeout(function(){
        $(thisIs).parentsUntil('.item-room').parent().remove();
        roomLength();
        room_remove_control();
        mathPeopleRooms();
    },50);
}

function room_remove_control(){
    let getLength = $('.room-parent-box .item-room').length;
    if(getLength < 2){
         $('.room-parent-box .item-room:eq(0)').addClass('no-remove');
    }
    else{
        $('.room-parent-box .item-room:eq(0)').removeClass('no-remove');
    }
}
room_remove_control();

function roomLength(){
    $('.room-parent-box .item-room').each(function(index){
        $(this).find('.room-head .title-head').html('Номер ' + parseInt(index + 1));
    });
}

function open_people_list(){
    $('.people-count').addClass('active');
}


$(document).click(function(event){
    let length = $(event.target).parents('.people-count').length;
    let getClass = $(event.target).hasClass('remove-event');
    if(length < 1 && !getClass){
        $('.people-count').each(function(){
            $(this).removeClass('active');
        });
        mathPeopleRooms();
    }
    else{
    }
});

function close_people_list(){
    setTimeout(function(){
        $('.people-count').each(function(){
            $(this).removeClass('active');
        });
        mathPeopleRooms();
    });
}


function mathPeopleRooms(){
    let roomLength = $('.room-parent-box .item-room').length;
    let adultLength = $('.room-parent-box .adult-box-item').length;
    let childLength = $('.room-parent-box .child-box-item').length;
    $('.count-selected').html(
        adultLength + " взрослых - "+
        childLength + " ребёнок - "+
        roomLength + " номера"
    );
}

$('.search-filter-box ul li').click(function(){
    $('.src-inp').attr('value', $(this).html());
});