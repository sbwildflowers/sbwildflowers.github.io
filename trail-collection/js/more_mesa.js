var geolocs = [[-119.8,34.4183],[-119.8,34.4183],[-119.787,34.4203],[-119.798,34.4236],[-119.799,34.4204],[-119.8,34.4185],[-119.787,34.4208],[-119.787,34.4207],[-119.8,34.4186],[-119.8,34.4189],[-119.787,34.4248],[-119.8,34.4223],[-119.8,34.4223],[-119.802,34.4195],[-119.79,34.4176],[-119.787,34.4226],[-119.788,34.4211],[-119.79,34.4236],[-119.8,34.4187],[-119.789,34.4178],[-119.796,34.4187],[-119.8,34.4185],[-119.794,34.4241],[-119.799,34.4185],[-119.797,34.4241],[-119.799,34.4204],[-119.798,34.4238],[-119.786,34.4209],[-119.802,34.4205],[-119.799,34.4231],[-119.804,34.4246],[-119.802,34.4195],[-119.8,34.4185],[-119.8,34.4187],[-119.802,34.4197],[-119.799,34.4183],[-119.798,34.4239],[-119.798,34.4239],[-119.794,34.4184],[-119.8,34.4184],[-119.799,34.4186],[-119.803,34.4236],[-119.803,34.4244],[-119.802,34.422],[-119.8,34.4223],[-119.787,34.4196],[-119.787,34.4233],[-119.8,34.4183],[-119.8,34.4183],[-119.788,34.418],[-119.788,34.4181],[-119.788,34.4179],[-119.787,34.4207],[-119.771,34.4346],[-119.789,34.4178],[-119.8,34.4206],[-119.793,34.4244],[-119.799,34.4184],[-119.8,34.4184],[-119.789,34.4178],[-119.798,34.4184],[-119.788,34.4172],[-119.796,34.4187],[-119.787,34.4201],[-119.797,34.4238],[-119.8,34.4188],[-119.8,34.4183],[-119.796,34.4187],[-119.788,34.4172],[-119.793,34.4184],[-119.795,34.4183],[-119.794,34.4239],[-119.799,34.4184],[-119.799,34.4184],[-119.799,34.4183],[-119.795,34.4254],[-119.796,34.4205],[-119.8,34.4194],[-119.797,34.424],[-119.797,34.424],[-119.798,34.4239],[-119.801,34.424],[-119.802,34.4243],[-119.801,34.424],[-119.801,34.424],[-119.794,34.424],[-119.799,34.4205],[-119.8,34.42],[-119.796,34.4187],[-119.8,34.4186],[-119.787,34.4203],[-119.8,34.4195],[-119.794,34.4185],[-119.8,34.4202],[-119.788,34.4218],[-119.8,34.4183],[-119.788,34.4187],[-119.802,34.4191],[-119.786,34.4209],[-119.787,34.4203],[-119.795,34.4241],[-119.802,34.4191],[-119.787,34.4207],[-119.787,34.4202],[-119.789,34.4179],[-119.794,34.4185],[-119.803,34.4244],[-119.8,34.4193],[-119.8,34.4209],[-119.788,34.4182],[-119.794,34.42],[-119.793,34.4184],[-119.788,34.418],[-119.788,34.4179],[-119.787,34.4201],[-119.787,34.4217],[-119.802,34.4188],[-119.802,34.4207],[-119.787,34.4248],[-119.794,34.4242],[-119.791,34.4179],[-119.8,34.4184],[-119.8,34.4186],[-119.799,34.4185],[-119.8,34.4186],[-119.8,34.4185],[-119.787,34.4236],[-119.792,34.4243],[-119.801,34.4227],[-119.788,34.4214],[-119.799,34.4184],[-119.787,34.4202],[-119.799,34.4184],[-119.787,34.4204],[-119.795,34.4241],[-119.794,34.4242],[-119.803,34.4244],[-119.798,34.4239],[-119.798,34.4239],[-119.8,34.4202],[-119.798,34.4239],[-119.8,34.4185],[-119.802,34.4198],[-119.8,34.4221],[-119.799,34.4184],[-119.8,34.4239],[-119.804,34.4246],[-119.786,34.4209],[-119.786,34.421],[-119.798,34.4239],[-119.794,34.424],[-119.805,34.424],[-119.8,34.4184],[-119.789,34.4179],[-119.797,34.4238],[-119.797,34.424],[-119.788,34.4211],[-119.797,34.424],[-119.799,34.424],[-119.803,34.4244],[-119.786,34.4211],[-119.787,34.4203],[-119.8,34.4239],[-119.8,34.4239],[-119.797,34.4239],[-119.797,34.4241],[-119.793,34.4183],[-119.787,34.4204],[-119.79,34.424],[-119.798,34.4185]];
var species = [2231,2233,1764,1955,1956,2025,2584,2421,2422,1688,2050,1640,1715,1717,2589,2113,2114,2069,1933,2160,2161,2162,2164,2119,1796,2438,2051,1690,1939,2293,2294,2509,1945,1786,1787,1766,1725,2094,2141,2142,2323,2324,1727,1691,2273,2325,1859,2143,1966,2747,1733,2125,1812,2512,1814,2127,2213,2224,2227,2228,1779,1780,2152,2153,1866,1713,2242,1947,2395,2314,2526,2426,1979,1980,1987,1657,2455,2102,1747,1749,2254,2130,2290,2106,2107,2307,1843,2447,1928,1795,2061,1684,1949,2064,2392,1744,2188,2678,2249,2291,1931,2200,2203];

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