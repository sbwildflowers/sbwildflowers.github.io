var geolocs = [[-119.869,34.7747],[-119.874,34.7722],[-119.913,34.7686],[-119.89,34.7788],[-119.905,34.7784],[-119.91,34.7706],[-119.889,34.7742],[-119.904,34.7789],[-119.902,34.7825],[-119.904,34.7794],[-119.905,34.7784],[-119.92,34.7665],[-119.912,34.769],[-119.87,34.7742],[-119.883,34.7765],[-119.902,34.7805],[-119.869,34.7729],[-119.899,34.7815],[-119.902,34.7827],[-119.908,34.7765],[-119.867,34.7767],[-119.887,34.7733],[-119.919,34.767],[-119.866,34.7772],[-119.887,34.7752],[-119.901,34.7838],[-119.904,34.7791],[-119.89,34.7799],[-119.874,34.7721],[-119.92,34.7664],[-119.928,34.7664],[-119.91,34.7701],[-119.907,34.7774],[-119.886,34.7767],[-119.876,34.772],[-119.89,34.7754],[-119.868,34.776],[-119.908,34.7766],[-119.908,34.7766],[-119.912,34.7688],[-119.887,34.7756],[-119.873,34.773],[-119.903,34.7803],[-119.912,34.769],[-119.883,34.7765],[-119.909,34.7743],[-119.911,34.7721],[-119.869,34.7748],[-119.91,34.7719],[-119.902,34.7825],[-119.87,34.7735],[-119.885,34.7739],[-119.883,34.7766],[-119.876,34.7703],[-119.92,34.7664],[-119.911,34.7696],[-119.901,34.781],[-119.884,34.7766],[-119.923,34.7665],[-119.89,34.7803],[-119.874,34.7718],[-119.873,34.7726],[-119.896,34.7818],[-119.903,34.7805],[-119.92,34.7671],[-119.893,34.7857],[-119.872,34.7741],[-119.887,34.7735],[-119.897,34.7814],[-119.907,34.7775],[-119.908,34.7767],[-119.869,34.7747],[-119.9,34.7816],[-119.911,34.7731],[-119.893,34.7857],[-119.923,34.7665],[-119.887,34.7751],[-119.907,34.7773],[-119.888,34.7742],[-119.875,34.7719],[-119.889,34.7753],[-119.885,34.7738],[-119.9,34.7815],[-119.887,34.7772],[-119.89,34.7761],[-119.9,34.7817],[-119.9,34.7815],[-119.894,34.7804],[-119.866,34.7768],[-119.905,34.7784],[-119.908,34.7765],[-119.864,34.7783],[-119.875,34.7703],[-119.889,34.774],[-119.884,34.7764],[-119.901,34.781],[-119.87,34.7729],[-119.874,34.7723],[-119.908,34.7765],[-119.904,34.7792],[-119.901,34.781],[-119.868,34.7761],[-119.875,34.7707],[-119.88,34.7717],[-119.911,34.7731],[-119.89,34.7747],[-119.874,34.7725],[-119.91,34.7736],[-119.911,34.7709]];
var species = [2233,2234,1835,1955,2584,1999,1602,2207,2208,1717,2413,1937,2162,1892,1895,1896,2120,2266,2269,2277,1752,2074,2332,1718,2458,1963,2509,2336,2320,1670,2123,2562,1967,2350,2173,1722,1968,2087,2088,1772,2142,2124,2323,1972,2177,1890,1730,2353,2198,2013,2016,1755,2018,2040,1701,1702,2213,2219,2224,2227,2228,2151,2191,2193,2242,2245,1996,2077,2396,2037,2524,1617,1618,1917,1622,1987,1988,2455,1922,2317,2303,1749,2405,2305,2307,1880,1883,1843,1696,1607,1794,1795,1953,1742,1828,1829,2392,2135,2188,2339,1833,2520,2529];

$(document).ready(function() {
	var vectorSource = new ol.source.Vector({
      //create empty vector
    });

	//create a bunch of icons and add to source vector
	geolocs.forEach(function(item,index) {
		var iconFeature = new ol.Feature({
		          geometry: new  
		            ol.geom.Point(ol.proj.fromLonLat(item)),
		        name: 'Flower',
		        coords: 'hi' 
		});
		vectorSource.addFeature(iconFeature);
	});

    //create the style
    var iconStyle = new ol.style.Style({
      image: new ol.style.Icon( ({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        opacity: 0.75,
        src: '../flower.png'
      }))
    });

    //add the feature vector to the layer vector, and apply a style to whole layer
    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: iconStyle
    });

	var attribution = new ol.control.Attribution({
	     collapsible: false
	 });

	 var map = new ol.Map({
	     controls: ol.control.defaults({attribution: false}).extend([attribution]),
	     layers: [
	         new ol.layer.Tile({
	             source: new ol.source.OSM()
	         }),
	         vectorLayer
	     ],
	     target: 'map',
	     view: new ol.View({
	         center: ol.proj.fromLonLat([-119.644, 34.5158]),
	         zoom: 15,
	         maxZoom: 20
	     })
	 });

	// display popup on click
	map.on('click', function (evt) {
	  var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
	    return feature;
	  });
	  console.log($(element));
	  if (feature) {
	    var coordinates = feature.getGeometry().getCoordinates();
	    var lonlat = ol.proj.transform(coordinates, 'EPSG:3857', 'EPSG:4326');
	    console.log(lonlat);
	  }
	});

	var extent = vectorLayer.getSource().getExtent();
	map.getView().fit(extent, map.getSize());
});