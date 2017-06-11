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

// function AnimateToElement(id, offset, speed){
//     var toPosition = $(id).offset().top + offset;
//     $('html,body').animate({ scrollTop: toPosition }, speed);
// }

// function BackToTop(){
//     $('html,body').animate({ scrollTop: 0 }, $(document).height() / 7);
// }

// function ToggleActive(id){
//     if($(id).hasClass('active')){
//         $(id).removeClass('active');
//     }else{
//         $(id).addClass('active');
//     }
// }

// function ToggleOpen(id, event){
//   if(event != undefined){
//     event.stopPropagation();
//   }
//     if($(id).hasClass('open')){
//         $(id).removeClass('open');
//     }else{
//         $(id).addClass('open');
//     }
// }

// function ToggleCustomClass(id, customClass){
//     if($(id).hasClass(customClass)){
//         $(id).removeClass(customClass);
//     }else{
//         $(id).addClass(customClass);
//     }
// }

// function ResetContainerInputs(id){
//     $(id + " input").val('');
//     $(id + " input:checkbox").removeAttr('checked');
//     $(id + " input:radio").removeAttr('checked');
//     $(id + " textarea").val('');
//     $(id + " select").val('');
// }

// function isInteger(x) {
//     return parseInt(x, 10) === x;
// }

// function isVisible(el){
//     windowHeight = $(window).height();
//     distanceFromTop = $(document).scrollTop();
//     minVisibleArea = distanceFromTop;
//     maxVisibleArea = distanceFromTop + windowHeight;
//
//     elementTopPosition = $(el).offset().top;
//     elementBottomPosition = elementTopPosition + $(el).height();
//
//     if((elementTopPosition > minVisibleArea && elementTopPosition < maxVisibleArea) || (elementBottomPosition > minVisibleArea && elementBottomPosition < maxVisibleArea) || (elementTopPosition < minVisibleArea && elementBottomPosition > maxVisibleArea)){
//         return true;
//     }
//     return false;
// }
//******* DEFAULT FUNCTIONS *******//
