mapboxgl.accessToken = 'pk.eyJ1IjoibmsyOTcwIiwiYSI6ImNreDR4ZTZ4dDBhbngydnF1dzBxNzJvMDkifQ.GXAfMWbXTZ7FOAj3rI2oIg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/nk2970/cl4aq1o1l000k15mzupaicgsl',
    zoom: 10.6,
    maxZoom:18,
    minZoom:3,
    center: [-73.991, 40.748]
});

// map1
map.on("load", function () {
    map.addLayer(
      {
        id: "citibike2020",
        type: "circle",
    source: {
      type: "geojson",
      data: "data/citibikeSep2020.geojson",
    },
    paint: {
      'circle-radius': {
        stops: [[10, 3], [16, 12]]
        },
        "circle-color":
        [
          "interpolate",
          ["linear"],
          ["get", "tripCount_2020_diff"],
          -900,
          "#008837",
          -17,
          "#b8e186",
          -4,
          "#f2d0e5",
          8,
          "#d64fa2"

        ],
        
        
        "circle-stroke-color": "#ffffff",
        "circle-stroke-width": 0.2,
        
        "circle-opacity":1,
      },
      },

      "waterway-label" 
    // Here's where we tell Mapbox where to slot this new layer
    ); 
    

  });



 // Create the popup
 map.on('click', 'citibike2020', function (e) {
  var stationName = e.features[0].properties.station_name;
  var tripStart = e.features[0].properties.tripCount_start2020;
  var tripEnd = e.features[0].properties.tripCount_end2020;
  var tripDiff = e.features[0].properties.tripCount_2020_diff;
  new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML('<h4>'+stationName+'</h4>'
          +'<h2>Difference: '+tripDiff+'</h2>'
          + '<p>Starting trip#: '+tripStart+'<br>'
          +"Ending trip#: " + tripEnd + '</p>')
      .addTo(map);
});


// Change the cursor to a pointer when the mouse is over the us_states_elections layer.
map.on("mouseenter", "citibike2020", function () {
  map.getCanvas().style.cursor = "pointer";
});
// Change it back to a pointer when it leaves.
map.on("mouseleave", "citibike2020", function () {
  map.getCanvas().style.cursor = "";
});





// map2-----------------------------------------------------------------------
var map2 = new mapboxgl.Map({
  container: 'map2',
  style: 'mapbox://styles/nk2970/cl4aq1o1l000k15mzupaicgsl',
    zoom:  10.6,
    maxZoom:18,
    minZoom:3,
    center:  [-73.991, 40.748]
});


map2.on("load", function () {
map2.addLayer(
  {
    id: "citibike2021",
    type: "circle",
    source: {
      type: "geojson",
      data: "data/citibikeSep2021.geojson",
    },
    paint: {
      'circle-radius': {
        stops: [[10, 3], [16, 12]]
        },
        "circle-color":
        [
          "interpolate",
          ["linear"],
          ["get", "tripCount_2021_diff"],
          -500,
          "#008837",
          -11,
          "#b8e186",
          2,
          "#f2d0e5",
          15,
          "#d64fa2"

        ],
        
        
        "circle-stroke-color": "#ffffff",
        "circle-stroke-width": 0.2,
        
        "circle-opacity":1,
    },
    
  },
  "waterway-label"
);


});

// popup
map2.on('click', 'citibike2021', function (e) {
  var stationName = e.features[0].properties.station_name;
  var tripStart = e.features[0].properties.tripCount_start2021;
  var tripEnd = e.features[0].properties.tripCount_end2021;
  var tripDiff = e.features[0].properties.tripCount_2021_diff;
  new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML('<h4>'+stationName+'</h4>'
      +'<h2>Difference: '+tripDiff+'</h2>'
      + '<p>Starting trip#: '+tripStart+'<br>'
      +"Ending trip#: " + tripEnd + '</p>')
      .addTo(map2);
});


// Change the cursor to a pointer when the mouse is over the us_states_elections layer.
map2.on("mouseenter", "citibike2021", function () {
  map2.getCanvas().style.cursor = "pointer";
});
// Change it back to a pointer when it leaves.
map2.on("mouseleave", "citibike2021", function () {
  map2.getCanvas().style.cursor = "";
});


// define layer names
const layers = [
  'Starting trips exceeding',
  'More starting trips',
  'More ending trips',
  'Ending trips exceeding',
  ];
  const colors = [
    "#d64fa2",
    "#f2d0e5",
    "#b8e186",
    "#008837" 
    
  ];
   
  // create legend
  const legend = document.getElementById('legend');
   
  layers.forEach((layer, i) => {
  const color = colors[i];
  const item = document.createElement('div');
  const key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;
   
  const value = document.createElement('span');
  value.innerHTML = `${layer}`;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
  });
   