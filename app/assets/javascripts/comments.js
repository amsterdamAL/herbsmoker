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
            $(this).parent().submit();

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
            $(this).parent().submit();

        });

        

        $('.sourcesubmit').click(function (event) { 

            event.preventDefault(); 
            console.log('.sourcesubmit');
            
            var csrnickname = $(this).parent().find('.sourcenick').eq(0).val();

            console.log('2nd 2 last: ' +csrnickname);


            if (csrnickname == "") {

                
                $(this).parent().find('.sourcenick').eq(0).val(nickname);
                
                console.log("was blankk, loaded default");
            }else{

                console.log("it was addedd");
            }
            //$(this).parent().submit();
            //console.log( $(this).parent() );
            //$('#destform' + destaddress).submit();





            console.log('start');






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
            

            console.log('destaddress:' + destaddress);
            console.log('sourceddress:' + sourceaddress);
            console.log('sourcebody:' + sourcebody);
            console.log(fulldestaddy);
            console.log(fullnickaddy);
            

            $(fulldestaddy).val(sourcebody);
            $(fullnickaddy).val(csrnickname);
            

            

            //console.log('name: ' + csrnickname);

           

            //$(this).parent().parent().submit();

            $('#destform' + destaddress).submit();
            //console.log('sourcebody:' + sourcebody);


        });

    


    
        //$('.sourceform button').click(function (event) {
            
        //    event.preventDefault(); 
        	
            
        //});

         

});



   



