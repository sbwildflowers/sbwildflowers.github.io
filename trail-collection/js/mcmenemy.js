var geolocs = [[-119.638,34.4541],[-119.629,34.4545],[-119.627,34.4516],[-119.628,34.454],[-119.633,34.4539],[-119.637,34.4543],[-119.631,34.4533],[-119.637,34.4546],[-119.629,34.4553],[-119.629,34.453],[-119.635,34.4544],[-119.637,34.4543],[-119.637,34.4548],[-119.629,34.4554],[-119.634,34.4547],[-119.637,34.4542],[-119.628,34.4558],[-119.636,34.454],[-119.636,34.4568],[-119.632,34.4537],[-119.629,34.4555],[-119.628,34.4539],[-119.636,34.4542],[-119.636,34.4568],[-119.636,34.4549],[-119.635,34.4574],[-119.635,34.4545],[-119.637,34.4547],[-119.628,34.4558],[-119.639,34.454],[-119.631,34.4567],[-119.637,34.4537],[-119.638,34.454],[-119.629,34.4546],[-119.638,34.454],[-119.628,34.4518],[-119.628,34.4538],[-119.629,34.4525],[-119.634,34.4548],[-119.636,34.4568],[-119.631,34.4575],[-119.629,34.4525],[-119.636,34.4563],[-119.636,34.4572],[-119.633,34.4542],[-119.63,34.4526],[-119.635,34.4568],[-119.631,34.453],[-119.635,34.4571],[-119.629,34.4559],[-119.638,34.4543],[-119.631,34.4564],[-119.631,34.4568],[-119.637,34.4537],[-119.636,34.4556],[-119.636,34.455],[-119.628,34.4539],[-119.635,34.457],[-119.633,34.4543],[-119.628,34.4539],[-119.631,34.453],[-119.63,34.4526],[-119.638,34.454],[-119.629,34.4545],[-119.635,34.4569],[-119.636,34.4567],[-119.631,34.457],[-119.636,34.4571],[-119.629,34.4559],[-119.626,34.4517],[-119.629,34.453],[-119.629,34.4523],[-119.635,34.4571],[-119.638,34.454],[-119.637,34.4538],[-119.635,34.4574],[-119.635,34.4543],[-119.635,34.4569],[-119.628,34.4542],[-119.628,34.4541],[-119.631,34.4533],[-119.638,34.4539],[-119.628,34.4558],[-119.628,34.4541],[-119.638,34.4539],[-119.632,34.4534],[-119.636,34.4572],[-119.629,34.4556],[-119.634,34.4545],[-119.635,34.4568],[-119.635,34.4572],[-119.629,34.4529],[-119.638,34.4541],[-119.629,34.4523],[-119.636,34.4572],[-119.628,34.4541],[-119.638,34.4541],[-119.629,34.4553],[-119.634,34.4548],[-119.635,34.457],[-119.629,34.4558],[-119.637,34.4538],[-119.636,34.4543],[-119.635,34.4571],[-119.633,34.4542],[-119.635,34.4574],[-119.636,34.4545],[-119.629,34.4536],[-119.635,34.4574],[-119.635,34.4585],[-119.629,34.4551],[-119.63,34.4563],[-119.631,34.453],[-119.629,34.4534],[-119.638,34.4541],[-119.635,34.4569],[-119.629,34.4545],[-119.637,34.4538],[-119.635,34.4572],[-119.63,34.4563],[-119.63,34.4564],[-119.637,34.4547],[-119.635,34.4544],[-119.636,34.4568],[-119.636,34.4544],[-119.638,34.4541],[-119.629,34.4562],[-119.636,34.4568],[-119.637,34.4538],[-119.63,34.453],[-119.636,34.4567],[-119.638,34.4541],[-119.622,34.4519],[-119.634,34.4547],[-119.636,34.4567],[-119.635,34.4569],[-119.638,34.4542],[-119.629,34.4546],[-119.631,34.4532],[-119.636,34.4574],[-119.631,34.4566]];
var species = [1705,2231,2276,2005,1998,1708,1615,1716,1759,1674,1933,2162,1796,1625,2270,2272,2277,1666,2080,1718,1645,1963,1786,1792,2335,2590,1670,1902,1610,1649,1650,1967,2173,1725,1726,2087,2088,1772,2141,2142,2324,1972,1863,1731,2147,2280,1811,2125,1813,1915,2219,1780,1817,2183,2396,2328,1618,1980,1982,1988,2534,2285,1750,2254,1822,2274,1843,1928,1607,2061,2062,1949,1742,1869,1826,1829,1846,2188,1788];

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