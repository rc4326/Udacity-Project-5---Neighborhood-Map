


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

		addMarker(myTown, "Home");
		}

	function addMarker(loc, name, icon) {
	console.log(loc +" "+ name);
	var location = new google.maps.LatLng(loc);
	console.log(location);
		var marker = new google.maps.Marker({
			position: loc,
			icon: icon,
			title: name,
			map: map
		}); 
		markers.push(marker);
		console.log(markers.length);
	setMapOnAll(map);
	}; 
	
	var display_loc = function(data) {
	var self = this;
	
 var lat = data.lat;
 var lng = data.lng;
var mylatlng = { lat: lat , lng: lng};
var myLocName = data.name;
var myIcon = data.icon;

 addMarker(mylatlng, myLocName, myIcon);
	

	console.log("click ran");
};

function setMapOnAll(map) {
	  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
		console.log(markers[i]);
  }
}


function clearMarkers() {
  setMapOnAll(null);
	markers = [];
}