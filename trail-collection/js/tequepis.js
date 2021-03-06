var geolocs = [[-119.951,34.5271],[-119.956,34.5347],[-119.955,34.5404],[-119.951,34.5266],[-119.96,34.5356],[-119.952,34.5276],[-119.958,34.5259],[-119.951,34.5272],[-119.957,34.5339],[-119.956,34.5454],[-119.96,34.533],[-119.958,34.5323],[-119.958,34.5356],[-119.955,34.5286],[-119.958,34.5331],[-119.951,34.5268],[-119.954,34.5285],[-119.956,34.5425],[-119.957,34.5409],[-119.959,34.5371],[-119.957,34.5311],[-119.956,34.5465],[-119.957,34.5402],[-119.956,34.5294],[-119.956,34.5511],[-119.957,34.5316],[-119.957,34.5409],[-119.96,34.5325],[-119.951,34.5268],[-119.96,34.5355],[-119.948,34.527],[-119.955,34.5446],[-119.955,34.5405],[-119.958,34.5376],[-119.953,34.527],[-119.957,34.5414],[-119.957,34.541],[-119.958,34.5323],[-119.957,34.5363],[-119.955,34.5394],[-119.957,34.5402],[-119.957,34.5409],[-119.957,34.5411],[-119.96,34.5333],[-119.956,34.5416],[-119.95,34.5271],[-119.958,34.5324],[-119.96,34.5322],[-119.957,34.5409],[-119.956,34.536],[-119.956,34.5287],[-119.951,34.5271],[-119.957,34.5327],[-119.957,34.5316],[-119.955,34.5408],[-119.954,34.5408],[-119.957,34.5337],[-119.957,34.5312],[-119.956,34.5296],[-119.952,34.5272],[-119.957,34.5364],[-119.958,34.5401],[-119.957,34.541],[-119.96,34.5336],[-119.957,34.5321],[-119.952,34.5272],[-119.955,34.5287],[-119.956,34.5291],[-119.956,34.529],[-119.953,34.5279],[-119.956,34.5295],[-119.955,34.527],[-119.96,34.5326],[-119.954,34.5286],[-119.958,34.5376],[-119.959,34.537],[-119.956,34.5295],[-119.955,34.544],[-119.956,34.5488],[-119.955,34.5404],[-119.955,34.539],[-119.957,34.5301],[-119.955,34.5402],[-119.955,34.5286],[-119.955,34.551],[-119.954,34.5406],[-119.957,34.5402],[-119.956,34.5349],[-119.957,34.5301],[-119.956,34.5423],[-119.958,34.5353],[-119.956,34.5291],[-119.954,34.5271],[-119.956,34.5299],[-119.955,34.5407],[-119.957,34.5304],[-119.955,34.5286],[-119.955,34.5444],[-119.951,34.5267],[-119.955,34.529],[-119.956,34.5355],[-119.959,34.5336],[-119.955,34.5437],[-119.958,34.5336],[-119.956,34.5298],[-119.957,34.5414],[-119.957,34.5359],[-119.96,34.533],[-119.958,34.5339],[-119.957,34.5413],[-119.96,34.5355],[-119.955,34.5446],[-119.958,34.5337],[-119.959,34.5348],[-119.955,34.5451],[-119.957,34.5402],[-119.953,34.5279],[-119.951,34.5272],[-119.955,34.529],[-119.956,34.5434],[-119.955,34.5448],[-119.956,34.5286],[-119.956,34.5513],[-119.956,34.5402],[-119.96,34.5357],[-119.957,34.5311],[-119.956,34.5384],[-119.953,34.5284],[-119.954,34.5408],[-119.96,34.5332],[-119.956,34.539],[-119.96,34.5327],[-119.956,34.5467],[-119.956,34.5459]];
var species = [2231,2234,1835,2276,1621,2005,2195,2531,1910,1698,2584,1997,1998,2746,1600,1715,1716,2659,1671,1674,2118,1892,2438,2266,2271,2272,2277,1808,2171,2074,2332,1898,1718,2294,1963,1942,2320,1670,1902,2026,1610,2173,1719,1726,1970,2087,2088,1772,2142,2494,2323,1972,2516,2273,1681,1857,1861,1863,1851,2143,2012,1667,2280,1733,1811,2281,1915,1814,2198,1872,2013,1682,2040,1845,2211,2220,2224,2191,1713,1876,1973,2253,2396,1689,2314,2328,2524,1617,1622,1976,1980,1982,1983,1985,1991,2241,1611,2285,1749,1614,2254,2260,2337,2275,2185,2290,1877,1883,1885,1843,1695,1696,1697,2447,1794,2062,1949,1953,1869,2067,1846,1605,1703,2135,2188,1683,2339,1833,2520,1788,1931];

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