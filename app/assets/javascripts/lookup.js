$(document).ready(function(){
	
	$('#progressbar').hide();
	$('#lookup_errors').hide();
	$('#results_wrap').hide();
	//do this when user clicks find button
	var getLookup = function(){
	
		//user input stored
		var addy = $('#lookup_address').val();
		var city = $('#lookup_city').val();
		var zip = $('#lookup_zip').val();
		var lat;
		var lng;
		var leg_id0;
		var leg_id1;
		var google = $('#lookup_form').data('google');
		var sunlight = $('#lookup_form').data('sunlight');
		
		if(zip == "" && addy == "" && city == ""){
	
			$('#lookup_errors').show().empty().append("Please enter an address to locate your Representitives.");
	
		} else {
	
			$('#lookup_errors').show().empty().append("Retreving info, please wait....");
			$('#progressbar').show();
			
			$("#results_name").empty();
			$("#results_party").empty();
			$("#results_chamber").empty();
			$("#results_email").empty();
			$("#results_term").empty();
					
			$("#results_name2").empty();
			$("#results_party2").empty();
			$("#results_chamber2").empty();
			$("#results_email2").empty();
			$("#results_term2").empty();
					
			$("#results_work").empty();
			$("#results_phone").empty();
			$("#results_address").empty();
			$("#results_work-b").empty();
			$("#results_phone-b").empty();
			$("#results_address-b").empty();
					
			$("#results_work2").empty();
			$("#results_phone2").empty();
			$("#results_address2").empty();
			$("#results_work2-b").empty();
			$("#results_phone2-b").empty();
			$("#results_address2-b").empty();
	
			
			
			
			//STEP ONE;;;;   get lat and lng info based on user input
			$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?address=" + addy + city + zip + "&components=administrative_area:FL|country:US&key=" + google, function(json){
	    	              
				
				if (json.results.length > 1){
					$('#lookup_errors').empty().append("too many results, be more spicific. Ex.. add zipcode or city");
					$('#progressbar').hide();
				} else {
				 	//$('#lookup_errors').empty().append("Lat: " + json.results[0].geometry.location.lat + "<br>" + "Lng:" + json.results[0].geometry.location.lng + "<br>" + sunlight + "<br>" + google);
			 		lat = json.results[0].geometry.location.lat;
			 		lng = json.results[0].geometry.location.lng;
			 		$('.progress-bar .meter').css('width', '22%');
			 	}
			 	
			 	//STEP TWO:::::   use lat and lng to lookup reps.
			 	$.getJSON("http://openstates.org/api/v1//legislators/geo/?lat=" + lat + "&long=" + lng + "&apikey=" + sunlight, function(results) {
					$("#headshot").attr("src", results[0].photo_url);
					$('.progress-bar .meter').css('width', '41%');	
					
					if (results[0].roles[0].chamber == "lower"){
						$("#results_name").empty().append( "Representative " + results[0].full_name);
						$("#name_to_controller").val( "Representative " + results[0].full_name);
						$("#results_party").empty().append( results[0].party + " Party");
						$("#results_chamber").empty().append("State House, District " + results[0].roles[0].district);
						$('#district_1').val("State House, District " + results[0].roles[0].district);
						
						//email fix
						if (results[0].email != undefined){
							$("#results_email").empty().append( results[0].email);
							$("#email_to_controller").val(results[0].email);
						}else if (results[0].offices[0].email != undefined){
							$("#results_email").empty().append( results[0].offices[0].email);
							$("#email_to_controller").val(results[0].offices[0].email);
						}else if ( results[0].first_name == "Bobby B."){
							$("#results_email").empty().append( "bobby.dubose@myfloridahouse.gov");
							$("#email_to_controller").val("bobby.dubose@myfloridahouse.gov");
						}else if ( results[0].last_name == "Sprowls"){
							$("#results_email").empty().append( "Chris.Sprowls@myfloridahouse.gov");
							$("#email_to_controller").val("Chris.Sprowls@myfloridahouse.gov");
						}else if ( results[0].full_name == "Evan Jenne"){
							$("#results_email").empty().append( "Evan.Jenne@myfloridahouse.gov");
							$("#email_to_controller").val("Evan.Jenne@myfloridahouse.gov");
						}else if ( results[0].full_name == "Avila, Bryan"){
							$("#results_email").empty().append( "bryan.avila@myfloridahouse.gov");
							$("#email_to_controller").val("bryan.avila@myfloridahouse.gov");
						}else if ( results[0].full_name == "Raschein, Holly"){
							$("#results_email").empty().append( "holly.raschein@myfloridahouse.gov");
							$("#email_to_controller").val("holly.raschein@myfloridahouse.gov");
						}else{
							$("#results_email").empty().append( "Email: *** missing ***");
						}
						
						
						$("#results_term").empty().append("Term: " + results[0].roles[0].term);
						$('.progress-bar .meter').css('width', '58%');
					
					
					
					}else if (results[0].roles[0].chamber == "upper"){
						
						$("#results_name").empty().append( "Senator " + results[0].full_name);
						$("#name_to_controller").val( "Senator " + results[0].full_name);
						$("#results_party").empty().append( results[0].party + " Party");
						$("#results_chamber").empty().append("State Senate, District " + results[0].roles[0].district);
						$('.progress-bar .meter').css('width', '67%');
						//email fix
						if (results[0].email != undefined){
							$("#results_email").empty().append( results[0].email);
							$("#email_to_controller").val(results[0].email);
						}else if (results[0].offices[0].email != undefined){
							$("#results_email").empty().append( results[0].offices[0].email);
							$("#email_to_controller").val(results[0].offices[0].email);
							
						}else{
							
							$("#results_email").empty().append( "EMAIL: not available");
						}
						$("#results_term").empty().append("Term: " + results[0].roles[0].term);
						$('.progress-bar .meter').css('width', '58%');
					
					
					}					
					
					
					
					
					
					$("#headshot2").attr("src", results[1].photo_url);	
					$('.progress-bar .meter').css('width', '100%');
					
					if (results[1].roles[0].chamber == "lower"){
						$("#results_name2").empty().append( "Representative " + results[1].full_name);
						$("#name2_to_controller").val( "Representative " + results[1].full_name);
						$("#results_party2").empty().append( results[1].party + " Party");
						$("#results_chamber2").empty().append("State House, District " + results[1].roles[0].district);
						
						
						//email fix
						if (results[1].email != undefined){
							$("#results_email2").empty().append( results[1].email);
							$("#email2_to_controller").val(results[1].email);
						}else if (results[1].offices[0].email != undefined){
							$("#results_email2").empty().append( results[1].offices[0].email);
							$("#email2_to_controller").val(results[1].offices[0].email);
						}else{
							
							$("#results_email2").empty().append( "Email: *** missing ***");
						}
						
						

						$("#results_term2").empty().append("Term: " + results[1].roles[0].term);
						//$('.progress-bar .meter').css('width', '75%');
					
					
					
					}else if (results[1].roles[0].chamber == "upper"){
						
						$("#results_name2").empty().append( "Senator " + results[1].full_name);
						$("#name2_to_controller").val( "Senator " + results[1].full_name);
						$("#results_party2").empty().append( results[1].party + " Party");
						$("#results_chamber2").empty().append("State Seante, District " + results[1].roles[0].district);
						$('#district_2').val("State Seante, District " + results[1].roles[0].district);
						
						//email fix
						if (results[1].email != undefined){
							$("#results_email2").empty().append( results[1].email);
							$("#email2_to_controller").val(results[1].email);
						}else if (results[1].offices[0].email != undefined){
							$("#results_email2").empty().append( results[1].offices[0].email);
							$("#email2_to_controller").val(results[1].offices[0].email);
						}else if (results[1].first_name == "Charles S. \"Charlie"){
														
							$("#results_email2").empty().append( "dean.charles@flsenate.gov");
							$("#email2_to_controller").val("dean.charles@flsenate.gov");
						}
						$("#results_term2").empty().append("Term: " + results[1].roles[0].term);
						//$('.progress-bar .meter').css('width', '75%');
					
					}					
					
					console.log('alpha');
					
					
					leg_id0 = results[0].leg_id;
					leg_id1 = results[1].leg_id;
					
					//$('#lookup_errors').append(results[0].full_name + ": " + results[0].leg_id + "<br>");
					//$('#lookup_errors').append(results[1].full_name + ": " + results[1].leg_id + "<br>");
					
					//get additional info based on legislative id 1of2
					$.getJSON("http://openstates.org/api/v1//legislators/"+ leg_id0 +"/?apikey=" + sunlight, function(data) {
						
						
						//$("#results_work").empty().append( data.offices[0].name + ":");
						//$("#results_phone").empty().append( data.offices[0].phone);
						//$("#results_address").empty().append( data.offices[0].address);
						//$("#results_work-b").empty().append( data.offices[1].name + ":");
						//$("#results_phone-b").empty().append( data.offices[1].phone);
						//$("#results_address-b").empty().append( data.offices[1].address);
												
						if (data.offices[0].email != undefined){
							$("#results_email").empty().append( data.offices[0].email);
							$("#email_to_controller").val(data.offices[0].email);
						}else if (data.offices[1].email != undefined){
							$("#results_email").empty().append( data.offices[1].email);
							$("#email_to_controller").val(data.offices[1].email);
						}
						
						console.log('beta');
					});
					
					
					//get additional info based on legislative id 2of2
					$.getJSON("http://openstates.org/api/v1//legislators/"+ leg_id1 +"/?apikey=" + sunlight, function(lore) {
						
						
						//$("#results_work2").empty().append( lore.offices[0].name + ":");
						//$("#results_phone2").empty().append( lore.offices[0].phone);
						//$("#results_address2").empty().append( lore.offices[0].address);
						
						//$("#results_work2-b").empty().append( lore.offices[1].name + ":");
						//$("#results_phone2-b").empty().append( lore.offices[1].phone);
						//$("#results_address2-b").empty().append( lore.offices[1].address);
						
						if (lore.offices[0].email != undefined){
							$("#results_email2").empty().append( lore.offices[0].email);
							$("#email2_to_controller").val(lore.offices[0].email);
						}else if (lore.offices[1].email != undefined){
							$("#results_email2").empty().append( lore.offices[1].email);
							$("#email2_to_controller").val(lore.offices[1].email);
						}
						
						console.log('charlie');
						$('#progressbar').fadeOut(1000);						
						$('#lookup_errors').delay(1000).fadeOut(2000);					
					});
						
					
				});

			}); 

		};
		console.log('done');
		
	
	};
	
	

	
	
	$('#lookup_button').click(function () {
		
		
		if ( $('#arrow').is(":visible")  ){
			
			$('#results_wrap, #arrow').toggle();
			getLookup();
			
		}else{
			getLookup();
		}

	});
	
	$('#lookup_address').keyup(function(event){
		if(event.keyCode == 13){
			getLookup();
		}
	  
	});
	$('#lookup_city').keyup(function(event){
		if(event.keyCode == 13){
			getLookup();
		}
	  
	});
	$('#lookup_zip').keyup(function(event){
		if(event.keyCode == 13){
			getLookup();
		}
	  
	});
});