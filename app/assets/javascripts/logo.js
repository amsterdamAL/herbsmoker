function isElementVisible(elementToBeChecked) {
	var TopView = $(window).scrollTop();
	var BotView = TopView + $(window).height();
	var TopElement = $(elementToBeChecked).offset().top + 100;
	var BotElement = TopElement + $(elementToBeChecked).height();
	return ((BotElement <= BotView) && (TopElement >= TopView));
}


document.addEventListener('page:load', function(){
   $("#ghost").hide();
   
});


$(document).ready(function(){
    $("#ghost").hide();// hide it initially
    
    
    $('#content').expander({
    slicePoint: 320, //It is the number of characters at which the contents will be sliced into two parts.
    widow: 2,
    expandText: 'read more',
    expandPrefix: '&hellip; ',
    expandEffect: 'fadeIn',
    expandSpeed: 333, // It is the time in second to show and hide the content.
    userCollapseText: 'Read Less (-)' // Specify your desired word default is Less.
  });
 
  
    
//	$( "#subs" ).submit(function( event ) {
//	$("#subs").hide();
//	$("#subs1").show();
	
//});
    
    
  
});

    


//$(window).on("pageload", function(){
//    $("#ghost_logo").hide();// hide it initially
//});

$(window).scroll(function(){
    isOnView = isElementVisible("#tag");
    
    if(isOnView){
    	//fade out small image once main logo is in view
    	$('#ghost').fadeOut();
    }else{
	   	//fade in small image once main logo is out of view
    	$('#ghost').fadeIn();
    }
  });



function sticky_relocate() {
    var window_top = $(document).scrollTop();
    var div_top = $('#stickit').offset().top;
    if (window_top < div_top) {
        $('#sticky-anchor').removeClass('stick');
        $('#main-stuff').removeClass('pad');
    } else {
        
        $('#sticky-anchor').addClass('stick');
        $('#main-stuff').addClass('pad');
    }
}

$(function () {
    $(document).scroll(sticky_relocate);
    sticky_relocate();
});