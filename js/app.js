//model
var runLocations = [

    {
        name: "Essington Lake",
        surface: "asphalt",
        trail: "bike path",
        popDense: "moderate",
				icon: "img/marker_blue.png",
        lat: 41.543218,
        lng: -88.161496

    },
		{
				name: "I&M Canal",
				surface: "crushed limestone",
				trail: "towpath",
				popDense: "light",
				icon: "img/marker_blue.png",
				lat: 41.485553,
				lng: -88.163642
		},
		{
			name: "Dellwood Park",
			surface: "mixed",
			trail: "nature",
			popDense: "light",
			icon: "img/marker_blue.png",
			lat: 41.573131,
			lng: -88.060688
		}
];

var eatLocations = [{
    name: "Chipotle",
    menu: "American Mexican",
    type: "fast casual",
    cost: "$$$",
		icon: "img/marker_green.png",
    lat: 41.522177,
    lng: -88.145398

}];

var shopLocations = [{
    name: "Louis Joliet Mall",
    type: "Retail Mall",
    price: "$$$$",
		icon: "img/marker_purple.png",
    lat: 41.576290,
    lng: -88.165566

}];

var ModelView = function() {

    var self = this;



		
};

var viewModel = function(map) {
	var self = this;
		
		var markers = ko.observableArray([]);
		
		this.runClick = function() {
			
					runLocations.forEach(function(item) {
				markers.push(new display_loc(item));
			});
		}
		this.eatClick = function() {
					 	eatLocations.forEach(function(item) {
				markers.push(new display_loc(item));
				});
			};
		
		
		this.shopClick = function() {
					 	shopLocations.forEach(function(item) {
				markers.push(new display_loc(item));
			});
		};
		
		this.clearClick = function() {
				clearMarkers();
		}
	
};
ko.applyBindings(new viewModel());