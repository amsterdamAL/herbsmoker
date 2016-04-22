function isElementVisible(elementToBeChecked) {
	var TopView = $(window).scrollTop();
	var BotView = TopView + $(window).height();
	var TopElement = $(elementToBeChecked).offset().top + 105;
	var BotElement = TopElement + $(elementToBeChecked).height();
	return ((BotElement < BotView) && (TopElement > TopView));
}



$(document).ready(function(){
    if ($(window).width() < 1000){
        $('#ghost').removeClass('hideellogo');
        $('#ghost').fadeIn(1111);
    }
    
    $('#content').expander({
    slicePoint: 320, //It is the number of characters at which the contents will be sliced into two parts.
    widow: 2,
    expandText: 'read more',
    expandPrefix: '&hellip; ',
    expandEffect: 'fadeIn',
    expandSpeed: 333, // It is the time in second to show and hide the content.
    userCollapseText: 'Read Less (-)' // Specify your desired word default is Less.
    });
 
  
    

  


$( window ).resize(function() { 

    if ($(window).width() < 1000){
        $('#ghost').removeClass('hideellogo');
        $('#ghost').fadeIn(1111);
    }  
});   




$(window).scroll(function(){
    if ($(window).width() > 1000){

        isOnView = isElementVisible("#tag");
            
        if(isOnView){
        	//fade out small image once main logo is in view
        	$('#ghost').fadeOut(100);
            //$('#ghost').addClass('hideellogo');
            console.log(isOnView + "a")
        }else{
    	   	//fade in small image once main logo is out of view
            //$('#ghost').removeClass('hideellogo');
        	$('#ghost').fadeIn(1111);
            console.log(isOnView + "b")
        }

    }

    if ($(window).width() < 775 && $(window).scrollTop() > 5){

        $('#sticky-anchor').css("opacity", ".6");

    }else{

        $('#sticky-anchor').css("opacity", "1");
    }
  });




});

