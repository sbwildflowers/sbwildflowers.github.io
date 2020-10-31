var subSightings = [[-119.707,34.4733],[-119.75,34.5735],[-120.239,34.4942],[-119.771,34.5597],[-119.624,34.4579],[-119.623,34.4585],[-119.749,34.4889],[-119.638,34.4973],[-119.641,34.4538],[-119.645,34.464],[-119.719,34.4745],[-119.751,34.5191],[-119.645,34.4642],[-119.611,34.452],[-119.644,34.461],[-119.708,34.4731],[-119.583,34.4757],[-119.689,34.4733],[-119.786,34.4209],[-119.643,34.4618],[-119.745,34.4928],[-119.631,34.4956],[-119.787,34.4209],[-119.756,34.5114],[-119.644,34.4592],[-119.611,34.4553],[-119.72,34.4747],[-119.664,34.49],[-119.644,34.4641],[-119.611,34.4519],[-120.058,34.7402],[-119.763,34.565],[-119.644,34.4625],[-119.596,34.4578],[-119.75,34.5209],[-119.588,34.4776],[-119.716,34.4724],[-119.245,34.468],[-119.757,34.511],[-119.718,34.4738],[-119.644,34.464],[-119.591,34.4658],[-119.643,34.4518],[-119.636,34.486],[-119.215,34.4824],[-119.642,34.4526],[-119.591,34.4646],[-120.069,34.512],[-119.605,34.4749],[-119.786,34.421],[-119.72,34.4746],[-119.757,34.5177],[-119.787,34.5465],[-119.726,34.4755],[-119.643,34.4524],[-119.703,34.4739],[-119.591,34.4645],[-119.748,34.4865],[-119.724,34.4758],[-120.239,34.4862],[-119.621,34.457],[-119.611,34.4525],[-119.717,34.4725],[-119.718,34.474],[-119.639,34.456],[-119.593,34.471],[-119.644,34.4639],[-119.644,34.4647],[-119.645,34.4638],[-119.724,34.4764],[-119.651,34.4609],[-119.59,34.4552],[-119.71,34.4733],[-119.637,34.4981],[-119.651,34.461],[-120.23,34.498],[-119.644,34.465],[-119.786,34.5526],[-119.638,34.4976],[-119.644,34.4643],[-119.636,34.4568],[-119.643,34.4525],[-119.715,34.4722],[-119.624,34.4587],[-119.717,34.4734],[-120.23,34.4981],[-119.719,34.4742],[-119.746,34.4856],[-119.611,34.4522],[-119.645,34.4644],[-119.716,34.4722],[-119.696,34.4782],[-119.697,34.4821],[-119.691,34.461],[-119.245,34.4679],[-120.234,34.4815],[-119.64,34.4545],[-119.61,34.4553],[-119.608,34.4542],[-119.707,34.4707],[-119.609,34.4549],[-119.612,34.4526],[-119.65,34.4609],[-119.75,34.5218],[-119.743,34.478],[-119.136,34.4529],[-119.719,34.4746],[-119.591,34.4575],[-119.592,34.4713],[-119.605,34.4546],[-119.611,34.4524],[-119.637,34.4976],[-119.693,34.449],[-120.013,34.7402],[-119.644,34.4642],[-119.589,34.4648],[-119.639,34.4567],[-119.617,34.4482],[-119.75,34.5733],[-119.61,34.4552],[-119.626,34.4956],[-119.72,34.4748],[-119.712,34.4726],[-119.649,34.4587],[-119.592,34.4561],[-119.588,34.4847],[-119.585,34.475],[-119.638,34.4795],[-119.717,34.4737],[-119.644,34.4638],[-119.642,34.4534],[-119.642,34.4528],[-119.644,34.4644],[-119.724,34.4757],[-119.644,34.4619],[-119.751,34.5199],[-119.702,34.4747],[-119.643,34.4615],[-119.643,34.4614],[-119.745,34.4841],[-119.644,34.4645],[-119.72,34.4745],[-119.609,34.455],[-119.75,34.521],[-119.743,34.4782]];
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