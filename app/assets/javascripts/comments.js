$(document).ready(function(){
        
        $("a").click(function (event) {
            
        	
        	var CommentId = $(this).attr('id')
        	var parentId = $(this).attr("data-id");

        	console.log("commentID: " + CommentId)
        	console.log("parentid: " + parentId)
        	$("#" + CommentId + ".replybox").toggle(400);


        	//if replying to a reply do this
        	//aka.. if in inner loop
        	//if (parentId != undefined){
        	//	console.log("true")
        		
        	//	$("#" + CommentId + ".replybox").toggle(400);
        		
        	//}else{
            //        		console.log("false")

            //	$("#" + CommentId + ".replybox").toggle(400);
        	//}
            
      	}); 

            
            

    


    
        $('.sourceform button').click(function (event) {
            event.preventDefault(); 
        	//get parent id from the submit button click
        	var destaddress = $(this).attr('data-destaddy');

			//get comment id from the submit button click
        	var sourceaddress = $(this).attr('data-sourceaddy');
        	
        	var fulldestaddy = '#sourceaddress' + destaddress;        	//use comment id from above to get comment body
        	var sourcebody = $('#sourcebody' + sourceaddress).val();
        	

        	console.log('destaddress:' + destaddress);
            console.log('sourceddress:' + sourceaddress);
            console.log('sourcebody:' + sourcebody);
            console.log(fulldestaddy);
        	

        	$(fulldestaddy).val(sourcebody);
        	$('#destform' + destaddress).submit();
            //console.log('sourcebody:' + sourcebody);
            
        });

         

});



   



