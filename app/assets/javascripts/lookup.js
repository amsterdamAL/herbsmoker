$(document).ready(function(){
	
	var getLookup = function(){
	
		var addy = $('#lookup_address').val();
		var lat;
		var lng;
	
		if(addy == ''){
	
			//$('#lookup_results').append("<h2 class='loading'>Ha! We haven't forgotten to validate the form! Please enter something.</h2>");
	
		} else {
	
			//$('#lookup_results').append("<h2 class='loading'>Your poster is on its way!</h2>");
	
			$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=" + addy + "&components=administrative_area:FL|country:US&key=AIzaSyBf5WygDVM-Ib4sKti8pIvLIBYO1luw-J0", function(json){
	    	              
				
					if (json.results.length > 1){
						 $('#lookup_results').append("too many results bra");
					} else {
					 	$('#lookup_results').empty().append("Lat: " + json.results[0].geometry.location.lat + " | Lng:" + json.results[0].geometry.location.lng);
				 		lat = json.results[0].geometry.location.lat;
				 		lng = json.results[0].geometry.location.lng;
				 	}
				 	
				 	$.getJSON("http://openstates.org/api/v1//legislators/geo/?lat=" + lat + "&long=" + lng + "&apikey=0b6a2cec0fa54bd0ae0816a53afb82cf", function(results) {
					$.each(results, function(key, val){
						$('#lookup_results').append("<li>" + key + ":" + val + "</li>");
 
						$.each(this, function(x, y){
						$('#lookup_results').append("<li>" + x + ":" + y + "</li>");
						});
					});
					
					
					
			        console.log(results);  
				
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