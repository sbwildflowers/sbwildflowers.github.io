var subSightings = [[-119.609,34.5047],[-119.739,34.4709],[-119.747,34.4915],[-119.77,34.4126],[-119.957,34.541],[-119.734,34.4517],[-120.06,34.7386],[-119.627,34.4954],[-119.605,34.4551],[-119.636,34.4951],[-119.446,34.4916],[-119.614,34.4955],[-119.469,34.4923],[-119.772,34.5445],[-119.564,34.4803],[-119.618,34.4947],[-119.77,34.5513],[-119.609,34.504],[-119.734,34.4515],[-119.452,34.4917],[-119.646,34.4607],[-120.098,34.6923],[-119.745,34.4928],[-120.098,34.6926],[-119.633,34.5092],[-119.738,34.4226],[-119.637,34.4971],[-120.094,34.722],[-119.607,34.506],[-119.956,34.5488],[-119.496,34.4847],[-119.638,34.4976],[-120.094,34.7216],[-119.787,34.4205],[-119.637,34.4972],[-119.614,34.4953],[-119.612,34.4958],[-119.923,34.7664],[-119.769,34.5514],[-119.628,34.5286],[-119.633,34.5089],[-119.787,34.4207],[-119.757,34.5322],[-119.996,34.7361],[-119.757,34.5691],[-119.745,34.4939],[-119.787,34.4206],[-119.633,34.5091],[-119.795,34.4241],[-120.059,34.7389],[-119.614,34.4956],[-119.762,34.5381],[-119.637,34.4977],[-119.607,34.4941],[-119.896,34.7818],[-120.105,34.693],[-119.638,34.4972],[-119.638,34.4973],[-119.638,34.4971],[-120.107,34.7181],[-119.637,34.4978],[-119.8,34.4187],[-119.638,34.4974],[-119.564,34.4802],[-119.464,34.4925],[-119.786,34.4206],[-119.613,34.4956],[-119.772,34.5592],[-119.795,34.4243],[-119.786,34.4211],[-119.597,34.4936],[-119.445,34.4915],[-120.206,34.4902],[-119.637,34.4969],[-119.76,34.5384],[-119.968,34.7517],[-119.566,34.4789],[-119.635,34.5109],[-120.097,34.6933],[-119.748,34.5998],[-119.752,34.5995],[-119.637,34.4973],[-119.738,34.4223],[-119.76,34.5372],[-119.958,34.5401],[-119.786,34.421],[-119.606,34.5067],[-119.638,34.498],[-119.901,34.781],[-119.597,34.4938],[-119.741,34.4759],[-119.637,34.4979],[-119.609,34.495],[-119.614,34.4954],[-120.105,34.6944],[-119.627,34.4953],[-120.06,34.7387],[-119.746,34.4939],[-119.241,34.5415],[-120.105,34.6932],[-120.095,34.7211],[-119.746,34.494],[-119.613,34.4957],[-119.93,34.7669],[-119.957,34.5412],[-119.802,34.4195],[-119.76,34.5666],[-119.772,34.5452],[-120.102,34.7202],[-119.745,34.4929],[-119.751,34.5022],[-119.689,34.5141],[-119.738,34.4222],[-119.607,34.5061],[-119.638,34.497],[-119.606,34.5068],[-119.759,34.5377],[-119.787,34.4203],[-119.787,34.5489],[-119.637,34.497],[-119.613,34.4955],[-119.77,34.5522],[-120.105,34.6915],[-119.771,34.5596],[-119.955,34.7587],[-119.597,34.4937],[-119.787,34.4208],[-120.24,34.4945],[-119.692,34.4604],[-119.786,34.4209],[-119.771,34.5597],[-119.734,34.4516],[-119.747,34.5993],[-119.757,34.5334],[-119.607,34.4937],[-119.597,34.4939],[-120.098,34.6922],[-119.759,34.5378],[-119.759,34.5379],[-119.603,34.4931],[-119.762,34.538],[-119.758,34.5357],[-120.065,34.737]];
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