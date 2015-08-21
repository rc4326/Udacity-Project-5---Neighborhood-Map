//create a global map variable for use in all functions
//create a golbal markers array to store map markers
//create the variable to store my neighborhood coordinates
var map;
var markers = [];
var myTown = {
    lat: 41.525,
    lng: -88.081
};

//create the map callback in HTML will run the initMap function
//myTown is the center point on the map zoomed into 12 
//addMarker is called passing on the coordinates and the name for the Marker
function initMap() {

    var mapOptions = {
        center: myTown,
        zoom: 12
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    addMarker(myTown, "Home");
}
//addMarker is the function that creates map markers
//it takes 3 variables
function addMarker(loc, name, icon) {

    var marker = new google.maps.Marker({
        position: loc,
        icon: icon,
        title: name,
        map: map
    });
    markers.push(marker);
    setMapOnAll(map);
};
//object data is passed to display_loc function
//the function pulls out and assigns the keys to variables
//those variables are then passed to the addMarker function
var display_loc = function(data) {

    var lat = data.lat;
    var lng = data.lng;
    var mylatlng = {
        lat: lat,
        lng: lng
    };
    var myLocName = data.name;
    var myIcon = data.icon;

    addMarker(mylatlng, myLocName, myIcon);


    console.log("click ran");
};
//setMapOnAll function enables visiablity of the markers on the map
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);

    };
};

//it also passes on the null attribute to the setMapOnAll function to remove them from the map
//clearMarkers removes the markers stored in the array markers by setting the array to empty
function clearMarkers() {
    setMapOnAll(null);
    markers = [];
};