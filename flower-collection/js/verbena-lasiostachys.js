var subSightings = [[-119.631,34.4958],[-119.594,34.4706],[-119.631,34.5137],[-119.75,34.5581],[-119.609,34.5031],[-119.631,34.5084],[-119.624,34.4953],[-119.611,34.4969],[-119.631,34.5211],[-119.609,34.5046],[-119.64,34.5126],[-119.759,34.5266],[-119.631,34.514],[-119.61,34.5009],[-119.614,34.4954],[-119.787,34.5485],[-119.756,34.5722],[-119.609,34.4954],[-119.75,34.5148],[-119.616,34.4949],[-119.609,34.5033],[-119.787,34.5488],[-119.767,34.5645],[-119.757,34.532],[-119.627,34.5227],[-119.89,34.4218],[-119.759,34.5278],[-119.591,34.458],[-119.77,34.5476],[-119.63,34.5218],[-119.627,34.5269],[-119.627,34.5341],[-119.734,34.4525],[-119.991,34.7976],[-119.631,34.5204],[-119.85,34.4077],[-119.745,34.6007],[-119.63,34.5297],[-119.631,34.4956],[-119.756,34.5724],[-119.749,34.6122],[-119.609,34.5044],[-119.631,34.4957],[-119.754,34.5725],[-119.786,34.5502],[-119.63,34.5213],[-119.628,34.4955],[-119.609,34.5037],[-119.757,34.5314],[-119.769,34.5434],[-119.747,34.5678],[-119.773,34.5586],[-119.596,34.4932],[-119.588,34.4856],[-119.597,34.4703],[-119.673,34.5247],[-119.613,34.4955],[-119.773,34.5583],[-119.588,34.4858],[-119.729,34.5392],[-119.632,34.4957],[-119.608,34.4949],[-119.372,34.6159],[-119.849,34.4079],[-119.744,34.5994],[-119.595,34.4707],[-119.601,34.5127],[-119.748,34.5723],[-119.613,34.4957],[-119.745,34.6006],[-119.609,34.5045],[-119.637,34.4973],[-119.767,34.5646],[-119.64,34.5129],[-119.757,34.5319],[-119.629,34.5213],[-119.786,34.55],[-119.631,34.5289],[-119.762,34.5662],[-119.592,34.4604],[-119.595,34.4929],[-119.817,34.5331],[-119.631,34.5202],[-119.67,34.5067],[-119.956,34.5461],[-120.228,34.4994],[-119.609,34.4953],[-119.822,34.5425],[-119.285,34.4774],[-119.629,34.4956],[-119.733,34.4522],[-119.67,34.4884],[-119.642,34.4525],[-119.754,34.5727],[-119.609,34.5043],[-119.626,34.4955],[-119.608,34.495],[-119.631,34.5199],[-119.591,34.4579],[-119.76,34.5259],[-119.745,34.5999],[-119.643,34.4525],[-119.609,34.5032],[-119.673,34.5249],[-119.601,34.5126],[-119.631,34.4955],[-119.637,34.4977],[-119.673,34.5233],[-119.594,34.4705],[-119.797,34.4239],[-119.759,34.5279],[-119.786,34.5564],[-119.759,34.528],[-119.283,34.4764],[-119.628,34.4956],[-119.626,34.4954],[-119.609,34.5038],[-119.797,34.4241],[-119.588,34.4857],[-119.631,34.5083],[-119.745,34.5998],[-119.771,34.5571],[-119.769,34.5535],[-119.609,34.5042],[-119.613,34.4956],[-119.241,34.5419],[-119.376,34.6427],[-119.609,34.4948],[-119.631,34.5302],[-119.631,34.521],[-119.372,34.6157],[-119.637,34.4976],[-119.632,34.4958],[-119.768,34.5402],[-119.64,34.5128],[-119.76,34.5663],[-119.609,34.503],[-119.608,34.5048],[-119.609,34.4949],[-119.595,34.4928],[-119.637,34.4978],[-119.639,34.5129],[-119.613,34.4954],[-119.611,34.5009],[-119.269,34.4748],[-119.352,34.6052],[-119.825,34.4223],[-119.608,34.5047],[-119.956,34.5459],[-119.754,34.5726],[-119.747,34.601],[-119.611,34.5006],[-119.592,34.4554],[-120.218,34.5037],[-119.316,34.2822],[-119.372,34.6718],[-119.745,34.6005],[-119.745,34.6],[-119.631,34.5082],[-119.607,34.5058],[-119.609,34.4955],[-119.629,34.4954],[-119.617,34.4479],[-119.606,34.5069],[-119.759,34.5269],[-119.669,34.4887],[-119.767,34.5644],[-119.878,34.4132],[-119.759,34.5273],[-119.639,34.5128],[-119.623,34.5352],[-119.785,34.5563],[-119.757,34.5704]];
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