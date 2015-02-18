initialize = ->
  options =
    center: new google.maps.LatLng(-34.397, 150.644)
    zoom: 8
  map = new google.maps.Map(document.getElementById("map-canvas"), options);
google.maps.event.addDomListener(window, 'load', initialize);
