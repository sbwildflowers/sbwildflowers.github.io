var subSightings = [[-119.636,34.4954],[-119.609,34.5029],[-119.573,34.4875],[-119.61,34.5005],[-119.611,34.4999],[-119.757,34.515],[-119.746,34.6007],[-119.606,34.4941],[-119.606,34.494],[-119.636,34.4955],[-119.76,34.5204],[-119.747,34.6008],[-119.757,34.5177],[-119.76,34.5247],[-119.636,34.495],[-119.747,34.6011],[-119.76,34.5249],[-119.758,34.5177],[-119.606,34.4939],[-119.574,34.488],[-119.759,34.5191],[-119.606,34.4942],[-119.76,34.5248],[-119.758,34.5182],[-119.746,34.6008],[-119.76,34.5237],[-119.606,34.4938],[-119.758,34.5183],[-119.574,34.4877],[-119.606,34.4943],[-119.611,34.5001],[-119.759,34.5195],[-119.76,34.5236],[-119.76,34.5238],[-119.611,34.5],[-119.575,34.488],[-119.636,34.4956],[-119.611,34.5002],[-119.759,34.5193],[-119.759,34.5205],[-119.76,34.5239],[-119.759,34.5194],[-119.636,34.4953],[-119.636,34.4957]];
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