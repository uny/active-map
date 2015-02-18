initialize = ->
  options =
    center: new google.maps.LatLng(-34.397, 150.644)
    zoom: 8
  map = new google.maps.Map(document.getElementById("map-canvas"), options);
  marker = new google.maps.Marker(
    position: map.getCenter()
    icon:
      path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW
      scale: 6
      strokeColor: 'red'
    map: map
  )
  infoWindow = new google.maps.InfoWindow(
    content: 'AAA'
  )
  google.maps.event.addListener(marker, 'click', ->
    infoWindow.open(map, marker)
  )
google.maps.event.addDomListener(window, 'load', initialize);
