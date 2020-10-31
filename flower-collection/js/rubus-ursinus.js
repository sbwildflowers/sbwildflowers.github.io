var subSightings = [[-119.632,34.5185],[-119.747,34.4904],[-119.592,34.4596],[-119.61,34.5019],[-119.636,34.486],[-119.644,34.4757],[-119.622,34.4522],[-119.77,34.561],[-119.728,34.4596],[-119.731,34.4552],[-119.813,34.4241],[-119.654,34.457],[-119.816,34.511],[-119.648,34.4629],[-119.637,34.4955],[-119.749,34.4883],[-119.771,34.5428],[-119.635,34.4868],[-119.745,34.4943],[-119.74,34.4052],[-119.746,34.4919],[-119.745,34.4942],[-119.048,34.0932],[-119.73,34.4552],[-119.752,34.5104],[-119.747,34.4902],[-119.63,34.513],[-119.63,34.5121],[-119.957,34.534],[-119.732,34.4669],[-119.77,34.5624],[-119.753,34.519],[-119.956,34.529],[-119.756,34.515],[-119.732,34.4536],[-119.727,34.4738],[-119.527,34.3974],[-119.741,34.42],[-119.754,34.5726],[-119.755,34.5123],[-119.639,34.4563],[-119.8,34.4239],[-119.758,34.5186],[-119.804,34.4245],[-119.798,34.4239],[-119.609,34.5037],[-119.766,34.6322],[-119.672,34.5023],[-119.73,34.4606],[-119.825,34.4225],[-119.754,34.5728],[-119.729,34.4715],[-119.754,34.5725],[-119.611,34.4524],[-119.688,34.5189],[-119.611,34.4553],[-119.636,34.4868],[-119.958,34.5339],[-119.636,34.4869],[-119.611,34.4547],[-119.62,34.494],[-119.38,34.5069],[-119.77,34.5609],[-119.73,34.4551],[-119.731,34.4553],[-119.634,34.5048],[-119.729,34.472],[-119.759,34.524],[-119.756,34.5102],[-119.727,34.4744],[-119.633,34.5063],[-119.619,34.4939],[-119.651,34.4637],[-119.672,34.5022],[-119.636,34.4862],[-119.748,34.4904],[-119.593,34.4556],[-119.614,34.4954],[-119.754,34.5724],[-119.728,34.4599],[-119.615,34.4954],[-119.611,34.4548],[-119.757,34.5705],[-119.636,34.487],[-119.757,34.5151],[-119.759,34.5242],[-119.745,34.4941],[-119.753,34.5096],[-119.63,34.512],[-119.641,34.4542],[-119.633,34.5061],[-119.135,34.4512],[-119.654,34.4576],[-119.634,34.5046],[-119.83,34.4205],[-119.63,34.5124],[-119.729,34.4716],[-119.751,34.4062],[-119.74,34.4205],[-119.729,34.4721],[-119.636,34.4859],[-119.615,34.4955],[-120.001,34.7479],[-119.745,34.494],[-119.804,34.5148],[-119.83,34.4206],[-119.64,34.463],[-119.749,34.4876],[-119.771,34.5429],[-119.732,34.4668],[-119.623,34.458],[-120.221,34.5032],[-119.749,34.4881],[-119.635,34.487],[-119.727,34.474],[-119.619,34.4941],[-120.237,34.4902],[-119.63,34.5131],[-119.729,34.4607],[-119.611,34.4527],[-119.681,34.5531],[-119.756,34.5133],[-119.728,34.4584],[-119.756,34.5134],[-119.635,34.4867],[-119.681,34.4969],[-119.653,34.4549],[-119.729,34.4724],[-119.575,34.4879],[-119.593,34.4734],[-119.592,34.4917],[-119.745,34.4933],[-119.791,34.43],[-119.636,34.4861],[-119.689,34.4637],[-119.592,34.4597],[-119.826,34.4225],[-119.749,34.4884],[-119.633,34.5052],[-119.752,34.5128],[-119.629,34.5128],[-119.754,34.5188],[-119.805,34.4245],[-119.759,34.5244],[-119.732,34.467],[-119.74,34.4201],[-119.632,34.5148],[-119.73,34.4607],[-119.753,34.5095],[-119.63,34.5132],[-119.636,34.4867],[-119.739,34.422]];
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