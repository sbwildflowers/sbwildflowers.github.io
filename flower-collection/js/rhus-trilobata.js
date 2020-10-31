var subSightings = [[-119.637,34.51],[-119.608,34.505],[-119.62,34.5393],[-119.635,34.5023],[-119.604,34.5099],[-119.606,34.4941],[-119.757,34.5168],[-119.77,34.5462],[-119.636,34.486],[-119.607,34.5059],[-119.758,34.5188],[-119.609,34.4952],[-119.634,34.504],[-119.609,34.4949],[-119.62,34.4941],[-119.763,34.5653],[-119.76,34.5235],[-119.619,34.5365],[-119.756,34.5733],[-119.457,34.4924],[-119.77,34.5503],[-119.595,34.4926],[-119.613,34.4954],[-119.62,34.54],[-119.701,34.5595],[-119.757,34.5153],[-119.5,34.4742],[-119.453,34.4916],[-119.77,34.545],[-119.632,34.4957],[-119.635,34.4868],[-119.771,34.5451],[-119.583,34.491],[-119.259,34.5752],[-119.732,34.5342],[-119.627,34.5312],[-119.761,34.5383],[-119.603,34.5105],[-119.758,34.5351],[-119.59,34.4917],[-119.765,34.6314],[-119.624,34.4953],[-119.605,34.507],[-119.43,34.4897],[-119.77,34.5517],[-120.016,34.5324],[-119.757,34.5147],[-119.757,34.5145],[-119.605,34.5084],[-119.611,34.4999],[-119.758,34.5185],[-119.774,34.5456],[-119.611,34.4972],[-119.627,34.523],[-119.757,34.5316],[-119.603,34.5102],[-119.771,34.5504],[-119.671,34.5072],[-119.606,34.4943],[-119.611,34.4971],[-119.75,34.6064],[-119.52,34.4886],[-119.571,34.4873],[-119.774,34.5434],[-119.773,34.5461],[-119.771,34.5448],[-119.637,34.5101],[-119.762,34.5658],[-119.633,34.505],[-119.611,34.5001],[-119.636,34.4872],[-119.756,34.5399],[-119.758,34.5184],[-119.766,34.632],[-119.688,34.5191],[-119.76,34.5246],[-119.757,34.5164],[-119.607,34.4942],[-119.636,34.4868],[-119.609,34.5032],[-119.757,34.5158],[-119.757,34.5179],[-119.636,34.4869],[-119.688,34.5187],[-119.755,34.5989],[-119.75,34.6065],[-119.752,34.6117],[-119.632,34.5147],[-119.759,34.5197],[-119.764,34.5646],[-119.768,34.6294],[-119.633,34.5051],[-119.572,34.4877],[-119.77,34.5463],[-119.757,34.5157],[-119.76,34.5243],[-119.781,34.5506],[-119.764,34.6322],[-119.75,34.6063],[-119.458,34.4923],[-119.757,34.5156],[-119.756,34.5126],[-119.604,34.5089],[-119.758,34.5187],[-119.616,34.4954],[-119.636,34.487],[-119.636,34.4957],[-119.769,34.5617],[-119.636,34.4955],[-119.608,34.5051],[-119.606,34.507],[-119.602,34.5114],[-119.621,34.4942],[-119.763,34.5651],[-119.689,34.5197],[-119.495,34.4807],[-119.597,34.4937],[-119.634,34.5046],[-119.766,34.6317],[-119.77,34.5605],[-119.771,34.559],[-119.759,34.5192],[-119.622,34.4943],[-119.768,34.6295],[-119.746,34.5379],[-119.634,34.5042],[-119.604,34.5098],[-119.786,34.5526],[-119.77,34.5606],[-119.757,34.5177],[-119.634,34.5043],[-119.757,34.5165],[-119.747,34.6009],[-119.758,34.5349],[-119.755,34.599],[-119.757,34.5139],[-119.636,34.4859],[-119.751,34.5999],[-119.786,34.5503],[-119.611,34.4998],[-119.78,34.5506],[-119.756,34.5128],[-119.759,34.5198],[-119.756,34.5127],[-119.598,34.494],[-119.614,34.4953],[-119.775,34.5449],[-119.635,34.504],[-119.757,34.5144],[-119.59,34.4919],[-119.637,34.5099],[-119.631,34.4958],[-119.757,34.569],[-119.669,34.5038],[-119.608,34.5049],[-119.627,34.5342],[-119.573,34.4878],[-119.628,34.4954],[-119.775,34.5456],[-119.771,34.5553],[-119.606,34.4938],[-119.636,34.4956],[-119.634,34.5041],[-119.608,34.4947],[-119.757,34.516],[-119.755,34.5128],[-119.77,34.5331],[-119.523,34.4876],[-119.573,34.4877],[-119.692,34.5048],[-119.771,34.5454],[-119.636,34.4861],[-119.694,34.5005],[-119.574,34.4878],[-119.633,34.5059],[-119.771,34.5602],[-119.749,34.6003],[-119.628,34.5215],[-119.757,34.5175],[-119.809,34.543],[-119.76,34.5236],[-119.769,34.5524],[-119.764,34.5647],[-119.63,34.5133],[-119.606,34.4942],[-119.758,34.535],[-119.759,34.5201],[-119.606,34.5066],[-119.759,34.5196],[-119.81,34.543],[-119.77,34.5451],[-119.636,34.4871],[-119.632,34.5148],[-119.757,34.5141],[-119.771,34.5583],[-119.671,34.5034],[-119.636,34.4867],[-119.77,34.5557]];
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