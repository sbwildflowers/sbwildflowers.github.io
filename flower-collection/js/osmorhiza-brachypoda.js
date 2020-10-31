var subSightings = [[-119.759,34.5193],[-119.234,34.5026],[-119.756,34.515],[-119.757,34.5159],[-119.968,34.7399],[-119.757,34.5098],[-119.606,34.4939],[-119.637,34.4955],[-119.757,34.5165],[-119.769,34.629],[-119.964,34.7555],[-119.759,34.5254],[-119.671,34.5238],[-119.76,34.5246],[-119.67,34.5236],[-119.87,34.7372],[-119.759,34.5278],[-119.573,34.4879],[-119.633,34.5054],[-119.759,34.5198],[-120.008,34.7685],[-119.633,34.5051],[-120.005,34.7491],[-119.58,34.4903],[-119.633,34.505],[-119.869,34.7374],[-119.573,34.4878],[-119.968,34.7514],[-119.636,34.4955],[-120.056,34.5347],[-119.768,34.6294],[-119.619,34.4944],[-119.759,34.5191],[-119.636,34.4952],[-120.056,34.7561],[-119.759,34.5246],[-120.064,34.5345],[-119.496,34.4772],[-119.496,34.4769],[-119.755,34.5122],[-119.632,34.5068],[-119.972,34.7503],[-119.757,34.5112],[-119.756,34.5136],[-119.637,34.4965],[-119.758,34.5187],[-119.982,34.7977],[-119.76,34.5234],[-119.967,34.7379],[-119.765,34.632],[-119.583,34.491],[-119.999,34.7434],[-119.757,34.511],[-119.984,34.7549],[-119.954,34.5406],[-119.984,34.7548],[-119.636,34.495],[-119.606,34.4938],[-119.572,34.4879],[-119.763,34.5647],[-119.757,34.5138],[-119.619,34.4945],[-119.966,34.735],[-119.495,34.479],[-119.607,34.4943],[-119.956,34.5427],[-119.759,34.5253],[-119.581,34.491],[-119.759,34.52],[-119.787,34.5498],[-119.873,34.736],[-119.592,34.4715],[-119.758,34.5188],[-119.757,34.5149],[-119.637,34.4964],[-119.976,34.7466],[-119.959,34.5392],[-120.054,34.7483],[-119.967,34.7332],[-119.592,34.4707],[-119.757,34.515],[-120.056,34.756],[-119.636,34.4954],[-119.772,34.6294],[-119.638,34.497],[-119.757,34.5158],[-119.986,34.8018],[-119.759,34.5244],[-119.984,34.7565],[-119.605,34.4936],[-119.618,34.4946],[-119.633,34.506],[-119.621,34.4942],[-119.958,34.7573],[-119.595,34.493],[-119.758,34.5189],[-119.632,34.5067],[-119.765,34.6315],[-119.592,34.4706],[-119.818,34.5389],[-119.759,34.5245],[-119.593,34.4722],[-119.759,34.5279],[-119.597,34.494],[-119.593,34.472],[-120.01,34.7507],[-119.99,34.8036],[-119.755,34.5127],[-119.638,34.4971],[-119.759,34.5251],[-119.495,34.48],[-119.748,34.4901],[-119.77,34.5523],[-119.759,34.519],[-119.62,34.494],[-119.574,34.4879],[-119.759,34.526],[-119.686,34.515],[-119.763,34.5648],[-119.609,34.5042],[-119.956,34.5561],[-119.572,34.4878],[-119.567,34.4769],[-119.769,34.6293],[-119.756,34.5128],[-119.756,34.5133],[-119.633,34.5053],[-119.969,34.7314],[-120.007,34.8088],[-119.955,34.5404],[-119.771,34.6293],[-119.766,34.6306],[-119.637,34.4972],[-119.757,34.5178],[-119.634,34.5051],[-119.757,34.5109],[-119.759,34.5196],[-119.496,34.4836],[-119.57,34.472],[-119.757,34.5099],[-119.764,34.5648],[-119.975,34.7462],[-119.759,34.5256],[-119.638,34.4966],[-119.619,34.4941],[-119.633,34.5061],[-119.966,34.7496],[-119.76,34.5251],[-119.136,34.452],[-119.574,34.4878],[-120.003,34.7487],[-119.581,34.4907],[-119.766,34.6308],[-119.636,34.4951],[-119.763,34.6315],[-119.633,34.5064],[-119.755,34.5203],[-119.761,34.6301],[-119.989,34.7452],[-119.496,34.4816],[-119.757,34.5179],[-119.592,34.4705],[-120.001,34.7479],[-119.986,34.8017],[-119.756,34.5134],[-119.76,34.5235],[-119.591,34.4703],[-119.759,34.5257],[-119.62,34.4941],[-119.787,34.5494],[-119.575,34.4879],[-119.499,34.4757],[-119.669,34.4674]];
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