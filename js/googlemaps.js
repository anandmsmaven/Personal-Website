
function myMap() {
  var mapCanvas = document.getElementById("map-canvas");
  var myCenter = new google.maps.LatLng(43.422792, -80.442058);
  var mapOptions = {center: myCenter, zoom: 15};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    icon: "images/placeholder.png"
  });
  marker.setMap(map);
}
