var subSightings = [[-120.059,34.5334],[-120.064,34.5345],[-119.955,34.5288],[-120.055,34.5336],[-119.946,34.5308],[-120.059,34.5336],[-119.694,34.5],[-119.606,34.4784],[-119.954,34.5402],[-119.589,34.4801],[-119.57,34.472],[-119.676,34.4974],[-120.061,34.5334],[-119.588,34.4803],[-119.856,34.5024],[-119.589,34.4802],[-119.502,34.4681],[-119.956,34.5287],[-119.57,34.4719],[-119.695,34.5005],[-119.636,34.4953],[-119.636,34.4954],[-119.954,34.5286],[-119.861,34.5008],[-119.83,34.5149],[-119.636,34.4952],[-119.593,34.4776],[-119.605,34.4788],[-120.059,34.5333],[-119.831,34.5021],[-119.955,34.5286],[-119.75,34.5154],[-119.57,34.4717],[-119.681,34.4969],[-119.756,34.5128],[-119.589,34.48],[-119.637,34.4964],[-119.589,34.4803],[-119.588,34.4804],[-120.066,34.5361],[-119.676,34.4973],[-119.956,34.5289],[-119.638,34.4964],[-120.06,34.533],[-120.059,34.5332],[-119.75,34.5155],[-120.057,34.5351],[-119.604,34.4787],[-119.856,34.5023],[-119.756,34.5127],[-119.955,34.5287],[-119.816,34.5116],[-119.804,34.5149],[-119.756,34.5126],[-120.058,34.5351],[-119.638,34.4963],[-119.837,34.5007],[-120.097,34.5281],[-120.066,34.5286],[-119.688,34.5027],[-119.755,34.5099],[-119.865,34.5066],[-119.755,34.5098],[-119.588,34.4801],[-119.637,34.4962],[-119.696,34.5007],[-120.076,34.5171],[-120.097,34.528],[-119.861,34.5009],[-119.688,34.5029],[-119.955,34.529],[-120.076,34.5384],[-119.605,34.4786],[-119.755,34.51],[-119.637,34.4963],[-120.129,34.5213]];
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