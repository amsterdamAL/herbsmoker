$(document).ready(function(){
	
	var getLookup = function(){
	
		var addy = $('#lookup_address').val();
		var lat;
		var lng;
		var leg_id0;
		var leg_id1;
		if(addy == ''){
	
			//$('#lookup_results').append("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");
	
		} else {
	
			$('#lookup_results').append("<h2 class='loading'>Your poster is on its way!</h2>");
	
			$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=" + addy + "&components=administrative_area:FL|country:US&key=AIzaSyBf5WygDVM-Ib4sKti8pIvLIBYO1luw-J0", function(json){
	    	              
				
				if (json.results.length > 1){
					$('#lookup_errors').empty().append("too many results, be more spicific. Ex.. add zipcode or city");
				} else {
				 	$('#lookup_errors').empty().append("Lat: " + json.results[0].geometry.location.lat + " | Lng:" + json.results[0].geometry.location.lng);
				 		lat = json.results[0].geometry.location.lat;
				 		lng = json.results[0].geometry.location.lng;
			 	}
			 	
			 	
			 	
			 	$.getJSON("http://openstates.org/api/v1//legislators/geo/?lat=" + lat + "&long=" + lng + "&apikey=0b6a2cec0fa54bd0ae0816a53afb82cf", function(results) {
						
					$("#headshot").attr("src", results[0].photo_url);
					$("#results_name").empty().append( "Name: " + results[0].full_name);
					$("#results_party").empty().append( "Party: " + results[0].party);
					$("#results_email").empty().append( "Email: " + results[0].email);
					
					if (results[0].roles[0].chamber == "lower"){
						$("#results_chamber").empty().append("Chamber: FL House Member");
					}else if (results[0].roles[0].chamber == "upper"){
						$("#results_chamber").empty().append("Chamber: FL Senate Member");
					}else{
						
						$("#results_chamber").empty().append("Chamber: unknown");
					}
					
					
					$("#results_district").empty().append("District: " + results[0].roles[0].district);
					$("#results_term").empty().append("Term: " + results[0].roles[0].term);
					
					
					
					
					
					
					
					$("#headshot2").attr("src", results[1].photo_url);
					$("#results_name2").empty().append( "Name: " + results[1].full_name);
					$("#results_party2").empty().append( "Party: " + results[1].party);
					$("#results_email2").empty().append( "Email: " + results[1].email);
					
					if (results[1].roles[0].chamber == "lower"){
						$("#results_chamber2").empty().append("Chamber: FL House Member");
					}else if (results[1].roles[0].chamber == "upper"){
						$("#results_chamber2").empty().append("Chamber: FL Senate Member");
					}else{
						
						$("#results_chamber2").empty().append("Chamber: unknown");
					}
					
					
					$("#results_district2").empty().append("District: " + results[1].roles[0].district);
					$("#results_term2").empty().append("Term: " + results[1].roles[0].term);
					
					
					
					leg_id0 = results[0].leg_id;
					leg_id1 = results[1].leg_id;
					
					
					
						$.getJSON("http://openstates.org/api/v1//legislators/"+ leg_id0 +"/?apikey=0b6a2cec0fa54bd0ae0816a53afb82cf", function(data) {
							$("#results_tn").empty().append("Phone: " + data.offices[0].phone);
							
							if (data.offices[1].phone.length > 1) {
								
								$("#results_tn").append(" or " + data.offices[1].phone);
								
							}
					
					
						
						
							console.log(data);
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