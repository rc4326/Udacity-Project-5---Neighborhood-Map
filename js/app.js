//api calls
	//yelp call for food locations


		//TODO add call from Strava for run locations
		
		//TODO add call from fourSquare for shopping locations

//model
//load default locations for running, eating, and shopping
var runLocations = [

    {
        name: "Essington Lake",
        surface: "asphalt",
        trail: "bike path",
        popDense: "moderate",
        icon: "img/marker_blue.png",
        lat: 41.543218,
        lng: -88.161496

    }, {
        name: "I&M Canal",
        surface: "crushed limestone",
        trail: "towpath",
        popDense: "light",
        icon: "img/marker_blue.png",
        lat: 41.485553,
        lng: -88.163642
    }, {
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
    menu: "lunch dinner",
    type: "fast casual",
    cost: "$$$",
    icon: "img/marker_green.png",
    lat: 41.522177,
    lng: -88.145398

}, {
    name: "Portillos",
    menu: "lunch, dinner",
    type: "fast casual",
    cost: "$$$",
    icon: "img/marker_green.png",
    lat: 41.543106,
    lng: -88.199733
}, {
    name: "Shooters Roadhouse",
    menu: "dinner",
    type: "casual dining",
    cost: "$$$$",
    icon: "img/marker_green.png",
    lat: 41.521379,
    lng: -88.203714
}, {
    name: "Chicken n Spice",
    menu: "lunch, dinner",
    type: "fast food",
    cost: "$$",
    icon: "img/marker_green.png",
    lat: 41.528891,
    lng: -88.081630
}];

var shopLocations = [{
    name: "Louis Joliet Mall",
    type: "Retail Mall",
    price: "$$$$",
    icon: "img/marker_purple.png",
    lat: 41.576290,
    lng: -88.165566

}, {
    name: "Hill Crest Shopping Center",
    type: "Outdoor Mall",
    price: "$$",
    icon: "img/marker_purple.png",
    lat: 41.552988,
    lng: -88.127024
}, {
    name: "Downtown Lockport",
    type: "Boutique",
    price: "$$$",
    icon: "img/marker_purple.png",
    lat: 41.589044,
    lng: -88.057673
}];

var EatPlace = function(eat) {
		var self = this;
		
		this.name = ko.observable(eat.name);
		this.url = ko.observable(eat.url);
}


var ModelView = function() {
	
	var self = this;


//yelp call to get food location data

	var data;
	this.foodList = ko.observableArray([]);
	var eaturl = "http://www.sbcoyne.com/bob/school_lessons/p5/yelpOauth.php";
		$.ajax({
      type: "GET",
      url: eaturl,
      timeout: 5000,
      contentType: "application/json",
      dataType: "json",
      cache: false,
		}).done(function(response) {
			data = response.businesses;
				
			data.forEach(function(food){
					self.foodList.push(new EatPlace(food));
			});
					display_food(data);
		});


};

var viewModel = function(map) {
    var self = this;
	 var click;
    var markers = ko.observableArray([]);

    this.runClick = function() {

        runLocations.forEach(function(item) {
            markers.push(new display_loc(item));
        });
    }
    this.eatClick = function() {
			if(click !== 1) {
        eatLocations.forEach(function(item) {
            markers.push(new display_loc(item));
						click = 1;
				});
					ModelView();
        };
			
    };


    this.shopClick = function() {
        shopLocations.forEach(function(item) {
            markers.push(new display_loc(item));
        });
    };

    this.clearClick = function() {
        clearMarkers();
				click = 0;
    };

};
ko.applyBindings(new viewModel());