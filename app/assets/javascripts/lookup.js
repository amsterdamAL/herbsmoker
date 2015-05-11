$(document).ready(function(){
	
	
	
	//do this when user enters address info
	var getLookup = function(){
	
		
		//user input stored
		var addy = $('#lookup_address').val();
		var city = $('#lookup_city').val();
		var zip = $('#lookup_zip').val();
		var lat;
		var lng;
		var leg_id0;
		var leg_id1;
		
		if(zip == "" && addy == "" && city == ""){
	
			//$('#lookup_results').empty().append("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something</h2>");
	
		} else {
	
			//$('#lookup_results').empty().append("<h2 class='loading'>Retreving info, please wait....</h2>");
	
			
			
			
			//get lat and lng info based on user input, then use lat and lng for sunlight foundation api next
			$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=" + addy + city + zip + "&components=administrative_area:FL|country:US&key=AIzaSyBf5WygDVM-Ib4sKti8pIvLIBYO1luw-J0", function(json){
	    	              
				
				if (json.results.length > 1){
					$('#lookup_errors').empty().append("too many results, be more spicific. Ex.. add zipcode or city");
				} else {
				 	$('#lookup_errors').empty().append("Lat: " + json.results[0].geometry.location.lat + " | Lng:" + json.results[0].geometry.location.lng);
				 		lat = json.results[0].geometry.location.lat;
				 		lng = json.results[0].geometry.location.lng;
			 	}
			 	
			 	
			 	
			 	
			 	//use lat and lng to lookup reps.
			 	$.getJSON("http://openstates.org/api/v1//legislators/geo/?lat=" + lat + "&long=" + lng + "&apikey=0b6a2cec0fa54bd0ae0816a53afb82cf", function(results) {
					
					$("#headshot").attr("src", results[0].photo_url);	
					
					if (results[0].roles[0].chamber == "lower"){
						$("#results_name").empty().append( "Representative " + results[0].full_name);
						$("#results_party").empty().append( results[0].party + " Party");
						$("#results_chamber").empty().append("State House, District " + results[0].roles[0].district);
						$("#results_email").empty().append( results[0].email);
						$("#results_term").empty().append("Term: " + results[0].roles[0].term);
					
					
					
					
					}else if (results[0].roles[0].chamber == "upper"){
						
						$("#results_name").empty().append( "Senator " + results[0].full_name);
						$("#results_party").empty().append( results[0].party + " Party");
						$("#results_chamber").empty().append("State House, District " + results[0].roles[0].district);
						$("#results_email").empty().append( results[0].email);
						$("#results_term").empty().append("Term: " + results[0].roles[0].term);
					
					
										
					}else{
						
						$("#results_name").empty().append( results[0].full_name);
						$("#results_party").empty().append( results[0].party + " Party");
						$("#results_chamber").empty().append("District " + results[0].roles[0].district);
						$("#results_email").empty().append( results[0].email);
						$("#results_term").empty().append("Term: " + results[0].roles[0].term);	
						
					}
									
					
					
					
					
					$("#headshot2").attr("src", results[1].photo_url);	
					
					if (results[1].roles[0].chamber == "lower"){
						$("#results_name2").empty().append( "Representative " + results[1].full_name);
						$("#results_party2").empty().append( results[1].party + " Party");
						$("#results_chamber2").empty().append("State House, District " + results[1].roles[0].district);
						$("#results_email2").empty().append( results[1].email);
						$("#results_term2").empty().append("Term: " + results[1].roles[0].term);
					
					
					
					
					}else if (results[1].roles[0].chamber == "upper"){
						
						$("#results_name2").empty().append( "Senator " + results[1].full_name);
						$("#results_party2").empty().append( results[1].party + " Party");
						$("#results_chamber2").empty().append("State House, District " + results[1].roles[0].district);
						$("#results_email2").empty().append( results[1].email);
						$("#results_term2").empty().append("Term: " + results[1].roles[0].term);
					
					
										
					}else{
						
						$("#results_name2").empty().append( results[1].full_name);
						$("#results_party2").empty().append( results[1].party + " Party");
						$("#results_chamber2").empty().append("District " + results[1].roles[0].district);
						$("#results_email2").empty().append( results[1].email);
						$("#results_term2").empty().append("Term: " + results[1].roles[0].term);	
						
					}
					
					
					
					leg_id0 = results[0].leg_id;
					leg_id1 = results[1].leg_id;
					
					
					
						//get additional info based on legislative id 1of2
						$.getJSON("http://openstates.org/api/v1//legislators/"+ leg_id0 +"/?apikey=0b6a2cec0fa54bd0ae0816a53afb82cf", function(data) {
							
							
							$("#results_work").empty().append( data.offices[0].name + ":");
							$("#results_phone").empty().append( data.offices[0].phone);
							$("#results_address").empty().append( data.offices[0].address);
							$("#results_work-b").empty().append( data.offices[1].name + ":");
							$("#results_phone-b").empty().append( data.offices[1].phone);
							$("#results_address-b").empty().append( data.offices[1].address);
													
							
						});
						
						
						//get additional info based on legislative id 2of2
						$.getJSON("http://openstates.org/api/v1//legislators/"+ leg_id1 +"/?apikey=0b6a2cec0fa54bd0ae0816a53afb82cf", function(lore) {
							
							
							$("#results_work2").empty().append( lore.offices[0].name + ":");
							$("#results_phone2").empty().append( lore.offices[0].phone);
							$("#results_address2").empty().append( lore.offices[0].address);
							
							$("#results_work2-b").empty().append( lore.offices[1].name + ":");
							$("#results_phone2-b").empty().append( lore.offices[1].phone);
							$("#results_address2-b").empty().append( lore.offices[1].address);
													
												
						});
					
					});	
				});         
						
				
		};
	
		return false;
	};
	
	
	
	
	$('#lookup_button').click(getLookup);
	$('#lookup_address').keyup(function(event){
		if(event.keyCode == 13){
			getLookup();
		}
	  
	});
});