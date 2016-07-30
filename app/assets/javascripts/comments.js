$(document).ready(function(){

	//var items = Array("sativa","indica","kush","ganja","dime", "dank",
    //    							"BuD", "sack");
	//var item = items[Math.floor(Math.random()*items.length)];

	var randomguestnumer = Math.floor(Math.random() * 9876) + 1234;

	var nickname = ("guest-" + randomguestnumer);
	//$('#nickname0').val();
        		
	//$("#nickname0").attr('placeholder', 'anonymous');



        
        $("a").click(function (event) {
            
        	
        	var CommentId = $(this).attr('id')
        	var parentId = $(this).attr("data-id");

        	console.log("commentID: " + CommentId)
        	console.log("parentid: " + parentId)
        	$("#" + CommentId + ".replybox").toggle(400);
        	

        	$(this).parent().parent().parent().next().find('textarea').eq(0).focus();
        	//console.log ( $(this).parent().parent().parent().next().find('textarea').eq(0));
        	//////$('body').animate({scrollTop:$(this).parent().next('.textarea').offset().top},500)

        	//if replying to a reply do this
        	//aka.. if in inner loop
        	//if (parentId != undefined){
        	//console.log($(this).parent().parent().parent().next().find('textarea'))
        		
        	//	$("#" + CommentId + ".replybox").toggle(400);
        		
        	//}else{
            //        		console.log("false")

            //	$("#" + CommentId + ".replybox").toggle(400);
        	//}
            checkIfInView(  $(this).parent().parent().parent().next().find('.testscroll').eq(0)  );
            console.log($(this).parent().parent().parent().next().find('.testscroll').eq(0) );
            
            
      	}); 

        $('#submit0').click(function (event) { 

        	event.preventDefault(); 
            console.log('submit0');

        	
        	var csrnickname = $('#nickname0').val();

        	console.log(csrnickname);


        	if (csrnickname == "") {

        		
        		$('#nickname0').val(nickname);
        		
        		console.log("was blank, loaded default");
        	}else{

        		console.log("it was added");
        	}
        	$('#leveloneform').submit();

        });
            



        $('.submit1').click(function (event) { 

            event.preventDefault(); 
            console.log('submit1');

            //$(this).parent().find('.nickname').eq(0).val("fffdf") ;
            var csrnickname = $(this).parent().find('.nickname').eq(0).val();
            //console.log(csrnickname);


            if (csrnickname == "") {

                
                $(this).parent().find('.nickname').eq(0).val(nickname);
                
                console.log("was blank, loaded default");
            }else{

                console.log("it was added");
            }
            $(this).parent().parent().submit();

        });

        

        $('.destsubmit').click(function (event) { 

            event.preventDefault(); 
            console.log('.destsubmit');

            
            var csrnickname = $(this).parent().find('.destnick').eq(0).val();

            console.log(csrnickname);


            if (csrnickname == "") {

                
                $(this).parent().find('.destnick').eq(0).val(nickname);
                
                console.log("was bblank, loaded default");
            }else{

                console.log("it was added");
            }
            $(this).parent().parent().submit();

        });

        

        $('.sourcesubmit').click(function (event) { 

            event.preventDefault(); 
            
            var csrnickname = $(this).parent().find('.sourcenick').eq(0).val();

            if (csrnickname == "") {

                $(this).parent().find('.sourcenick').eq(0).val(nickname);
                
            }else{

                console.log("it was addedd");
            }
            
            var csrnickname = $(this).parent().find('.sourcenick').eq(0).val();
            console.log('finish: ' + csrnickname);

            //get parent id from the submit button click
            var destaddress = $(this).attr('data-destaddy');

            //get comment id from the submit button click
            var sourceaddress = $(this).attr('data-sourceaddy');
            
            //use comment id from above to get comment body
            var fulldestaddy = '#sourceaddress' + destaddress;  
            var fullnickaddy = '#destnick' + destaddress;       
            var sourcebody = $('#sourcebody' + sourceaddress).val();
            
            $(fulldestaddy).val(sourcebody);
            $(fullnickaddy).val(csrnickname);
            

            $('#destform' + destaddress).submit();
            


        });

    


    
    function checkIfInView(element){
    var offset = element.offset().top - $(window).scrollTop();
    
    console.log('offdet: ' + offset + '  windowht: ' + window.innerHeight );
    if(offset > window.innerHeight){
        // Not in view so scroll to it
        $('html,body').animate({scrollTop: 100}, 1000);
        return false;
    }
   return true;
}
         

});



   



