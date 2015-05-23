$(document).ready(function(){
	
	
	
	//do this when user eClicked the fucking button
	var allLookup = function(){
	
		$.getJSON("http://openstates.org/api/v1//legislators/?state=fl&active=true&apikey=0b6a2cec0fa54bd0ae0816a53afb82cf", function(json){
		
			var none = 0;
			var some = 0;
			var no = 0;
			var yes = 0;
			
			$.each(json, function( index, value ) {
	  			
	  			if (value.chamber == "lower"){
		  			
		  			$('#allResults').append(value.email + " " + value.full_name + "  " + value.chamber + '<br />');
		  			
		  			if ( value.email != undefined){
		  				some = some + 1;
		  				//$('#allResults').append(value.chamber + '<br />');  				
		  			}else{
		  				none = none + 1;
		  				//$('#allResults').append(value.chamber + '<br />');
		  			}
	  			
	  			}else{
		  			$('#allResults').append(value.email + " " + value.full_name + "  " + value.chamber + '<br />');
		  			
		  			if ( value.email != undefined){
		  				yes = yes + 1;
		  				//$('#allResults').append(value.chamber + '<br />');  				
		  			}else{
		  				no = no + 1;
		  				//$('#allResults').append(value.chamber + '<br />');
		  			}
	  				
	  			}	
	  				
  			
	  			
  					
			});
		
			console.log("Lower chamber good: " + some);
			console.log("Lower chamber bad: " + none);
			console.log("Senate chamber good: " + yes);
			console.log("Senate chamber bad: " + no);
		});
	};
	
	
	
	
	$('#allbutton').click(allLookup);
	
	  
	
});