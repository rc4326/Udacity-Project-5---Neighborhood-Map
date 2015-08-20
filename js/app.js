//model
var runLocations = [

    {
        name: "Essington Lake",
        surface: "asphalt",
        trail: "bike path",
        popDense: "moderate",
        lat: 41.543218,
        lng: -88.161496

    }
];

var eatLocations = [{
    name: "Chipotle",
    menu: "American Mexican",
    type: "fast casual",
    cost: "$$$",
    lat: 41.522177,
    lng: -88.145398

}];

var shopLocations = [{
    name: "Louis Joliet Mall",
    type: "Retail Mall",
    price: "$$$$",
    lat: 41.576290,
    lng: -88.165566

}];

var myTown = {
    lat: 41.525,
    lng: -88.081
};

		function initMap() {
    var myTown = {
        lat: 41.525,
        lng: -88.081
    };
    var mapOptions = {
        center: myTown,
        zoom: 12
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

		viewModel(map);
			
		};	


var ModelView = function(data, map) {

    var self = this;

	console.log(data.lat);
	var myLat = data.lat;
	
	function addMarker() {
		var LatLng = {lat: 41.525, lng: -88.081};
		var marker = new google.maps.Marker({
			position: LatLng,
			title: "Home",
			setMap: map
		}); 
	}; addMarker();

	console.log("don't run this");
		
};

var viewModel = function(map) {
	
		this.markers = ko.observableArray([]);
		
		this.runClick = function() {
			runLocations.forEach(function(runItem) {
				self.markers.push(new ModelView(runItem));
				
			});
		}
		this.eatClick = function() {
			eatLocations.forEach(function(eatItem) {
				self.markers.push(new ModelView(eatItem));
	
			});
		}
		
		this.shopClick = function() {
			shopLocations.forEach(function(shopItem) {
				self.markers.push(new ModelView(shopItem));
			});
		}
	
};
ko.applyBindings(new viewModel());