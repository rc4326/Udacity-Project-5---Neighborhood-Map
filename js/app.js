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
	
};
ko.applyBindings(new viewModel());