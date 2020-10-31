var subSightings = [[-119.638,34.4766],[-119.66,34.4736],[-119.639,34.4804],[-119.638,34.4798],[-119.384,34.509],[-119.638,34.4762],[-119.666,34.5426],[-119.384,34.5084],[-119.596,34.4704],[-119.638,34.4827],[-119.633,34.4788],[-119.597,34.4702],[-119.384,34.5097],[-119.663,34.4788],[-119.651,34.4628],[-119.637,34.4772],[-119.64,34.4729],[-119.638,34.477],[-119.637,34.4776],[-119.637,34.4773],[-119.639,34.4742],[-119.639,34.4741],[-119.638,34.4802],[-119.637,34.4775],[-119.633,34.479],[-119.383,34.5078],[-119.642,34.4727],[-119.651,34.4781],[-119.637,34.4779],[-119.66,34.4793],[-119.637,34.4812],[-119.591,34.469],[-119.638,34.4797],[-119.649,34.4694],[-119.649,34.4746],[-119.661,34.4743],[-119.531,34.4679],[-119.69,34.5534],[-119.595,34.47],[-119.659,34.466],[-119.596,34.4701],[-119.638,34.4796],[-119.637,34.4797],[-119.597,34.4704],[-119.592,34.4704],[-119.641,34.4728],[-119.661,34.4804],[-119.638,34.4764],[-119.637,34.478],[-119.637,34.4809],[-119.638,34.4812],[-119.643,34.4758],[-119.637,34.4769],[-119.663,34.4815],[-119.38,34.5069],[-119.66,34.4763],[-119.642,34.4726],[-119.65,34.4656],[-119.639,34.4806],[-119.655,34.4582],[-119.637,34.4782],[-119.65,34.4765],[-119.638,34.4771],[-119.596,34.4703],[-119.729,34.5704],[-119.578,34.4744],[-119.638,34.4822],[-119.639,34.4726],[-119.645,34.4746],[-119.597,34.4703],[-119.639,34.4808],[-119.653,34.4622],[-119.637,34.4781],[-119.661,34.4783],[-119.641,34.4727],[-119.638,34.4765],[-119.638,34.4782],[-119.638,34.4794],[-119.637,34.4774],[-119.373,34.6715],[-119.638,34.4795],[-119.659,34.468],[-119.246,34.5561],[-119.655,34.4592],[-119.639,34.4827],[-119.659,34.473],[-119.639,34.4807],[-119.638,34.4826],[-119.637,34.4788],[-119.663,34.4789],[-119.661,34.4784],[-119.638,34.4763],[-119.651,34.4629],[-119.637,34.477],[-119.649,34.4686],[-119.372,34.6723],[-119.892,34.7544],[-119.65,34.4663],[-119.641,34.4729],[-119.653,34.4613],[-119.66,34.4708],[-119.633,34.4794],[-119.649,34.4736],[-119.637,34.4783],[-119.659,34.4812],[-119.638,34.4767],[-119.555,34.4639],[-119.648,34.4708],[-119.64,34.473],[-119.638,34.4781],[-119.638,34.4823],[-119.656,34.4628],[-119.638,34.4824],[-119.655,34.4602],[-119.638,34.4768],[-119.638,34.478],[-119.64,34.4728],[-119.66,34.4726],[-119.638,34.4769]];
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