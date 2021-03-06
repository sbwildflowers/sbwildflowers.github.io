var geolocs = [[-119.805,34.5133],[-119.806,34.5154],[-119.816,34.5344],[-119.816,34.541],[-119.817,34.529],[-119.806,34.5123],[-119.812,34.5212],[-119.818,34.5395],[-119.817,34.5299],[-119.819,34.5374],[-119.819,34.5371],[-119.821,34.5298],[-119.82,34.5433],[-119.804,34.5149],[-119.812,34.5211],[-119.806,34.5154],[-119.812,34.5211],[-119.805,34.5133],[-119.804,34.5134],[-119.812,34.5242],[-119.812,34.5241],[-119.804,34.515],[-119.818,34.5287],[-119.809,34.512],[-119.803,34.5149],[-119.805,34.515],[-119.805,34.5133],[-119.816,34.5411],[-119.804,34.5149],[-119.819,34.5383],[-119.809,34.512],[-119.812,34.5239],[-119.817,34.5402],[-119.814,34.5252],[-119.817,34.54],[-119.805,34.5151],[-119.805,34.515],[-119.817,34.54],[-119.817,34.5399],[-119.817,34.532],[-119.817,34.532],[-119.821,34.5426],[-119.816,34.5406],[-119.816,34.5298],[-119.809,34.512],[-119.808,34.5163],[-119.817,34.54],[-119.816,34.5405],[-119.817,34.532],[-119.805,34.515],[-119.807,34.5119],[-119.807,34.5117],[-119.812,34.524],[-119.817,34.5405],[-119.816,34.5293],[-119.818,34.5364],[-119.821,34.5432],[-119.804,34.515],[-119.819,34.5382],[-119.816,34.5307],[-119.818,34.5391],[-119.811,34.5205],[-119.806,34.5124],[-119.805,34.5134],[-119.815,34.5259],[-119.816,34.5406],[-119.806,34.5122],[-119.817,34.5402],[-119.805,34.5133],[-119.811,34.5204],[-119.804,34.5135],[-119.812,34.5215],[-119.807,34.5121],[-119.817,34.5333],[-119.82,34.5431],[-119.804,34.515],[-119.809,34.5119],[-119.818,34.5383],[-119.805,34.513],[-119.814,34.5254],[-119.804,34.5149],[-119.819,34.5379],[-119.804,34.5148],[-119.808,34.5118],[-119.811,34.5209],[-119.805,34.515],[-119.817,34.5333],[-119.804,34.5136],[-119.809,34.5177],[-119.809,34.5177],[-119.817,34.5399],[-119.821,34.5437],[-119.815,34.5411],[-119.808,34.5117],[-119.817,34.5426],[-119.816,34.5269],[-119.818,34.5389],[-119.818,34.5396],[-119.817,34.5299],[-119.818,34.5391],[-119.809,34.5121],[-119.817,34.5322],[-119.818,34.5391],[-119.817,34.5332],[-119.819,34.5384],[-119.81,34.5183],[-119.818,34.5388],[-119.804,34.515],[-119.819,34.5374],[-119.815,34.541],[-119.814,34.5254],[-119.808,34.5164],[-119.806,34.5154],[-119.816,34.5312],[-119.818,34.5358],[-119.817,34.5333],[-119.819,34.5368],[-119.816,34.5345],[-119.817,34.5401],[-119.816,34.535],[-119.819,34.5371],[-119.817,34.5331],[-119.816,34.5331],[-119.816,34.541],[-119.811,34.5199],[-119.804,34.5148],[-119.821,34.5435],[-119.818,34.5395],[-119.818,34.5277],[-119.815,34.541],[-119.803,34.5147],[-119.818,34.5431],[-119.82,34.5437],[-119.816,34.5347],[-119.819,34.5433],[-119.82,34.5436],[-119.82,34.5437],[-119.817,34.5319],[-119.819,34.5383],[-119.813,34.5249],[-119.807,34.5157],[-119.805,34.515],[-119.807,34.5121],[-119.818,34.5347],[-119.819,34.5375],[-119.819,34.5435],[-119.809,34.512],[-119.817,34.5273],[-119.816,34.5346],[-119.817,34.5319],[-119.817,34.5331],[-119.822,34.5425]];
var species = [2564,2231,1835,2510,2276,1621,1805,1910,1698,1997,1998,1999,2639,1708,2449,1715,1716,2589,1671,1674,1933,1937,2117,2118,1896,2265,2266,2270,2272,1666,1799,2171,2074,2332,1898,1963,1786,2336,2320,1902,2026,1610,1649,1970,2088,1772,1972,2273,1731,2147,1667,2280,1811,2125,2282,1915,2198,1872,2013,1845,2211,1779,2191,2414,1995,2021,2396,1689,2037,1617,1618,1622,1991,2241,2317,1612,1749,1750,2405,2254,2257,2259,1822,2368,2337,2185,1740,2290,1877,1882,1883,1885,1843,1695,2154,1869,1826,1829,2027,1846,2188,1888,2250,1788,1931];

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