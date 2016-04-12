$(document).ready(function() {

	// responsive nav/
	$( ".cross" ).hide();
	$( ".responsiveMenu" ).hide();

	$( ".hamburger" ).click(function() {
		$( ".responsiveMenu" ).slideToggle( "slow", function() {
			$( ".hamburger	" ).hide();
			$( ".cross" ).show();
		});
	});

	$( ".cross" ).click(function() {
		$( ".responsiveMenu" ).slideToggle( "slow", function() {
			$( ".cross" ).hide();
			$( ".hamburger" ).show();
		})
	});


// select menus//
     
      // function initMap() {
      // 		var map;
	// 	  var uluru = {lat: 38.9072, lng: -77.0369};
	// 	  var map = new google.maps.Map(document.getElementById('map'), {
	// 	    zoom: 4,
	// 	    center: uluru
	// 	  });

	// 	  var contentString = '<div id="content">'+
	// 	      '<div id="siteNotice">'+
	// 	      '</div>'+
	// 	      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
	// 	      '<div id="bodyContent">'+
	// 	      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
	// 	      'sandstone rock formation in the southern part of the '+
	// 	      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
	// 	      'south west of the nearest large town, Alice Springs; 450&#160;km '+
	// 	      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
	// 	      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
	// 	      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
	// 	      'Aboriginal people of the area. It has many springs, waterholes, '+
	// 	      'rock caves and ancient paintings. Uluru is listed as a World '+
	// 	      'Heritage Site.</p>'+
	// 	      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
	// 	      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
	// 	      '(last visited June 22, 2009).</p>'+
	// 	      '</div>'+
	// 	      '</div>';

	// 	  var infowindow = new google.maps.InfoWindow({
	// 	    content: contentString
	// 	  });

	// 	  var marker = new google.maps.Marker({
	// 	    position: uluru,
	// 	    map: map,
	// 	    title: 'Uluru (Ayers Rock)'
	// 	  });
	// 	  marker.addListener('click', function() {
	// 	    infowindow.open(map, marker);
	// 	  });
	// 	}
	// });
      
	// DUMPLING SELECTION !! //
	$('#dumplingSelection').submit(function addEntry(event) {

		event.preventDefault();

		var firstDropDownValue = $('#dumplingType1').val();
		var secondDropDownValue = $('#dumplingType2').val();

		if( firstDropDownValue === 'veg' && secondDropDownValue === 'steamed') {
	  		document.location.href = 'vegsteamed.html';
		}
		if( firstDropDownValue === 'meat' && secondDropDownValue === 'steamed') {
	  		document.location.href = 'meatsteamed.html';
		}
		if( firstDropDownValue === 'veg' && secondDropDownValue === 'fried') {
	  		document.location.href = 'vegfried.html';
		}
		if( firstDropDownValue === 'meat' && secondDropDownValue === 'fried') {
	  		document.location.href = 'meatfried.html';
		}
	});
});
