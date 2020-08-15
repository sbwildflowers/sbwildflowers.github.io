var subSightings = [[-119.787,34.5492],[-119.772,34.5585],[-119.679,34.5173],[-120.047,34.7454],[-119.753,34.5992],[-119.77,34.5564],[-120.06,34.7386],[-120.063,34.7386],[-119.755,34.5728],[-119.999,34.7392],[-119.893,34.78],[-119.787,34.421],[-119.763,34.6318],[-120.06,34.7382],[-119.775,34.5458],[-119.786,34.4208],[-119.748,34.5241],[-119.764,34.6322],[-120.06,34.7397],[-119.787,34.546],[-120.013,34.7412],[-119.786,34.5481],[-119.772,34.5583],[-119.738,34.4224],[-120.008,34.7378],[-119.787,34.5496],[-119.965,34.7545],[-119.787,34.5462],[-119.734,34.4515],[-119.957,34.8109],[-119.77,34.5555],[-119.774,34.5459],[-119.872,34.787],[-119.966,34.7359],[-119.738,34.4229],[-119.897,34.7817],[-120.064,34.7386],[-119.968,34.7404],[-119.78,34.5582],[-119.786,34.4212],[-119.786,34.5494],[-120.045,34.7613],[-119.786,34.5487],[-120.048,34.7447],[-119.747,34.5949],[-119.748,34.524],[-119.999,34.7376],[-119.782,34.5507],[-120.05,34.7439],[-119.963,34.8126],[-119.785,34.5525],[-119.754,34.5312],[-119.872,34.7868],[-120.069,34.7594],[-119.77,34.5516],[-120.006,34.8077],[-119.786,34.5488],[-119.786,34.549],[-119.787,34.4207],[-119.754,34.5317],[-119.773,34.5461],[-119.769,34.5518],[-119.755,34.5727],[-119.752,34.5994],[-119.787,34.4206],[-119.771,34.6261],[-119.772,34.5584],[-120.063,34.7384],[-119.74,34.4753],[-119.751,34.5213],[-120.046,34.7607],[-120.064,34.7603],[-119.75,34.6003],[-119.77,34.5563],[-119.87,34.5075],[-119.896,34.7818],[-119.992,34.8197],[-119.995,34.7445],[-119.646,34.5163],[-119.995,34.7452],[-120.061,34.7401],[-119.989,34.8223],[-119.787,34.5493],[-119.058,34.0977],[-119.774,34.5457],[-119.748,34.6128],[-120.055,34.7429],[-119.78,34.5585],[-119.786,34.4211],[-120.058,34.7416],[-120.014,34.7399],[-119.784,34.5483],[-120.001,34.744],[-119.874,34.789],[-119.923,34.7667],[-119.965,34.8138],[-119.89,34.7788],[-119.748,34.5952],[-119.751,34.5999],[-119.747,34.5943],[-119.895,34.7813],[-119.786,34.5486],[-120.001,34.7438],[-119.787,34.4211],[-120.001,34.7431],[-119.738,34.4227],[-119.758,34.5314],[-119.773,34.6293],[-119.786,34.421],[-120.052,34.7584],[-120.062,34.7412],[-119.25,34.4707],[-119.786,34.548],[-119.786,34.5484],[-119.989,34.804],[-120.064,34.7366],[-120.05,34.7599],[-119.975,34.7485],[-119.983,34.7996],[-119.789,34.5374],[-119.97,34.751],[-119.786,34.5485],[-119.738,34.423],[-119.734,34.4514],[-119.774,34.5461],[-119.769,34.5506],[-119.636,34.4899],[-119.772,34.5452],[-119.794,34.4185],[-119.957,34.7578],[-120.045,34.7614],[-119.755,34.5726],[-119.757,34.532],[-120.015,34.7391],[-120.056,34.7492],[-119.978,34.7323],[-120.066,34.74],[-119.963,34.7586],[-120.001,34.7476],[-119.786,34.5493],[-119.747,34.595],[-119.988,34.7468],[-119.779,34.5533],[-120.065,34.7369],[-119.765,34.6326],[-119.96,34.7593],[-120.052,34.7519],[-119.751,34.6],[-119.648,34.517],[-119.774,34.546],[-120.108,34.6812],[-119.773,34.6295],[-119.787,34.5473],[-119.784,34.5482],[-119.057,34.098],[-119.748,34.5999],[-119.768,34.629],[-120.049,34.7441],[-119.769,34.5507],[-119.787,34.4208],[-119.748,34.5951],[-120.05,34.744],[-120.06,34.7388],[-119.636,34.49],[-119.77,34.6256],[-119.787,34.4209],[-120.061,34.7566],[-119.785,34.5558],[-120.057,34.7516],[-119.779,34.5534],[-119.754,34.5313],[-119.786,34.4209],[-119.78,34.5583],[-119.908,34.777],[-119.752,34.5993],[-119.734,34.4516],[-119.794,34.3415],[-119.973,34.7304],[-119.991,34.8192],[-120.058,34.7405],[-119.648,34.5181],[-120.05,34.7427],[-119.99,34.8219],[-119.956,34.7604],[-119.947,34.7738],[-120.046,34.761],[-119.753,34.5797],[-119.744,34.5859],[-119.967,34.7419],[-119.773,34.546],[-119.999,34.8149],[-119.751,34.5218],[-120.063,34.7385],[-120.05,34.7604],[-119.786,34.555],[-119.755,34.5317],[-119.957,34.7612],[-119.786,34.5489],[-119.992,34.8196],[-119.966,34.814],[-119.786,34.5533],[-119.647,34.517],[-119.986,34.751],[-120.065,34.737]];
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