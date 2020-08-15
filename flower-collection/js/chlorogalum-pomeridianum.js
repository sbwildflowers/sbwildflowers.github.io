var subSightings = [[-119.599,34.4939],[-119.464,34.4924],[-119.682,34.4748],[-119.749,34.5738],[-119.695,34.469],[-119.693,34.5051],[-119.697,34.4786],[-119.59,34.4701],[-119.693,34.4688],[-119.695,34.4692],[-119.591,34.4617],[-119.29,34.4783],[-119.546,34.488],[-119.695,34.4691],[-119.731,34.4636],[-119.45,34.491],[-120.191,34.5071],[-119.73,34.4616],[-119.587,34.4812],[-119.514,34.4868],[-119.596,34.4935],[-119.577,34.489],[-119.75,34.6058],[-119.469,34.4926],[-119.572,34.4878],[-119.512,34.4887],[-120.237,34.4897],[-119.599,34.4937],[-119.694,34.4697],[-119.272,34.4749],[-119.73,34.4698],[-119.729,34.4555],[-119.797,34.5134],[-119.592,34.4717],[-119.688,34.4694],[-119.749,34.5737],[-119.697,34.4785],[-119.29,34.4784],[-119.472,34.4926],[-119.497,34.486],[-119.513,34.488],[-119.696,34.4786],[-119.697,34.4787],[-119.577,34.4888],[-119.611,34.4965],[-119.694,34.4689],[-119.456,34.4916],[-119.753,34.6087],[-119.736,34.4681],[-119.694,34.4691],[-119.579,34.4899],[-119.692,34.4682],[-119.684,34.4754],[-119.602,34.4936],[-119.731,34.429],[-119.599,34.494],[-118.999,34.1196],[-119.356,34.4183],[-119.408,34.4963],[-119.591,34.4674],[-119.682,34.4746],[-119.515,34.4883],[-119.586,34.4789],[-119.69,34.4765],[-119.6,34.4935],[-119.465,34.4924],[-119.729,34.4556],[-119.513,34.489],[-119.266,34.4733],[-119.65,34.456],[-119.797,34.5135],[-119.586,34.4791],[-119.737,34.4683],[-119.456,34.4915],[-119.599,34.4938],[-119.267,34.4761],[-119.817,34.5399],[-119.417,34.4923],[-119.599,34.4936],[-119.749,34.5736],[-119.511,34.4895],[-119.456,34.4914],[-119.731,34.4646],[-120.189,34.5076],[-119.736,34.4657],[-119.73,34.4697],[-119.497,34.4858],[-119.731,34.4615],[-119.595,34.4922],[-119.738,34.4691],[-119.593,34.4718],[-119.577,34.4892],[-119.737,34.469],[-119.736,34.4658],[-119.682,34.4747],[-119.782,34.559],[-119.682,34.4743],[-119.735,34.4666],[-119.688,34.4673],[-119.469,34.4925],[-119.692,34.468],[-119.573,34.4878],[-119.818,34.5395],[-119.369,34.3876],[-119.456,34.4919],[-120.016,34.7389],[-119.591,34.4616],[-119.604,34.4931],[-119.592,34.4704],[-119.736,34.4656],[-119.514,34.4869],[-119.244,34.4678],[-119.58,34.4899],[-119.456,34.4921],[-119.75,34.5573],[-119.586,34.48],[-119.747,34.5993],[-119.779,34.553],[-119.587,34.4813],[-119.628,34.4518],[-119.588,34.4919],[-119.603,34.4932],[-119.588,34.4916],[-119.586,34.4788],[-119.586,34.479],[-119.69,34.4764],[-119.592,34.4718],[-119.602,34.4935],[-119.691,34.4594],[-119.688,34.4749],[-119.682,34.4744],[-119.595,34.4921],[-119.65,34.4559],[-119.246,34.4677],[-119.602,34.4938],[-119.577,34.4885],[-119.694,34.469],[-119.451,34.4911],[-119.749,34.5247],[-119.572,34.4877],[-119.693,34.4686],[-119.587,34.4917],[-119.416,34.4931],[-119.585,34.4792],[-119.577,34.4886],[-119.585,34.4793],[-119.73,34.4613],[-119.586,34.4799]];
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