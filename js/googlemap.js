function initializeMap() {

var styles = [
  {
    stylers: [
       { saturation: -100 }
    ]
  }
]

  var mapOptions = {
    center: new google.maps.LatLng(-34.397, 150.644),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    styles: styles,
    draggable: false,
		scrollwheel: false,
		disableDefaultUI: true,
    disableDoubleClickZoom: true,
  };

	mapDiv = document.getElementById("map_canvas");

	$(function(){
		var i = 0,
				idName;
		$('.map-canvas').each(function() {
			i++;
			idName = 'googlemap'+i;
			$(this).attr('id', idName);
			var item = document.getElementById(idName);
			new google.maps.Map(item, mapOptions);
		});
	});

	// $('.map-canvas:eq(2)').remove();
	// $('.map-canvas:eq(3)').remove();

}
