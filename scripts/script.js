var url = "";
var currenthash = "";
var pageId = "";
var pageClass = "";
var ishandheld = false;

$(function(){
    url = window.location.href;
    currenthash = window.location.hash.substr(1);
    pageId = $('body').attr('id');
    pageClass = $('body').attr('class');
    ishandheld = isHandheld();

    if(pageClass === undefined){
        pageClass = "";
    }

    /****ON LOADS***/
    if (!window.location.origin) {
      window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
    }
    if(msieversion() != false){
        $('html').addClass('ie');
    }
    if(isIOS()){
        $('html').addClass('ios');
    }
    if(isIpad()){
        $('html').addClass('ipad-device');
    }
    if(isHandheld()){
        $('html').addClass('handheld');
    }

    //resize_images_by_ratio();


    /***ON LOADS***/

    /************ Capture document click **************/
    $('html').click(function(e){

    });
    /********** END Capture document click ************/

    /***************** window resize *******************/
    $(window).resize(function(){

    });
    /*************** END window resize *****************/

    /*************** On Clicks *****************/

    /************* END On Clicks ***************/


    /*************** On Focus *****************/
    /************* END On Focus ***************/

    /************ Handle Keydown  *****************/
    $(document).keydown(function(e) {
        // ESCAPE
        if (e.keyCode == 27) {
        }
        //LEFT
        if (e.keyCode == 37) {
        }
        //RIGHT
        if (e.keyCode == 39) {
        }
        // ENTER
        if(e.which == 13) {
        }
    });

    $("input.numbersonly").keydown(function (event) {
        if (event.keyCode == 13 || event.keyCode == 9 || (event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 96 && event.keyCode <= 105)) // 0-9 or numpad 0-9
       {
       }
       else if (event.keyCode != 8 && event.keyCode != 46 && event.keyCode != 37 && event.keyCode != 39) // not esc, del, left or right
       {
           event.preventDefault();
       }
    });
    /********** END Handle Keydown ***************/


    /************ Capture Scroll *****************/
    $(window).scroll(function() {
        var scrollTop = $(this).scrollTop();


    });
    /********** END Capture Scroll ***************/


    /************ LOAD MAP *****************/

    /********** END LOAD MAP ***************/

});
//******* FUNCTIONS HERE *******//




//******* DEFAULT FUNCTIONS *******//
// function resize_images_by_ratio(){
//     $('.resize-inner-image').each(function(){
//         if($(this).find('img').length == 1){
//             $(this).find('img').removeClass('extra-width');
//             $(this).find('img').removeClass('extra-height');
//             perfectRatio = $(this).outerHeight(true) / $(this).outerWidth(true);
//             originalImageRatio = $(this).find('img').outerHeight(true) / $(this).find('img').outerWidth(true);
//             if(originalImageRatio < perfectRatio){ //extra width
//                 $(this).find('img').addClass('extra-width');
//             }else{ //extra height
//                 $(this).find('img').addClass('extra-height');
//             }
//         }
//     });
// }
function resize_images_by_ratio_by_id(ratioContainer){
    $(ratioContainer).each(function(){
        if($(this).find('img').length == 1){
            $(this).find('img').removeClass('extra-width');
            $(this).find('img').removeClass('extra-height');
            perfectRatio = $(this).outerHeight(true) / $(this).outerWidth(true);
            originalImageRatio = $(this).find('img').outerHeight(true) / $(this).find('img').outerWidth(true);
            if(originalImageRatio < perfectRatio){ //extra width
                $(this).find('img').addClass('extra-width');
            }else{ //extra height
                $(this).find('img').addClass('extra-height');
            }
        }
    });
}

function AnimateToElement(id, offset, speed){
    var toPosition = $(id).offset().top + offset;
    $('html,body').animate({ scrollTop: toPosition }, speed);
}

function BackToTop(){
    $('html,body').animate({ scrollTop: 0 }, $(document).height() / 7);
}
function ToggleActive(id){
    if($(id).hasClass('active')){
        $(id).removeClass('active');
    }else{
        $(id).addClass('active');
    }
}
function ToggleOpen(id, event){
  if(event != undefined){
    event.stopPropagation();
  }
    if($(id).hasClass('open')){
        $(id).removeClass('open');
    }else{
        $(id).addClass('open');
    }
}
function ToggleCustomClass(id, customClass){
    if($(id).hasClass(customClass)){
        $(id).removeClass(customClass);
    }else{
        $(id).addClass(customClass);
    }
}
function ResetContainerInputs(id){
    $(id + " input").val('');
    $(id + " input:checkbox").removeAttr('checked');
    $(id + " input:radio").removeAttr('checked');
    $(id + " textarea").val('');
    $(id + " select").val('');
}

function isInteger(x) {
    return parseInt(x, 10) === x;
}

function isVisible(el){
    windowHeight = $(window).height();
    distanceFromTop = $(document).scrollTop();
    minVisibleArea = distanceFromTop;
    maxVisibleArea = distanceFromTop + windowHeight;

    elementTopPosition = $(el).offset().top;
    elementBottomPosition = elementTopPosition + $(el).height();

    if((elementTopPosition > minVisibleArea && elementTopPosition < maxVisibleArea) || (elementBottomPosition > minVisibleArea && elementBottomPosition < maxVisibleArea) || (elementTopPosition < minVisibleArea && elementBottomPosition > maxVisibleArea)){
        return true;
    }
    return false;
}
//******* DEFAULT FUNCTIONS *******//

/************ SOCIAL BUTTONS ***********/
function LoadSocialMedia() {
    if ($(".fb-like").length > 0)
    {
                if (typeof (FB) != 'undefined') {
                    FB.init({ status: true, cookie: true, xfbml: true });
                }
                else
                {
                    $.getScript("http://connect.facebook.net/en_US/all.js#xfbml=1", function (){
                      FB.init({ status: true, cookie: true, xfbml: true });
                    });
                }

    }
    $.getScript('http://platform.twitter.com/widgets.js');
    $(".twitter-share-button").show();
    // After the DOM has loaded...

    var gbuttons = $(".g-plusone");
    if (gbuttons.length > 0) {
        if (typeof (gapi) != 'undefined') {
        gbuttons.each(function () {
        gapi.plusone.render($(this).get(0));
        });
        }
        else
        {
        $.getScript('https://apis.google.com/js/plusone.js');
        }
    }
}
/************ SOCIAL BUTTONS ***********/
