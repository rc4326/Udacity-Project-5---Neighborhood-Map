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

//Map Creation

function initMap() {
    var myTown = {
        lat: 41.525,
        lng: -88.081
    };
    var mapOptions = {
        center: myTown,
        zoom: 12
    }
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    ModelView(map);
};


var ModelView = function(data) {

    var self = this;

    this.lat = ko.observable(data.lat);
    this.lng = ko.observable(data.lng);
    this.name = ko.observable(data.name);

    var myLatlng = new google.maps.LatLng(data.lat + "," + data.lng);

    var create_Markers = function(map) {

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data.name
        });
        marker.setMap(map);
    };
    console.log("this ran");
    console.log(data.lat + "," + data.lng);
    create_Markers();

};

var viewModel = function(map) {

    var self = this;

    this.run = ko.observableArray([]);
    this.eat = ko.observableArray([]);
    this.shop = ko.observableArray([]);

    this.runClick = function() {
        runLocations.forEach(function(runItem) {
            self.run.push(new ModelView(runItem));
        });

    };

    var eat = function() {
        eatLocations.forEach(function(eatItem) {
            self.eat.push(new ModelView(eatItem));

        });
    };

    var shop = function() {
        shopLocations.forEach(function(shopItem) {
            self.shop.push(new ModelView(shopItem));

        });
    };

    this.currentLocation = ko.observable(this.run()[0]);
};


ko.applyBindings(new viewModel());