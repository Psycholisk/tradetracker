require(['jquery'], function($){
    alert($(window).width);
});
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
