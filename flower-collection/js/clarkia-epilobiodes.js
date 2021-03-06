var subSightings = [[-119.593,34.4903],[-119.587,34.4815],[-119.636,34.511],[-119.757,34.5692],[-119.763,34.5649],[-119.634,34.5105],[-119.746,34.5852],[-119.65,34.5197],[-119.599,34.4943],[-119.752,34.5199],[-119.769,34.5632],[-119.636,34.4942],[-119.593,34.4902],[-119.603,34.493],[-119.591,34.4882],[-119.64,34.5132],[-119.636,34.4902],[-119.636,34.4906],[-119.714,34.4725],[-119.587,34.4833],[-119.648,34.5181],[-119.636,34.4911],[-119.637,34.4947],[-119.773,34.546],[-119.646,34.5164],[-119.588,34.4845],[-119.784,34.5579],[-119.651,34.5199],[-119.647,34.5167],[-119.592,34.4899],[-119.759,34.5668],[-119.586,34.4798],[-119.588,34.4803],[-119.756,34.5129],[-119.609,34.4553],[-119.635,34.5037],[-119.636,34.4949],[-119.593,34.4905],[-119.589,34.4857],[-119.757,34.5695],[-119.641,34.5136],[-119.757,34.5094],[-119.633,34.5087],[-119.753,34.5049],[-119.593,34.4915],[-119.588,34.4915],[-119.64,34.513],[-119.752,34.5109],[-119.645,34.5158],[-119.752,34.5105],[-119.588,34.4914],[-119.638,34.5098],[-119.586,34.4797],[-119.587,34.4829],[-119.636,34.492],[-119.587,34.4817],[-119.752,34.5106],[-119.575,34.4787],[-119.59,34.487],[-119.635,34.511],[-119.588,34.4854],[-119.583,34.4806],[-119.587,34.4802],[-119.742,34.5228],[-119.588,34.4856],[-119.593,34.4898],[-120.206,34.493],[-119.743,34.5225],[-119.714,34.4723],[-119.636,34.494],[-119.636,34.4951],[-119.756,34.5103],[-119.645,34.5159],[-119.651,34.52],[-119.783,34.5584],[-119.657,34.5251],[-119.588,34.4846],[-119.757,34.5713],[-119.584,34.4804],[-119.632,34.5086],[-119.636,34.4912],[-119.756,34.51],[-119.755,34.5098],[-119.752,34.5042],[-119.603,34.4932],[-119.756,34.5104],[-119.744,34.5859],[-119.593,34.4913],[-119.595,34.4917],[-119.58,34.4901],[-119.588,34.4847],[-119.636,34.491],[-119.587,34.4811],[-119.635,34.5027],[-119.639,34.5108],[-119.762,34.5656],[-119.587,34.4801],[-119.636,34.4909],[-119.593,34.491],[-119.603,34.4931],[-119.636,34.5112],[-119.633,34.5088],[-119.64,34.5135],[-119.599,34.4942],[-119.748,34.5237],[-119.947,34.7728],[-119.753,34.5045],[-119.636,34.4922],[-119.649,34.5182],[-119.637,34.5104],[-119.593,34.4908],[-119.649,34.5185],[-119.588,34.4806],[-119.583,34.4809],[-119.639,34.5125],[-119.78,34.5581],[-119.636,34.4947],[-119.751,34.5822],[-119.593,34.4907],[-119.645,34.5163],[-119.746,34.5843],[-119.635,34.5024],[-119.753,34.5096],[-119.656,34.5252],[-119.636,34.4943],[-119.756,34.5101],[-119.575,34.4786],[-119.746,34.5845],[-119.657,34.5252],[-119.576,34.4885],[-119.755,34.5085],[-119.636,34.4939],[-119.637,34.5099],[-119.575,34.4785],[-119.655,34.5253],[-119.636,34.5036],[-119.582,34.4809],[-119.587,34.4803],[-119.636,34.4952],[-119.639,34.5107],[-119.636,34.4913],[-119.634,34.5104],[-119.634,34.5107],[-119.593,34.4904],[-119.586,34.4799],[-119.587,34.481],[-119.593,34.4901],[-119.763,34.565],[-119.636,34.4919],[-119.636,34.4878],[-119.603,34.4929],[-119.757,34.5125],[-119.751,34.5015],[-119.644,34.5145],[-119.592,34.4901],[-119.636,34.5109],[-119.609,34.4549],[-119.587,34.4831],[-119.637,34.4949],[-119.754,34.5098],[-119.764,34.5648],[-119.637,34.495],[-119.588,34.4841],[-119.636,34.5111],[-119.751,34.5823],[-119.757,34.569],[-119.642,34.514],[-119.583,34.4808],[-119.592,34.489],[-119.635,34.5036],[-119.587,34.4832],[-119.593,34.4909],[-119.647,34.5166],[-119.759,34.568],[-119.635,34.5112],[-119.636,34.4941],[-119.749,34.5736],[-119.648,34.5166],[-119.636,34.4944]];
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