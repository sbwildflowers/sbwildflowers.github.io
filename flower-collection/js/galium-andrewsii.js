var subSightings = [[-119.639,34.4847],[-119.576,34.4752],[-119.636,34.5111],[-119.637,34.4811],[-119.636,34.5018],[-119.635,34.4996],[-119.781,34.5508],[-119.636,34.4866],[-119.636,34.486],[-119.755,34.5086],[-120.021,34.5323],[-119.147,34.7232],[-120.009,34.7665],[-119.735,34.5999],[-119.636,34.4864],[-119.636,34.501],[-119.984,34.7334],[-119.147,34.7233],[-119.635,34.5032],[-119.652,34.5195],[-119.146,34.7239],[-119.636,34.4861],[-120.009,34.7641],[-119.637,34.4838],[-119.782,34.5507],[-119.501,34.4684],[-119.611,34.4974],[-119.724,34.5013],[-119.999,34.7373],[-119.635,34.511],[-119.78,34.5554],[-119.638,34.4862],[-119.636,34.4952],[-119.755,34.5088],[-119.964,34.5252],[-119.636,34.4865],[-119.782,34.5506],[-119.539,34.4868],[-119.699,34.4909],[-119.749,34.6005],[-119.611,34.4982],[-119.636,34.5011],[-119.974,34.7504],[-119.609,34.5034],[-119.78,34.5573],[-120.032,34.7687],[-119.947,34.5286],[-119.921,34.5251],[-119.638,34.4861],[-119.75,34.5959],[-119.763,34.5649],[-119.632,34.5086],[-119.639,34.4848],[-119.241,34.5419],[-119.609,34.5035],[-119.637,34.4975],[-119.639,34.4849],[-120.013,34.7413],[-119.751,34.5252],[-119.698,34.5004],[-119.698,34.4999],[-119.7,34.4946],[-119.9,34.5206],[-119.637,34.4805],[-119.616,34.4955],[-119.638,34.4814],[-119.637,34.4974],[-119.6,34.4935],[-119.502,34.4668],[-119.638,34.51],[-119.75,34.5233],[-119.611,34.4785],[-119.782,34.5591],[-119.372,34.6166],[-120.201,34.5033],[-119.636,34.4837],[-119.18,34.7269],[-119.146,34.7229],[-119.6,34.4934],[-119.638,34.4842],[-120.036,34.7678],[-119.751,34.607],[-119.636,34.5009],[-119.636,34.4859],[-119.751,34.5208],[-119.636,34.4863],[-119.637,34.4973],[-119.645,34.4873],[-119.615,34.4955],[-119.639,34.5116],[-119.771,34.5446],[-119.634,34.4998],[-119.699,34.5129],[-119.694,34.5041],[-119.983,34.7331],[-119.671,34.5068],[-119.736,34.6039],[-119.851,34.7475],[-119.699,34.4898],[-119.595,34.4917],[-119.636,34.488],[-119.636,34.5017],[-119.678,34.521],[-119.953,34.5277],[-119.6,34.4936],[-119.225,34.4973],[-119.636,34.4862],[-119.587,34.4838],[-119.604,34.4932],[-119.697,34.4996],[-119.698,34.4998],[-119.58,34.4901],[-119.645,34.4878],[-119.957,34.5312],[-119.611,34.497],[-119.992,34.5307],[-119.748,34.5743],[-120.012,34.7685],[-119.996,34.7362],[-119.5,34.4863],[-119.699,34.491],[-119.633,34.5088],[-119.636,34.5015],[-119.638,34.4812],[-120.009,34.7629],[-119.588,34.4837],[-119.615,34.4954],[-119.611,34.4972],[-119.75,34.6079],[-119.637,34.4835],[-119.699,34.4914],[-119.749,34.6004],[-119.639,34.4853],[-119.699,34.5132],[-119.576,34.4751],[-119.501,34.4709],[-119.755,34.5085],[-119.635,34.5017],[-119.727,34.5772],[-119.636,34.4836],[-119.724,34.5221],[-119.638,34.4813],[-119.572,34.4877],[-119.698,34.5005],[-119.615,34.4958],[-119.783,34.55],[-119.639,34.4846],[-119.23,34.501]];
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