var subSightings = [[-119.609,34.4953],[-119.637,34.4971],[-119.638,34.4971],[-119.613,34.4956],[-119.632,34.5094],[-119.611,34.4963],[-120.099,34.7166],[-119.764,34.6315],[-119.613,34.4957],[-119.636,34.5112],[-119.633,34.5089],[-119.634,34.5104],[-119.645,34.5156],[-119.639,34.5127],[-119.752,34.5249],[-119.638,34.4972],[-119.64,34.5133],[-119.611,34.4964],[-119.753,34.5251],[-119.64,34.5131],[-119.613,34.4955],[-119.611,34.4961],[-119.706,34.5282],[-119.634,34.5102],[-119.633,34.5093],[-119.638,34.4973],[-119.637,34.497],[-119.635,34.5111],[-119.611,34.4959],[-119.633,34.509],[-119.611,34.4958],[-119.764,34.6321],[-119.749,34.559],[-119.898,34.5192]];
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