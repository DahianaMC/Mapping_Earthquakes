// Add console.log to check to see if our code is working.
console.log("working");

// Get data from cities.js
let cityData = cities;

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

// // Another way to create the map object with a center and zoom level.
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// //  Add a marker to the map for Los Angeles, California.
// let marker = L.marker([34.0522, -118.2437]).addTo(map);


// We create the tile layer that will be the background of our map.
let light = L.tileLayer(' https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'light-v10',
    maxZoom: 18,
    accessToken: API_KEY
 });

 let darkMap = L.tileLayer(' https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'navigation-preview-night-v2',
  maxZoom: 18,
  accessToken: API_KEY
});

// // Create the map object with center at the San Francisco airport.
// let map = L.map('mapid', {
//   center: [37.5, -122.5],
//   zoom: 10,
//   layers: [streets]
// });

// Create the map object with center and zoom level.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [light]
});

// Accesing the Toronto Data GeoJSON URL
let torontoData = "https://raw.githubusercontent.com/DahianaMC/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/torontoRoutes.json"

// Create a style for the lines.
let myStyle = {
	color: "#ffffa1",
	weight: 2
}
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
  var torontoDataRetrieve = data;
  console.log(torontoDataRetrieve);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data).addTo(map);

// The onEachFeature Function. 
L.geoJson(torontoDataRetrieve, {
  style: myStyle,
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2><hr> <h3>Destination: " + feature.properties.dst + "</h3>");
   }
}).addTo(map);

});


// // Grabbing our GeoJSON data. One point
// L.geoJSON(sanFranAirport, {
//   // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng)
//     .bindPopup("<h2>Airport Code: " + feature.properties.faa + "</h2><hr> <h3>Airport Name: " + feature.properties.name + "</h3>")
//   }
// }).addTo(map);

// // The onEachFeature Function. One point
// L.geoJson(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup();
//    }
// }).addTo(map);

// // Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [30.1974757,-97.6685416],
//   [43.6777215,-79.6270084],
//   [40.6413151,-73.7803278]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "blue",
//   weight: 4,
//   dashArray: "6,6",
//   opacity: 0.5,
// }).addTo(map);

// Add a Circle to the Map, using the circle() function
// var circle = L.circle([34.0522, -118.2437], {
//   color: 'black',
//   fillColor: '#ffffa1',
//   fillOpacity: 0.5,
//   radius: 300
// }).addTo(map);

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     radius: (city.population-200000)/100000,
//     color: 'orange',
//     fillColor: '#CB8427',
//     fillOpacity: 0.5,
//   })
// 	.bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//   .addTo(map);
//   });

var baseMaps = {
  'Day Navigation': light,
  'Night Navigation': darkMap
};

// var marker = {
//   CircleMarker: circle
// };

// Then we add our 'graymap' tile layer to the map.
L.control.layers(baseMaps).addTo(map);