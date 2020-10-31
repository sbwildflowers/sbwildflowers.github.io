var subSightings = [[-119.77,34.551],[-119.754,34.5991],[-119.607,34.4936],[-119.751,34.5998],[-119.787,34.5492],[-119.684,34.4755],[-119.612,34.4971],[-119.644,34.4631],[-119.616,34.4563],[-119.65,34.4619],[-119.769,34.5509],[-119.787,34.5499],[-119.786,34.5489],[-119.644,34.4632],[-119.787,34.5489],[-119.626,34.5343],[-119.585,34.4916],[-119.689,34.4733],[-119.495,34.4792],[-119.989,34.736],[-119.565,34.4792],[-119.644,34.4635],[-119.684,34.4756],[-119.585,34.4917],[-119.65,34.462],[-119.644,34.4641],[-119.63,34.5118],[-120.049,34.7441],[-119.582,34.458],[-119.764,34.6228],[-119.565,34.5024],[-119.588,34.4916],[-119.615,34.4557],[-119.759,34.5675],[-119.986,34.735],[-120.042,34.7621],[-119.754,34.5987],[-119.641,34.4597],[-119.615,34.4555],[-119.623,34.4949],[-119.588,34.4915],[-120.035,34.7433],[-119.631,34.5186],[-119.785,34.5558],[-119.746,34.4946],[-119.582,34.4578],[-119.787,34.5493],[-119.663,34.4661],[-119.596,34.4932],[-119.746,34.4948],[-119.773,34.6293],[-119.638,34.4781],[-119.596,34.4934],[-119.787,34.5469],[-119.641,34.4596],[-119.585,34.4915],[-119.644,34.464],[-119.181,34.7258],[-119.228,34.4653],[-119.596,34.4935],[-119.637,34.4959],[-119.261,34.584],[-119.637,34.4958],[-119.644,34.4633],[-119.763,34.6222],[-119.596,34.4937],[-119.615,34.4554],[-119.612,34.4548],[-119.751,34.5999],[-119.663,34.4665],[-119.999,34.7409],[-119.77,34.5514],[-119.596,34.4936],[-119.787,34.5498],[-119.611,34.4991],[-119.631,34.5189],[-119.751,34.5977],[-119.616,34.4559],[-119.773,34.6294],[-119.75,34.6164],[-119.623,34.495],[-119.611,34.499],[-119.999,34.7406],[-119.99,34.8218],[-119.997,34.7365],[-119.787,34.5467],[-119.752,34.573],[-119.568,34.4776],[-119.976,34.7315],[-119.644,34.4639],[-119.592,34.4916],[-119.623,34.4951],[-119.639,34.4805],[-119.236,34.4656],[-119.754,34.575],[-119.642,34.4597],[-119.748,34.5998],[-119.626,34.4955],[-119.636,34.4957],[-119.24,34.4685],[-119.689,34.4644],[-119.633,34.5162],[-119.76,34.5665],[-119.666,34.4657],[-119.955,34.7603],[-119.76,34.5664],[-119.633,34.5157],[-119.772,34.5459],[-120.046,34.761],[-119.232,34.4662],[-119.644,34.4637],[-119.746,34.4947],[-119.581,34.4905],[-119.626,34.4954],[-119.611,34.497],[-119.786,34.5493],[-119.751,34.5027],[-119.786,34.5492],[-119.769,34.5512],[-119.243,34.4661],[-119.957,34.7592],[-119.75,34.5975],[-119.611,34.4971],[-119.612,34.4554],[-119.256,34.4713],[-119.24,34.4684],[-119.787,34.549],[-119.749,34.6149],[-119.615,34.4556],[-119.637,34.496],[-119.243,34.4659],[-119.233,34.4662],[-120.013,34.7402],[-119.616,34.4567],[-119.644,34.4636],[-119.612,34.497],[-119.76,34.5663],[-119.786,34.5491],[-119.644,34.4634],[-119.957,34.541],[-119.631,34.5195],[-119.626,34.4956],[-119.616,34.4562],[-119.946,34.7721],[-119.755,34.5748],[-119.625,34.4954],[-119.235,34.4655],[-119.769,34.551],[-119.645,34.4608],[-119.644,34.4638],[-119.644,34.4644],[-119.77,34.5511],[-120.038,34.7682],[-119.751,34.598],[-119.749,34.5999],[-119.384,34.5094],[-119.77,34.5513],[-120.052,34.7536],[-119.761,34.6207],[-119.634,34.4965],[-119.636,34.4958],[-119.752,34.5732],[-119.616,34.4561],[-119.787,34.5494],[-119.629,34.5348],[-119.786,34.549],[-119.232,34.4663],[-119.65,34.4618]];
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