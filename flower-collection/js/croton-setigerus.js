var subSightings = [[-120.239,34.4945],[-119.79,34.4952],[-119.608,34.5054],[-120.242,34.4945],[-119.957,34.541],[-120.23,34.4986],[-119.692,34.4491],[-119.865,34.5047],[-119.638,34.4975],[-119.612,34.4964],[-120.241,34.4886],[-119.793,34.4184],[-119.612,34.4961],[-119.507,34.4688],[-119.609,34.504],[-119.136,34.4432],[-119.729,34.4614],[-119.769,34.5549],[-119.743,34.5392],[-119.788,34.4182],[-119.51,34.4694],[-120.243,34.491],[-119.788,34.4183],[-119.993,34.7977],[-119.693,34.449],[-119.806,34.5438],[-119.612,34.4958],[-119.688,34.4748],[-119.758,34.4633],[-119.729,34.4615],[-119.612,34.4956],[-119.731,34.4632],[-120.23,34.498],[-119.752,34.5157],[-119.611,34.4965],[-120.243,34.4894],[-119.849,34.4082],[-119.77,34.5563],[-119.759,34.4621],[-119.838,34.7506],[-119.611,34.4961],[-119.611,34.4964],[-119.638,34.4972],[-119.638,34.4973],[-119.638,34.4971],[-119.638,34.4974],[-119.613,34.4956],[-119.752,34.5158],[-119.784,34.5483],[-119.788,34.4178],[-119.612,34.4962],[-118.98,34.0998],[-120.224,34.5035],[-119.77,34.5556],[-119.693,34.4488],[-119.731,34.4635],[-119.612,34.4959],[-119.788,34.4181],[-119.788,34.418],[-119.756,34.4631],[-119.613,34.4957],[-120.239,34.494],[-119.916,34.7657],[-119.507,34.469],[-119.692,34.449],[-119.693,34.4491],[-119.788,34.4179],[-119.787,34.4176],[-119.609,34.5042],[-119.694,34.4487],[-119.638,34.497],[-119.612,34.4963],[-119.993,34.7976],[-119.998,34.8003],[-119.692,34.4489],[-119.739,34.5401],[-119.611,34.4966],[-120.243,34.4943],[-120.221,34.4966],[-119.754,34.5312],[-119.609,34.5039],[-119.688,34.474],[-119.612,34.4965],[-119.733,34.4506],[-119.755,34.4602],[-119.688,34.4749],[-119.729,34.4613],[-119.69,34.4491],[-119.742,34.5394],[-119.769,34.5546],[-119.694,34.449]];
$(document).ready(function() {
	var vectorSource = new ol.source.Vector({
      //create empty vector
    });

	//create a bunch of icons and add to source vector
	subSightings.forEach(function(item,index) {
		var iconFeature = new ol.Feature({
		          geometry: new  
		            ol.geom.Point(ol.proj.fromLonLat(item)),
		        name: 'Flower',
		        population: 4000,
		        rainfall: 500
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
        src: 'flower.png'
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