// Add console.log to check to see if our code is working.
console.log("working");

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
let streets = L.tileLayer(' https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'streets-v11',
    maxZoom: 18,
    accessToken: API_KEY
 });

 let darkMap = L.tileLayer(' https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'dark-v10',
  maxZoom: 18,
  accessToken: API_KEY
});

// Create the map object with a center and zoom level.
let map = L.map('mapid', {
  center: [34.0522, -118.2437],
  zoom: 14,
  layers: [streets]
});

// Add a Circle to the Map, using the circle() function
var circle = L.circleMarker([34.0522, -118.2437], {
  color: 'black',
  fillColor: '#ffffa1',
  fillOpacity: 0.5,
  radius: 300
}).addTo(map);

var baseMaps = {
  DayTime: streets,
  NightTime: darkMap
};

var marker = {
  CircleMarker: circle
};

// Then we add our 'graymap' tile layer to the map.
L.control.layers(baseMaps, marker).addTo(map);