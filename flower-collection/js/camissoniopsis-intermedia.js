var subSightings = [[-119.634,34.4968],[-119.65,34.4605],[-119.655,34.5242],[-119.65,34.5197],[-119.624,34.4953],[-119.736,34.4677],[-119.746,34.5846],[-119.634,34.4966],[-119.751,34.6182],[-119.783,34.5494],[-119.735,34.4671],[-119.764,34.6235],[-119.59,34.4745],[-119.738,34.4689],[-119.65,34.4608],[-119.495,34.4792],[-119.636,34.4975],[-119.496,34.4773],[-119.59,34.4746],[-119.962,34.7592],[-119.623,34.4949],[-119.755,34.531],[-119.999,34.8003],[-119.746,34.4946],[-119.384,34.5085],[-119.634,34.497],[-119.677,34.4559],[-119.632,34.5081],[-119.637,34.4959],[-119.783,34.5584],[-119.651,34.5197],[-119.786,34.555],[-119.632,34.4957],[-119.636,34.4976],[-119.722,34.4754],[-119.635,34.4974],[-119.77,34.5514],[-119.785,34.5564],[-119.668,34.4893],[-119.634,34.4971],[-119.591,34.4747],[-119.623,34.4951],[-119.747,34.6137],[-119.591,34.4748],[-119.626,34.4955],[-119.786,34.5488],[-119.668,34.5062],[-119.786,34.5546],[-119.579,34.49],[-119.635,34.4973],[-119.745,34.4849],[-119.628,34.4954],[-119.637,34.4977],[-119.636,34.49],[-119.746,34.6136],[-119.963,34.7585],[-119.651,34.5198],[-119.757,34.6192],[-119.778,34.5522],[-119.635,34.4975],[-119.655,34.4884],[-119.735,34.4672],[-119.974,34.7583],[-119.715,34.4709],[-119.723,34.4756],[-119.779,34.5538],[-119.634,34.4969],[-119.637,34.4976],[-119.751,34.6181],[-119.637,34.4978],[-119.636,34.4974],[-119.696,34.4781],[-119.642,34.4701],[-119.761,34.5662],[-119.744,34.5888],[-119.786,34.5553],[-119.495,34.4807],[-119.622,34.4944],[-119.772,34.6274],[-119.655,34.5241],[-119.495,34.4832],[-119.59,34.4747],[-119.635,34.4831],[-119.634,34.4965],[-119.591,34.4745],[-119.748,34.5239],[-119.651,34.5196],[-119.961,34.7587],[-118.99,34.1031],[-119.591,34.4746]];
$(document).ready(function() {
	var vectorSource = new ol.source.Vector({
      //create empty vector
    });

	//create a bunch of icons and add to source vector
	subSightings.forEach(function(item,index) {
		var iconFeature = new ol.Feature({
		          geometry: new  
		            ol.geom.Point(ol.proj.fromLonLat(item)),
		        name: 'Flower'
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

	$('.sightings-wrapper tbody tr .locate').click(function() {
		$('.sightings-wrapper tr').each(function() {
			$(this).removeClass('active');
		});
		$(this).parent('tr').addClass('active');
		lat = parseFloat($(this).siblings('.lat').text());
		lon = parseFloat($(this).siblings('.lon').text());
        map.getView().animate({
          center: ol.proj.fromLonLat([lon,lat]),
          duration: 2000,
          zoom: 18
        });
        var elmnt = document.getElementById('map-wrapper');
		elmnt.scrollIntoView();
    });

	var extent = vectorLayer.getSource().getExtent();
	map.getView().fit(extent, map.getSize());

	$('.map-wrapper button').click(function() {
		map.getView().fit(extent, map.getSize());
	});
});