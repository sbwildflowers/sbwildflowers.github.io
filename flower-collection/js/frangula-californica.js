var subSightings = [[-119.757,34.5173],[-119.762,34.5406],[-119.759,34.5193],[-119.724,34.5013],[-119.757,34.5154],[-119.966,34.7486],[-119.681,34.4967],[-120.016,34.5326],[-119.739,34.4037],[-119.694,34.499],[-119.663,34.4671],[-119.99,34.5304],[-119.318,34.6948],[-119.956,34.5479],[-119.753,34.5157],[-119.571,34.4728],[-119.591,34.4706],[-119.936,34.5273],[-119.759,34.5278],[-119.681,34.4969],[-119.633,34.5062],[-119.754,34.5097],[-119.996,34.5308],[-119.417,34.4923],[-119.75,34.5145],[-119.65,34.5185],[-119.351,34.6037],[-119.749,34.6122],[-119.753,34.5096],[-120.218,34.504],[-119.77,34.5622],[-119.751,34.5144],[-119.636,34.4877],[-119.615,34.4954],[-119.757,34.5172],[-119.662,34.4671],[-119.61,34.501],[-119.797,34.424],[-119.636,34.4859],[-119.753,34.5097],[-119.751,34.5134],[-119.758,34.5187],[-119.806,34.5122],[-119.146,34.7231],[-119.485,34.4694],[-119.636,34.486],[-119.758,34.5181],[-119.752,34.5158],[-119.635,34.4877],[-119.636,34.4876],[-120.22,34.5031],[-120.222,34.5039],[-119.989,34.5304],[-119.957,34.5337],[-119.351,34.6035],[-119.606,34.494],[-119.869,34.508],[-119.758,34.5329],[-119.853,34.5026],[-119.383,34.5101],[-119.934,34.527],[-119.66,34.4708],[-119.696,34.4995],[-119.915,34.7655],[-119.636,34.4862],[-119.603,34.4929],[-119.757,34.515],[-119.592,34.4916],[-119.591,34.4705],[-120.056,34.7571],[-119.598,34.4939],[-119.618,34.4946],[-119.645,34.4879],[-119.636,34.4878],[-119.146,34.7232],[-119.751,34.5136],[-119.598,34.494],[-119.595,34.4736],[-119.504,34.4669],[-119.592,34.4706],[-119.66,34.4762],[-119.593,34.4722],[-119.589,34.4755],[-119.759,34.5279],[-119.583,34.4907],[-119.61,34.5008],[-119.624,34.4632],[-119.797,34.4241],[-119.62,34.494],[-119.77,34.5634],[-119.636,34.4861],[-119.757,34.5144],[-119.376,34.6427],[-119.798,34.4239],[-119.636,34.4836],[-119.58,34.4808],[-119.587,34.4817],[-120.22,34.5034],[-119.752,34.5231],[-120.059,34.5334],[-119.75,34.5144],[-119.606,34.4941],[-119.759,34.5196],[-119.764,34.6323],[-119.588,34.4709],[-119.982,34.5276],[-119.32,34.5961],[-119.957,34.5339],[-119.61,34.5007],[-119.636,34.4837],[-119.638,34.4966],[-119.973,34.7505],[-119.591,34.468],[-119.757,34.6234],[-119.61,34.5005],[-119.62,34.4942],[-119.647,34.4872],[-119.488,34.4663],[-119.699,34.4989],[-119.589,34.4801],[-119.915,34.7654],[-119.636,34.4885],[-120.014,34.5318],[-120.01,34.7752],[-119.697,34.4996],[-119.762,34.5409],[-119.589,34.4756],[-119.611,34.4967],[-119.136,34.4534],[-119.757,34.5179],[-119.637,34.4795],[-119.591,34.4917],[-119.956,34.546],[-119.607,34.4942],[-119.779,34.4322],[-119.575,34.4747],[-119.372,34.6162],[-119.633,34.5049],[-119.633,34.5057],[-119.62,34.4941],[-119.619,34.494]];
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