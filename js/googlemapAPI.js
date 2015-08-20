


var map;
var markers = [];
var myTown = {
    lat: 41.525,
    lng: -88.081
};






function initMap() {

    var mapOptions = {
        center: myTown,
        zoom: 12
    };
     map = new google.maps.Map(document.getElementById('map'), mapOptions);

		addMarker(myTown);
		}

	function addMarker(loc, name) {
	console.log(loc +" "+ name);
	var location = new google.maps.LatLng(loc);
	console.log(location);
		var marker = new google.maps.Marker({
			position: loc,
			title: name,
			map: map
		}); 
		markers.push(marker);
		console.log(markers.length);
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
		console.log(markers[i]);
  }
	}; 
	
	var display_loc = function(data) {
	var self = this;
	
 var lat = data.lat;
 var lng = data.lng;
var myLoc = lat +","+ lng;
var mylatlng = { lat: lat , lng: lng};
var myLocName = data.name;

 addMarker(mylatlng, myLocName);
	

	console.log("click ran");
};