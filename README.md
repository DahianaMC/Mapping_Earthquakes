# Mapping_Earthquakes
## Summary
- The purpose of this project is to Visualizing Earthquake Data.  The tools that will be using for visualization are: Mapbox map, Leaflet library, use a URL for GeoJSON and javascript.  We took the earthquake data for the past 7 days in the world and put in a map where is showing the magnitude of each earthquake and is represented as a circle marker, the size of the circle depends on the earthquake magnitude.  The user will be able to see different map tilelayers, in this case we were using 3 styles: street map, satellite map and the light map.  We also added the tectonic plates layer to the map.  The user will be able to switch between the map tiles and add or remove the circle markers for the earthquakes and tectonic plates.  We added a bindPopup for each earthquake with the magnitude and location information.

### Project Execution
- Create an account in Mapbox map to be able to use the geographic maps to visualize the earthquake data in a map.
- Using the Leaflet JavaScript Library we call the tilelayers from Mapbox map.  We also added the circle markers with magnitude as a circle size, and added the bindPopup with magnitude and location information.
- GeoJSON data is a type of JavaScript Object Notation (JSON) data that is specifically designed to host geographical information.  We used GeoJSON data to get the earthquake data for the past 7 days.
- Using Leaflet library we plotted the GeoJSON data in the tilelayers.
- We added the tectonic plates layer using GeoJSON and Leaflet, and we created an overlay for the Tectonic Plates to be able to add or remove the layer to the tilelayer map.

### Earthquake Data Visualization


