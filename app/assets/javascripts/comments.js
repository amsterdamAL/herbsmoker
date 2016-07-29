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
            
      	}); 

        $('#submit0').click(function (event) { 

        	event.preventDefault(); 

        	
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

            //$(this).parent().find('.nickname').eq(0).val("fffdf") ;
            var csrnickname = $(this).parent().find('.nickname').eq(0).val();
            //console.log(csrnickname);


            if (csrnickname == "") {

                
                $(this).parent().find('.nickname').eq(0).val(nickname);
                
                console.log("was blank, loaded default");
            }else{

                console.log("it was added");
            }
            $(this).parent().submit();

        });

        

        $('.destsubmit').click(function (event) { 

            event.preventDefault(); 

            
            var csrnickname = $(this).parent().find('.destnick').eq(0).val();

            console.log(csrnickname);


            if (csrnickname == "") {

                
                $(this).parent().find('.destnick').eq(0).val(nickname);
                
                console.log("was blank, loaded default");
            }else{

                console.log("it was added");
            }
            $(this).parent().submit();

        });

        

        $('.sourcesubmit').click(function (event) { 

            event.preventDefault(); 

            
            var csrnickname = $(this).parent().find('.sourcenick').eq(0).val();

            console.log(csrnickname);


            if (csrnickname == "") {

                
                $(this).parent().find('.sourcenick').eq(0).val(nickname);
                
                console.log("was blank, loaded default");
            }else{

                console.log("it was added");
            }
            //$(this).parent().submit();

        });

    


    
        $('.sourceform button').click(function (event) {
            event.preventDefault(); 
        	
            //get parent id from the submit button click
        	var destaddress = $(this).attr('data-destaddy');

			//get comment id from the submit button click
        	var sourceaddress = $(this).attr('data-sourceaddy');
        	
        	//use comment id from above to get comment body
            var fulldestaddy = '#sourceaddress' + destaddress;        	
        	var sourcebody = $('#sourcebody' + sourceaddress).val();
        	

        	console.log('destaddress:' + destaddress);
            console.log('sourceddress:' + sourceaddress);
            console.log('sourcebody:' + sourcebody);
            console.log(fulldestaddy);
        	

        	$(fulldestaddy).val(sourcebody);

            var csrnickname = $(this).parent().find('.sourcenick').eq(0).val();

            console.log(csrnickname);

            console.log('last');
            if (csrnickname == "") {

                
               $(this).parent().find('.sourcenick').eq(0).val(nickname);
                
                console.log("was blank, loaded default");
            }else{

                console.log("it was added");
            }

            //$(this).parent().parent().submit();

        	$('#destform' + destaddress).submit();
            //console.log('sourcebody:' + sourcebody);
            
        });

         

});



   



